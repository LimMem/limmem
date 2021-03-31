import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const Plus = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "Plus测试",
    "Plus",
    {
      ...props,
    },
    "@alitajs/antd-mobile-plus"
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

export default Plus;
