import {action, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class ParkingInfoStore {
    @observable parkingData = this.dummyParkingData();
    @observable loading = false;

    constructor(root) {
        this.root = root;
    }

    @action handleparkingData = (parkingData) => {
        this.parkingData = parkingData;
    };

    @asyncAction
    async* getParkingData(code) {
      this.loading = true;
      let result = yield api.search(code).then(res => res.data);
      this.parkingData = result;
      this.loading = yield false;
    };

    dummyParkingData = () => {
      return {
                    createdDateTime: "2019-06-04T20:30:55.087",
                    lastModifiedDateTime: "2019-06-04T20:30:55.087",
                    id: 312,
                    parkingCode: "1496178",
                    parkingName: "강남대로150길(구)",
                    addr: "강남구 논현동 280-1",
                    parkingType: "NS",
                    parkingTypeNm: "노상 주차장",
                    operationRule: "1",
                    operationRuleNm: "시간제 주차장",
                    tel: "",
                    queStatus: "0",
                    queStatusNm: "미연계중",
                    capacity: 9,
                    curParking: 0,
                    curParkingTime: "",
                    payYn: "Y",
                    payNm: "유료",
                    nightFreeOpen: "N",
                    nightFreeOpenNm: "야간 미개방",
                    weekdayBeginTime: "1000",
                    weekdayEndTime: "2000",
                    weekendBeginTime: "0000",
                    weekendEndTime: "0000",
                    holidayBeginTime: "0000",
                    holidayEndTime: "0000",
                    syncTime: "2019-01-18 10:47:04",
                    saturdayPayYn: "Y",
                    saturdayPayNm: "유료",
                    holidayPayYn: "Y",
                    holidayPayNm: "유료",
                    fullTimeMonthly: "150000",
                    grpParkNm: "1168010800133",
                    rates: 400,
                    timeRate: 5,
                    addRates: 0,
                    addTimeRate: 0,
                    busRates: 0,
                    busTimeRate: 0,
                    busAddTimeRate: 0,
                    busAddRates: 0,
                    dayMaximum: 0,
                    lat: 37.51578975,
                    lng: 127.02044247,
                    assignCode: "PIS02",
                    assignCodeNm: "미배정,미점유",
                    sidoName: "서울특별시",
                    gunguName: "강남구",
                    dongName: "논현동"
          };
    }
}
