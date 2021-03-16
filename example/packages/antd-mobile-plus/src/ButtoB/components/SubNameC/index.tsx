import React, { FC } from 'react';
import { withError, useTracker } from '@alitajs/tracker';
import './index.less';

interface SubNameCProps {}


const prefixCls = 'alita-subnamec';
const SubNameC: FC<SubNameCProps> = (props) => {
  return <div className={prefixCls}></div>;
};

SubNameC.displayName = 'SubNameC';
export default withError(SubNameC);
