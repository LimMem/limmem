import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import { AAType } from './PropsType'
import './index.less';

const prefixCls = 'alita-aa';
const AA: FC<AAType> = (props) => {
  const log = useTracker(AA.displayName, {});
  return <div className={prefixCls}></div>;
};

AA.displayName = 'AA';
export default withError(AA);
