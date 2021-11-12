import React from 'react'
import {
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody

} from '@trendmicro/react-styled-ui';

import useCounterModel from "../model/useCounterModel";
function About() {
  //const counter = useCounterModel(model => [model.count]);
  // 只希望读取当前 model 的值，而不希望订阅其更新。
  const counter = useCounterModel.data;
  return (
    <div>
      <Popover hideArrow trigger="hover">
        <PopoverTrigger>
           <span>This is a Tonic ui demo for Tooltip. {counter.count}</span>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>
        </PopoverContent>
      </Popover>
    </div>

  )
}
export default About