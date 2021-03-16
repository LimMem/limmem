import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { CType } from './PropsType'
import './index.less';

const prefixCls = 'alita-c';
const C: FC<CType> = (props) => {
  const log = useTracker(C.displayName, {});
  return <div className={prefixCls}></div>;
};

C.displayName = 'C';
export default withError(C);
