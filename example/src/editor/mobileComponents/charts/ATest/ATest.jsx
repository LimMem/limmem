import React from "react";
import ATest from "@alitajs/charts/lib/ATest";

const MyATest = (props) => {
  const { ...restProps } = props;
  return <ATest {...restProps} />;
};

export default MyATest;
