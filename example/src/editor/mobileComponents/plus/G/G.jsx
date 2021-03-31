import React from "react";
import G from "@alitajs/antd-mobile-plus/lib/G";

const MyG = (props) => {
  const { ...restProps } = props;
  return <G {...restProps} />;
};

export default MyG;
