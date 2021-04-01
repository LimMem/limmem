import React from "react";
import ATestA from "@alitajs/charts/lib/ATestA";

const MyATestA = (props) => {
  const { ...restProps } = props;
  return <ATestA {...restProps} />;
};

export default MyATestA;
