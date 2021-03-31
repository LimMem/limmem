import React from "react";
import Plus from "@alitajs/antd-mobile-plus/lib/Plus";

const MyPlus = (props) => {
  const { ...restProps } = props;
  return <Plus {...restProps} />;
};

export default MyPlus;
