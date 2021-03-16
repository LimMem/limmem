import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { NType } from './PropsType'
import './index.less';

const prefixCls = 'alita-n';
const N: FC<NType> = (props) => {
  const log = useTracker(N.displayName, {});
  return <div className={prefixCls}></div>;
};

N.displayName = 'N';
export default withError(N);
