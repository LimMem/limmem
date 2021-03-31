import React from "react";
import D from "@alitajs/antd-mobile-plus/lib/D";

const MyD = (props) => {
  const { ...restProps } = props;
  return <D {...restProps} />;
};

export default MyD;
