// 此文件由脚本自动更新，请勿手动修改
/**
* @description: 移动端基础控件目录
*/

import React from 'react';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

const MyLoadable = compName => Loadable({
  loading: () => <Spin />,
  // eslint-disable-next-line prefer-template
  loader: () => import('./' + compName),
});
const MyLoadablePlus = compName => Loadable({
  loading: () => <Spin />,
  // eslint-disable-next-line prefer-template
  loader: () => import('./plus/' + compName),
});
const components = {
  Accordion: MyLoadable('Accordion'),
  AccordionPanel: MyLoadable('Accordion/AccordionPanel'),
  ActionSheet: MyLoadable('ActionSheet'),
  ActivityIndicator: MyLoadable('ActivityIndicator'),
  Badge: MyLoadable('Badge'),
  Button: MyLoadable('Button'),
  Calendar: MyLoadable('Calendar'),
  Card: MyLoadable('Card'),
  Carousel: MyLoadable('Carousel'),
  Checkbox: MyLoadable('Checkbox'),
  DatePicker: MyLoadable('DatePicker'),
  DatePickerView: MyLoadable('DatePickerView'),
  Drawer: MyLoadable('Drawer'),
  DynamicForm: MyLoadable('DynamicForm'),
  Flex: MyLoadable('Flex'),
  Grid: MyLoadable('Grid'),
  Icon: MyLoadable('Icon'),
  ImagePicker: MyLoadable('ImagePicker'),
  InputItem: MyLoadable('InputItem'),
  List: MyLoadable('List'),
  ListItem: MyLoadable('List/ListItem'),
  ListView: MyLoadable('ListView'),
  LocaleProvider: MyLoadable('LocaleProvider'),
  Menu: MyLoadable('Menu'),
  Modal: MyLoadable('Modal'),
  NavBar: MyLoadable('NavBar'),
  NoticeBar: MyLoadable('NoticeBar'),
  Pagination: MyLoadable('Pagination'),
  Picker: MyLoadable('Picker'),
  PickerView: MyLoadable('PickerView'),
  Popover: MyLoadable('Popover'),
  Progress: MyLoadable('Progress'),
  PullToRefresh: MyLoadable('PullToRefresh'),
  Radio: MyLoadable('Radio'),
  Range: MyLoadable('Range'),
  Result: MyLoadable('Result'),
  SearchBar: MyLoadable('SearchBar'),
  SegmentedControl: MyLoadable('SegmentedControl'),
  Slider: MyLoadable('Slider'),
  Stepper: MyLoadable('Stepper'),
  Steps: MyLoadable('Steps'),
  Step: MyLoadable('Steps/Step'),
  SwipeAction: MyLoadable('SwipeAction'),
  Switch: MyLoadable('Switch'),
  TabBar: MyLoadable('TabBar'),
  Tabs: MyLoadable('Tabs'),
  TabPanel: MyLoadable('Tabs/TabPanel'),
  Tag: MyLoadable('Tag'),
  Text: MyLoadable('Text'),
  TextareaItem: MyLoadable('TextareaItem'),
  Toast: MyLoadable('Toast'),
  View: MyLoadable('View'),
  WhiteSpace: MyLoadable('WhiteSpace'),
  WingBlank: MyLoadable('WingBlank'),
  QRCode: MyLoadablePlus('QRCode'),
  Capsule: MyLoadablePlus('Capsule'),
  CalendarPlus: MyLoadablePlus('CalendarPlus'),
  CityPicker: MyLoadablePlus('CityPicker'),
  Empty: MyLoadablePlus('Empty'),
  YearMonthView: MyLoadablePlus('YearMonthView'),
  G: MyLoadablePlus('G'),
    AAAA: MyLoadablePlus('AAAA'),
    AAAA: MyLoadablePlus('AAAA'),
    Charts: MyLoadablePlus('Charts'),
    Plus: MyLoadablePlus('Plus'),
    ATest: MyLoadablePlus('ATest'),
    ATest: MyLoadablePlus('ATest'),
    ATestA: MyLoadablePlus('ATestA'),
    //待添加区域
};
export default components;
