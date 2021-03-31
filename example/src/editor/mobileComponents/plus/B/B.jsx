import React from "react";
import B from "@alitajs/antd-mobile-plus/lib/B";

const MyB = (props) => {
  const { ...restProps } = props;
  return <B {...restProps} />;
};

export default MyB;
