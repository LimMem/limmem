import createId from "$editor/utils/createId";
import { getDefaultConfigs } from "../compList";

const C = ({ props = {}, ...restConfigs }) => ({
  ...getDefaultConfigs(
    1,
    "测试C",
    "C",
    {
      ...props,
    },
    "antd-mobile"
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

export default C
