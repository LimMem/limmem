import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const ATest = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "Test",
    "ATest",
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

export default ATest;
