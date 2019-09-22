import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './BasicInfo.scss'

@observer
class HourInfo extends Component {
  render() {
    const {data} = this.props;
    const insertAt = (str, sub, pos) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
    const weekHourStr = `${insertAt(`${data.weekdayBeginTime}`, ':', 2)} ~ ${insertAt(`${data.weekdayEndTime}`, ':', 2)}`;
    const weekendHourStr = `${insertAt(`${data.weekendBeginTime}`, ':', 2)} ~ ${insertAt(`${data.weekendEndTime}`, ':', 2)}`;
    const holidayHourStr = `${insertAt(`${data.holidayBeginTime}`, ':', 2)} ~ ${insertAt(`${data.holidayEndTime}`, ':', 2)}`;
    return (
      <div className="basic">
          <Typography.Text type="" className="title">운영시간</Typography.Text>
          <div className="row">
            <Typography.Text className="item-key">평일</Typography.Text>
            <Typography.Text className="">{weekHourStr}</Typography.Text>
          </div>
          <div className="row">
            <Typography.Text className="item-key">토요일</Typography.Text>
            <Typography.Text className="">{weekendHourStr}</Typography.Text>
          </div>
          <div className="row">
            <Typography.Text className="item-key">일요일/공휴일</Typography.Text>
            <Typography.Text className="">{holidayHourStr}</Typography.Text>
          </div>
      </div>
    );
  }
}

export default HourInfo;
