import React from "react";
import {{{ mobileComponents }}} from "@alitajs/antd-mobile-plus/lib/{{{ mobileComponents }}}";

const My{{{ mobileComponents }}} = (props) => {
  const { ...restProps } = props;
  return <{{{ mobileComponents }}} {...restProps} />;
};

export default My{{{ mobileComponents }}};
