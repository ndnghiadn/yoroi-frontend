// @flow
import type { Node } from 'react';
import { Route, Switch } from 'react-router-dom';
import type { StoresMap } from './stores/index';
import type { ActionsMap } from './actions/index';
import { ROUTES } from './routes-config';

// PAGES
import ConnectContainer from './containers/ConnectContainer';
import Layout from './components/layout/Layout';
import SignTxContainer from './containers/SignTxContainer';
import EnableCatalystContainer from './containers/EnableCatalystContainer';
import SubmitDelegationContainer from './containers/SubmitDelegationContainer';
import LoadingPage from '../containers/LoadingPage';

export const Routes = (stores: StoresMap, actions: ActionsMap): Node => {
  if (stores.loading.isLoading) {
    return <LoadingPage stores={stores} actions={actions} />;
  }
  return wrapPages(getContent(stores, actions));
};

const getContent = (stores, actions) => (
  <Switch>
    <Route
      exact
      path={ROUTES.ROOT}
      component={props => <ConnectContainer {...props} stores={stores} actions={actions} />}
    />
    <Route
      exact
      path={ROUTES.SIGNIN_TRANSACTION}
      component={props => <SignTxContainer {...props} stores={stores} actions={actions} />}
    />
    <Route
      exact
      path={ROUTES.ENABLE_CATALYST}
      component={props => <EnableCatalystContainer {...props} stores={stores} actions={actions} />}
    />
    <Route
      exact
      path={ROUTES.SUBMIT_DELEGATION}
      component={props => <SubmitDelegationContainer {...props} stores={stores} actions={actions} />}
    />
  </Switch>
);

export function wrapPages(children: Node): Node {
  return <Layout>{children}</Layout>;
}
