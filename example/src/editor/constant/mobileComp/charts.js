import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const Charts = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "charts组件",
    "Charts",
    {
      ...props,
    },
    "@alitajs/charts"
  ),
  ...restConfigs,
  setEvents: [
    {
      dataName: "event",
      dataId: createId(),
      children: [],
      path: [],
      value: "onChange",
      params: [
        {
          title: "事件对象",
          name: "e",
          value: "$e$",
        },
      ],
    },
  ],
});

export default Charts;
