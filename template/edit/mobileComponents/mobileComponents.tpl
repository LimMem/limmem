import React from "react";
import {{{ mobileComponents }}} from "{{{ compLib }}}/lib/{{{ mobileComponents }}}";

const My{{{ mobileComponents }}} = (props) => {
  const { ...restProps } = props;
  return <{{{ mobileComponents }}} {...restProps} />;
};

export default My{{{ mobileComponents }}};
