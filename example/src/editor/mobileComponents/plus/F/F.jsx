import React from "react";
import F from "@alitajs/antd-mobile-plus/lib/F";

const MyF = (props) => {
  const { ...restProps } = props;
  return <F {...restProps} />;
};

export default MyF;
