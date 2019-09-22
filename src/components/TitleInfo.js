import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './TitleInfo.scss'

@observer
class TitleInfo extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className="title-area">
          <Typography.Text type="" className="title">{data.parkingName + " 주차장"}</Typography.Text>
          <Typography.Text type="" className="subtitle">{data.addr}</Typography.Text>
      </div>
    );
  }
}

export default TitleInfo;
