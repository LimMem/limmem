import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const ATestA = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "Test",
    "ATestA",
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

export default ATestA;
