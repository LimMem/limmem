import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ButtoAType } from './PropsType'
import './index.less';

const prefixCls = 'alita-buttoa';
const ButtoA: FC<ButtoAType> = (props) => {
  const log = useTracker(ButtoA.displayName, {});
  return <div className={prefixCls}></div>;
};

ButtoA.displayName = 'ButtoA';
export default withError(ButtoA);
