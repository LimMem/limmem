import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const AAAA = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "测试",
    "AAAA",
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

export default AAAA;
