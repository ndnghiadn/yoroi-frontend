// @flow
import type { ComponentType, Node } from 'react';
import { Box, styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { injectIntl } from 'react-intl';
import { observer } from 'mobx-react';
import type { $npm$ReactIntl$IntlShape } from 'react-intl';
import globalMessages from '../../../../i18n/global-messages';
import { SocialMediaStakePool } from './StakePool/StakePool';
import type { PoolData } from '../../../../containers/wallet/staking/SeizaFetcher';
import { getAvatarFromPoolId } from '../utils';
import { Alert } from '@mui/material';
import { Stack } from '@mui/material';

type Props = {|
  delegatedPool: PoolData,
  +undelegate: void | (void => Promise<void>),
  poolTransition?: any,
|};

type Intl = {|
  intl: $npm$ReactIntl$IntlShape,
|};

function DelegatedStakePoolCard({
  delegatedPool,
  undelegate,
  intl,
  poolTransition,
}: Props & Intl): Node {
  const { id, name, ticker, poolSize, share, avatar, roa, socialLinks, websiteUrl } =
    delegatedPool || {};
  const avatarGenerated = getAvatarFromPoolId(id);

  const renderDelegationBtn = () => {
    if (poolTransition?.deadlineMilliseconds) {
      return <UpdatePoolButton variant="danger">UPDATE POOL</UpdatePoolButton>;
    }

    return (
      <UndelegateButton
        variant="text"
        onClick={undelegate}
        disabled={!undelegate}
        sx={{
          lineHeight: '21px',
          '&.MuiButton-sizeMedium': {
            height: 'unset',
            p: '9px 15px',
          },
        }}
      >
        {intl.formatMessage(globalMessages.undelegateLabel)}
      </UndelegateButton>
    );
  };

  return (
    <Card sx={{ border: '1px solid', borderColor: 'grayscale.200', bgcolor: 'background.card' }}>
      <Stack direction="row" px={4} py={2} alignItems="center">
        <Typography component="div" variant="h5" color="common.black" fontWeight={500}>
          {intl.formatMessage(globalMessages.stakePoolDelegated)}
        </Typography>
        {renderDelegationBtn()}
      </Stack>
      <Box
        sx={{
          borderBottom: '1px solid',
          borderBottomColor: 'grayscale.200',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      ></Box>
      <Wrapper sx={{ paddingBottom: 0 }}>
        <AvatarWrapper>
          {avatar != null ? (
            <AvatarImg src={avatar} alt="stake pool logo" />
          ) : (
            <AvatarImg src={avatarGenerated} alt="stake pool logo" />
          )}
        </AvatarWrapper>
        <Box marginLeft="16px" sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <Typography
            component="div"
            color="grayscale.max"
            variant="body1"
            fontWeight="medium"
            mb="3px"
          >
            {ticker !== undefined ? `[${ticker}]` : ''} {name}
          </Typography>
          <SocialMediaStakePool
            color="grayscale.500"
            websiteUrl={websiteUrl}
            socialLinks={socialLinks}
          />
        </Box>
      </Wrapper>
      <Wrapper justifyContent="space-between" sx={{ paddingBottom: '25px' }}>
        {roa != null ? (
          <Box sx={{ display: 'flex', flexFlow: 'column' }}>
            <Typography
              component="div"
              variant="caption1"
              color="grayscale.500"
              sx={{ textTransform: 'uppercase' }}
            >
              {intl.formatMessage(globalMessages.roa30d)}
            </Typography>
            <Typography as="span" fontWeight={500} color="grayscale.max" variant="h2">
              {roa} %
            </Typography>
          </Box>
        ) : null}
        {poolSize != null && (
          <Box sx={{ display: 'flex', flexFlow: 'column' }}>
            <Typography
              component="div"
              variant="caption1"
              color="grayscale.500"
              sx={{ textTransform: 'uppercase' }}
            >
              {intl.formatMessage(globalMessages.poolSize)}
            </Typography>
            <Typography as="span" fontWeight={500} color="grayscale.max" variant="h2">
              {poolSize}
            </Typography>
          </Box>
        )}
        {share != null && (
          <Box sx={{ display: 'flex', flexFlow: 'column' }}>
            <Typography
              component="div"
              variant="caption1"
              color="grayscale.500"
              sx={{ textTransform: 'uppercase' }}
            >
              {intl.formatMessage(globalMessages.poolSaturation)}
            </Typography>
            <Typography as="span" fontWeight={500} color="grayscale.max" variant="h2">
              {share} %
            </Typography>
          </Box>
        )}
      </Wrapper>
      {poolTransition?.deadlineMilliseconds && (
        <Alert sx={{ width: '100%', justifyContent: 'center' }} severity="error">
          This pool is NOT generating staking rewards anymore
        </Alert>
      )}
    </Card>
  );
}
export default (injectIntl(observer(DelegatedStakePoolCard)): ComponentType<Props>);

const Card = styled(Box)({
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});

const Wrapper: any = styled(Box)({
  display: 'flex',
  padding: 24,
});

const AvatarWrapper: any = styled(Box)({
  width: '40px',
  height: '40px',
  minWidth: '40px',
  marginRight: '12px',
  borderRadius: '20px',
  overflow: 'hidden',
});
const AvatarImg: any = styled('img')({
  width: '100%',
  background: 'white',
  objectFit: 'scale-down',
});
const UndelegateButton: any = styled(Button)({
  minWidth: 'auto',
  width: 'unset',
  marginLeft: 'auto',
});
const UpdatePoolButton: any = styled(Button)({
  minWidth: 'auto',
  width: 'unset',
  marginLeft: 'auto',
  background: 'red',
  color: 'white',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
});
