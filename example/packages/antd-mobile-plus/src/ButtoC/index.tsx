import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { ButtoCType } from './PropsType'
import './index.less';

const prefixCls = 'alita-buttoc';
const ButtoC: FC<ButtoCType> = (props) => {
  const log = useTracker(ButtoC.displayName, {});
  return <div className={prefixCls}></div>;
};

ButtoC.displayName = 'ButtoC';
export default withError(ButtoC);
