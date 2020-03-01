// @flow
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { intlShape, defineMessages } from 'react-intl';
import MainLayout from '../MainLayout';
import VerticallyCenteredLayout from '../../components/layout/VerticallyCenteredLayout';
import SidebarContainer from '../SidebarContainer';
import NavBarContainer from '../NavBarContainer';
import WalletWithNavigation from '../../components/wallet/layouts/WalletWithNavigation';
import NavBarBack from '../../components/topbar/NavBarBack';
import LoadingSpinner from '../../components/widgets/LoadingSpinner';
import { buildRoute } from '../../utils/routing';
import { ROUTES } from '../../routes-config';
import type { InjectedContainerProps } from '../../types/injectedPropsType';
import environment from '../../environment';

type Props = InjectedContainerProps;

const messages = defineMessages({
  backButton: {
    id: 'wallet.nav.backButton',
    defaultMessage: '!!!Back to my wallets',
  },
});

@observer
export default class Wallet extends Component<Props> {

  static contextTypes = {
    intl: intlShape.isRequired,
  };

  navigateToWallets: string => void = (destination) => {
    this.props.actions.router.goToRoute.trigger({ route: destination });
  }

  isActiveScreen = (page: string, subpage: ?boolean): boolean => {
    const { app } = this.props.stores;
    const { selected } = this.props.stores.wallets;
    if (selected == null) return false;
    const screenRoute = buildRoute(
      ROUTES.WALLETS.PAGE,
      {
        id: selected.getPublicDeriverId(),
        page
      }
    );
    if (subpage === true) {
      return app.currentRoute.indexOf(screenRoute) !== -1;
    }
    return app.currentRoute === screenRoute;
  };

  handleWalletNavItemClick: (string) => void = (page) => {
    const { wallets } = this.props.stores;
    const selected = wallets.selected;
    if (selected == null) return;
    this.props.actions.router.goToRoute.trigger({
      route: ROUTES.WALLETS.PAGE,
      params: { id: selected.getPublicDeriverId(), page },
    });
  };

  render() {
    const { intl } = this.context;
    const { wallets, } = this.props.stores;
    const { actions, stores } = this.props;
    const { checkAdaServerStatus } = stores.substores[environment.API].serverConnectionStore;
    const sidebarContainer = (<SidebarContainer actions={actions} stores={stores} />);
    const navbarContainer = (
      <NavBarContainer
        actions={actions}
        stores={stores}
        title={
          <NavBarBack
            route={ROUTES.MY_WALLETS}
            onBackClick={this.navigateToWallets}
            title={intl.formatMessage(messages.backButton)}
          />
        }
      />
    );

    if (!wallets.selected) {
      return (
        <MainLayout
          navbar={navbarContainer}
          connectionErrorType={checkAdaServerStatus}
          showInContainer
          showAsCard
        >
          <VerticallyCenteredLayout>
            <LoadingSpinner />
          </VerticallyCenteredLayout>
        </MainLayout>
      );
    }

    return (
      <MainLayout
        sidebar={sidebarContainer}
        navbar={navbarContainer}
        connectionErrorType={checkAdaServerStatus}
        showInContainer
        showAsCard
      >
        <WalletWithNavigation
          wallet={wallets.selected}
          isActiveScreen={this.isActiveScreen}
          onWalletNavItemClick={this.handleWalletNavItemClick}
        >
          {this.props.children}
        </WalletWithNavigation>
      </MainLayout>
    );
  }
}
