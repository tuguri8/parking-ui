import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './BasicInfo.scss'

@observer
class BasicInfo extends Component {
  render() {
    const {data} = this.props;
    const basicPriceStr = data.rates === 0 || data.timeRate === 0 ? "-" : `${data.rates}원/${data.timeRate}분`;
    const addPriceStr = data.addRates === 0 || data.addTimeRate === 0 ? "-" : `${data.addRates}원/${data.addTimeRate}분`;
    const dayMaximumStr = data.dayMaximum === 0 ? "-" : `${data.dayMaximum}원`;
    return (
      <div className="basic">
          <Typography.Text type="" className="title">기본정보</Typography.Text>
          <div className="row">
            <Typography.Text className="item-key">기본요금</Typography.Text>
            <Typography.Text className="">{basicPriceStr}</Typography.Text>
          </div>
          <div className="row">
            <Typography.Text className="item-key">추가요금</Typography.Text>
            <Typography.Text className="">{addPriceStr}</Typography.Text>
          </div>
          <div className="row">
            <Typography.Text className="item-key">일 최대 요금</Typography.Text>
            <Typography.Text className="">{dayMaximumStr}</Typography.Text>
          </div>
      </div>
    );
  }
}

export default BasicInfo;
