import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface SubNameBProps {}


const prefixCls = 'alita-subnameb';
const SubNameB: FC<SubNameBProps> = (props) => {
  return <div className={prefixCls}></div>;
};

SubNameB.displayName = 'SubNameB';
export default withError(SubNameB);
