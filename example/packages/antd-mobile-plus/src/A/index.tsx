import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { AType } from './PropsType'
import './index.less';

const prefixCls = 'alita-a';
const A: FC<AType> = (props) => {
  const log = useTracker(A.displayName, {});
  return <div className={prefixCls}></div>;
};

A.displayName = 'A';
export default withError(A);
