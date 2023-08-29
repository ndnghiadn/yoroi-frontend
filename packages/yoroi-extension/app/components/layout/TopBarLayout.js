// @flow
import type { Node, ComponentType } from 'react';
import { observer } from 'mobx-react';
import styles from './TopBarLayout.scss';
import { withLayout } from '../../styles/context/layout';
import { Box } from '@mui/system';
import { THEMES } from '../../styles/utils';

type Props = {|
  +banner?: Node,
  +topbar?: Node,
  +navbar?: Node,
  +sidebar?: Node,
  +children?: ?Node,
  +notification?: ?Node,
  +languageSelectionBackground?: boolean,
  +showInContainer?: boolean,
  +showAsCard?: boolean,
  +asModern?: boolean,
  +bgcolor?: string,
|};

type InjectedProps = {| isRevampLayout: boolean, currentTheme: string |};

type AllProps = {| ...Props, ...InjectedProps |};
/** Adds a top bar above the wrapped node */
function TopBarLayout({
  banner,
  topbar,
  navbar,
  sidebar,
  children,
  notification,
  languageSelectionBackground,
  showInContainer,
  showAsCard,
  currentTheme,
  isRevampLayout,
  asModern,
  bgcolor,
}: AllProps) {
  const isModern = currentTheme === THEMES.YOROI_MODERN;

  const getContentUnderBanner: void => Node = () => {
    const topbarComponent = <Box sx={{ zIndex: 2 }}>{topbar}</Box>;
    const navbarComponent = <Box sx={{ zIndex: 2 }}>{navbar}</Box>;
    const content = (
      <>
        {topbar != null ? topbarComponent : null}
        {navbar != null ? navbarComponent : null}
        {notification}
        <Box
          sx={{
            position: 'relative',
            overflow: 'auto',
            height: '100%',
            '&::-webkit-scrollbar-button': {
              height: '7px',
              display: 'block',
            },
            boxShadow: !isRevampLayout && showAsCard === true && '0 2px 12px 0 rgba(0, 0, 0, 0.06)',
            borderRadius: !isRevampLayout && showAsCard === true && '8px',
            ...(showInContainer === true && {
              bgcolor: 'common.white',
              width: '100%',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              flex: '0 1 auto',
              height: '100%',
            }),
            overflow: isRevampLayout && asModern !== true && !isModern ? 'auto' : '',
          }}
        >
          {isRevampLayout && asModern !== true && !isModern ? (
            <Box
              sx={{
                bgcolor: bgcolor || 'common.white',
                height: '100%',
                width: '100%',
                maxWidth: '1872px',
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    minHeight: '200px',
                    padding: '24px',
                    pb: 0,
                    bgcolor: bgcolor || 'common.white',
                  }}
                >
                  {children}
                </Box>
              </Box>
            </Box>
          ) : (
            <Box sx={{ height: '100%', minHeight: '200px' }}>{children}</Box>
          )}
        </Box>
      </>
    );
    if (showInContainer === true) {
      return isRevampLayout && asModern !== true && !isModern ? (
        <Box
          sx={{
            maxWidth: '100%',
            width: '100%',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 92px)',
          }}
        >
          {content}
        </Box>
      ) : (
        <Box
          sx={{
            height: '100%',
            minHeight: '200px',
            backgroundColor: 'grey.50',
            ...(showInContainer === true && {
              maxWidth: '1295px',
              paddingLeft: '40px',
              paddingRight: '40px',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              flexDirection: 'column',
              maxHeight: 'calc(100vh - 110px)',
            }),
            backgroundColor: isRevampLayout && asModern !== true && !isModern ? 'common.white' : '',
          }}
        >
          {content}
        </Box>
      );
    }
    return content;
  };

  const sidebarComponent = <Box sx={{ flex: '1 0 auto' }}>{sidebar}</Box>;

  return (
    <Box
      sx={{
        backgroundColor: 'common.white',
        boxShadow: isModern ? '0 0 70px 0 rgba(0, 0, 0, 0.75)' : 'none',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        width: '100%',
      }}
      // TODO: remove after removing scss webpack loader
      className={languageSelectionBackground === true ? styles.languageSelectionBackground : ''}
    >
      <Box
        sx={{
          fontWeight: 400,
          display: 'flex',
          flexWrap: 'nowrap',
          minHeight: '100%',
        }}
      >
        {sidebar != null ? sidebarComponent : null}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            backgroundColor:
              showInContainer === true && isRevampLayout
                ? 'common.white'
                : 'var(--yoroi-palette-gray-50)',

            backgroundColor: isRevampLayout && asModern !== true && !isModern ? 'common.white' : '',
          }}
        >
          {banner}
          {getContentUnderBanner()}
        </Box>
      </Box>
    </Box>
  );
}

export default (withLayout(observer(TopBarLayout)): ComponentType<Props>);

TopBarLayout.defaultProps = {
  banner: undefined,
  topbar: undefined,
  navbar: undefined,
  sidebar: undefined,
  children: undefined,
  notification: undefined,
  languageSelectionBackground: false,
  showInContainer: false,
  showAsCard: false,
  asModern: false,
  bgcolor: undefined,
};
