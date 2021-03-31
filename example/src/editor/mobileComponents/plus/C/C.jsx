import React from "react";
import C from "@alitajs/antd-mobile-plus/lib/C";

const MyC = (props) => {
  const { ...restProps } = props;
  return <C {...restProps} />;
};

export default MyC;
