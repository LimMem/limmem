import React from "react";
import E from "@alitajs/antd-mobile-plus/lib/E";

const MyE = (props) => {
  const { ...restProps } = props;
  return <E {...restProps} />;
};

export default MyE;
