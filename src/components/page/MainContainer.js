import React, {Component} from 'react';
import {Spin} from 'antd';
import {inject, observer} from 'mobx-react/index';
import CommonHeader from "../common/CommonHeader";
import ParkingImg from "../ParkingImg"
import TitleInfo from "../TitleInfo"
import BasicInfo from "../BasicInfo"
import AdditionalInfo from "../AdditionalInfo"
import HourInfo from "../HourInfo"
import queryString from "query-string";


@inject('parkingInfoStore')
@observer
class MainContainer extends Component {
    componentDidMount () {
        // fixme
        const query = queryString.parse(this.props.location.search);
        console.log(query.code);
        this.props.parkingInfoStore.getParkingData(query.code);
    }

    render() {
      const {parkingInfoStore} = this.props;
        return (
            <React.Fragment>
                <CommonHeader/>
                <ParkingImg/>
                <TitleInfo data={parkingInfoStore.parkingData}/>
                <BasicInfo data={parkingInfoStore.parkingData}/>
                <AdditionalInfo data={parkingInfoStore.parkingData}/>
                <HourInfo data={parkingInfoStore.parkingData}/>
            </React.Fragment>
        )
    }
}

export default MainContainer;
