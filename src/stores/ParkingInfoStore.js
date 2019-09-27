import {action, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class ParkingInfoStore {
    @observable parkingData = this.dummyParkingData();
    @observable loading = false;
    @observable imgList = ['https://t1.daumcdn.net/cfile/tistory/2322044857EFBB1713','http://img.asiatoday.co.kr/file/2019y/06m/30d/2019063001003093900180291.jpg',
  'http://www.ulsanpress.net/news/photo/201810/317629_117491_3056.jpg','http://imgnews.naver.net/image/5038/2015/12/24/459538_113430_300_99_20151224203208.JPG','http://m.nowonsc.kr/images/group02/resident_gallery_1.jpg',
'http://www.sijung.co.kr/news/photo/201903/227899_62958_94.jpg','http://www.yangsanilbo.com/news/photo/201702/61394_26794_5319.jpg','http://www.brnews.co.kr/news/photo/201808/918_1531_5436.jpg','http://www.nyjnews.net/imgdata/nyjnews_net/201909/2019090648293600.jpg'];

    constructor(root) {
        this.root = root;
    }

    @action handleparkingData = (parkingData) => {
        this.parkingData = parkingData;
    };

    @asyncAction
    async* getParkingData(code) {
      this.loading = true;
      yield api.search(code).then(res => {
        this.parkingData = res.data;
      }).catch(err => console.log("Error"));
      // this.parkingData = result;
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
