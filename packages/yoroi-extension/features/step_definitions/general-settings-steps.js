// @flow

import { When, Then } from 'cucumber';
import { camelCase } from 'lodash';
import { waitUntilUrlEquals, navigateTo } from '../support/helpers/route-helpers';
import i18n from '../support/helpers/i18n-helpers';
import { By } from 'selenium-webdriver';

When(/^I navigate to the general settings screen$/, async function () {
  await navigateTo.call(this, '/settings');
  await navigateTo.call(this, '/settings/general');

  await waitUntilUrlEquals.call(this, '/settings/general');
  await this.waitForElement('.SettingsLayout_component');
});

When(/^I click on secondary menu "([^"]*)" item$/, async function (buttonName) {
  const formattedButtonName = camelCase(buttonName);
  const buttonSelector = `.SubMenuItem_component.${formattedButtonName}`;
  await this.click(buttonSelector);
  await this.waitForElement(`.SubMenuItem_component.SubMenuItem_active.${formattedButtonName}`);
});

When(/^I select second theme$/, async function () {
  await this.click('.ThemeSettingsBlock_themesWrapper > button:nth-child(2)');
});

When(/^I open General Settings language selection dropdown$/, async function () {
  await this.click('//div[starts-with(@id, "languageId")]', By.xpath);
});

Then(/^I should see secondary menu (.*) item disabled$/, async function (buttonName) {
  const formattedButtonName = camelCase(buttonName);
  const buttonSelector = `.SettingsMenuItem_component.SettingsMenuItem_disabled.${formattedButtonName}`;
  const label = await i18n.formatMessage(this.driver, {
    id: `settings.menu.${formattedButtonName}.link.label`,
  });
  await this.waitUntilText(buttonSelector, label.toUpperCase());
});

Then(/^The Japanese language should be selected$/, async function () {
  await this.driver.wait(async () => {
    const activeLanguage = await i18n.getActiveLanguage(this.driver);
    return activeLanguage === 'ja-JP';
  });
});

Then(/^I should see second theme as selected$/, async function () {
  await this.waitForElement(
    '.ThemeSettingsBlock_themesWrapper button:nth-child(2).ThemeSettingsBlock_active'
  );
});

Then(/^The selected level is "([^"]*)"$/, async function (level) {
  await this.waitUntilText('.currentLevel', level.toUpperCase());
});

Then(/^I select the most complex level$/, async function () {
  await this.waitForElement('.ComplexityLevelForm_cardsWrapper');
  const levels = await this.driver.findElements(By.css('.ComplexityLevelForm_card'));
  const highestLevelCard = levels[levels.length - 1];
  const cardChoseButton = await highestLevelCard.findElement(By.xpath('.//button'));
  await cardChoseButton.click(); // choose most complex level for tests
});

Then(/^I select the simplest level$/, async function () {
  await this.waitForElement('.ComplexityLevelForm_cardsWrapper');
  const levels = await this.driver.findElements(By.css('.ComplexityLevelForm_card'));
  const simplestLevelCard = levels[0];
  const cardChoseButton = await simplestLevelCard.findElement(By.xpath('.//button'));
  await cardChoseButton.click(); // chose the simplest
});
