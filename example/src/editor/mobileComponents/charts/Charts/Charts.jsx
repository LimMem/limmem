import React from "react";
import Charts from "@alitajs/charts/lib/Charts";

const MyCharts = (props) => {
  const { ...restProps } = props;
  return <Charts {...restProps} />;
};

export default MyCharts;
