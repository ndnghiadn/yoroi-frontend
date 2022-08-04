Feature: Wallet UI Settings

  Background:
    Given I have opened the extension
    And I have completed the basic setup
    Then I should see the Create wallet screen
    Given There is a Shelley wallet stored named shelley-simple-15
    Then Revamp. I switch to revamp version
    Then I should see the "General Settings" page

@currency-1
  Scenario: Change currency pair to JPY
    When I select JPY as fiat pairing currency
    Then I see the correct conversion value for JPY on header

@currency-2
  Scenario: Change currency pair back to ADA
    When I select USD as fiat pairing currency
    And I select ADA as fiat pairing currency
    Then I see only ADA value on header

@currency-3
  Scenario: Check wallet transactions pairings after changing currency to EUR
    When I select EUR as fiat pairing currency
    And Revamp. I go to the wallet shelley-simple-15
    Then I validate the transaction amount to EUR currency pairing
