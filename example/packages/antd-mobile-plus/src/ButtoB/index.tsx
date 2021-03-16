import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ButtoBType } from './PropsType'
import './index.less';

const prefixCls = 'alita-buttob';
const ButtoB: FC<ButtoBType> = (props) => {
  const log = useTracker(ButtoB.displayName, {});
  return <div className={prefixCls}></div>;
};

ButtoB.displayName = 'ButtoB';
export default withError(ButtoB);
