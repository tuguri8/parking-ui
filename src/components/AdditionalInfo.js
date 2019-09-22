import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './BasicInfo.scss'

@observer
class AdditionalInfo extends Component {
  render() {
    const {data} = this.props;
    const parkingType = `${data.parkingTypeNm.replace(" 주차장", "")}/${data.operationRuleNm.replace(" 주차장", "")}`;
    const capacityStr = data.capacity === 0 ? "-" : data.capacity+"면";
    return (
      <div className="basic">
          <Typography.Text type="" className="title">부가정보</Typography.Text>
          <div className="row">
            <Typography.Text className="item-key">유형</Typography.Text>
            <Typography.Text className="">{parkingType}</Typography.Text>
          </div>
          <div className="row">
            <Typography.Text className="item-key">총 주차대수</Typography.Text>
            <Typography.Text className="">{capacityStr}</Typography.Text>
          </div>
      </div>
    );
  }
}

export default AdditionalInfo;
