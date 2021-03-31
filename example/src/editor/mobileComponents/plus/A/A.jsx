import React from "react";
import A from "@alitajs/antd-mobile-plus/lib/A";

const MyA = (props) => {
  const { ...restProps } = props;
  return <A {...restProps} />;
};

export default MyA;
