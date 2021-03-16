import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface AProps {}


const prefixCls = 'alita-a';
const A: FC<AProps> = (props) => {
  return <div className={prefixCls}></div>;
};

A.displayName = 'A';
export default withError(A);
