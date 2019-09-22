import {action, observable} from 'mobx';
import {asyncAction} from 'mobx-utils';
import {api} from "../api";

export default class ParkingInfoStore {
    @observable parkingData = this.dummyParkingData();
    @observable loading = false;
    @observable imgList = ['https://t1.daumcdn.net/cfile/tistory/2322044857EFBB1713','http://img.asiatoday.co.kr/file/2019y/06m/30d/2019063001003093900180291.jpg',
  'http://www.ulsanpress.net/news/photo/201810/317629_117491_3056.jpg','http://blogfiles.naver.net/20150120_65/polarbear55_1421720675596V0OQl_JPEG/%B4%EB%B1%B8_%B0%F8%BF%B5%C1%D6%C2%F7%C0%E5_%289%29.JPG','http://blogfiles.naver.net/MjAxODA0MTFfMTc0/MDAxNTIzNDEyMDY1NzQ2.PzNONjrK04se1O11zHnSEk4YNBvArRlZ13kRFqoRn3kg.WKAHJNuVFCJVjmuchF5rSj1J-0ieR6qud6BXd472bxsg.JPEG.nerve2016/%BE%EE%B8%B0%C0%CC_%B4%EB%B0%F8%BF%F8_%C1%D6%C2%F7_%B4%C9%B5%BF_%B0%F8%BF%B5_%C1%D6%C2%F7%C0%E5%C0%CC_%C1%C1%BE%C6%BF%E4_%284%29.JPG','http://imgnews.naver.net/image/5038/2015/12/24/459538_113430_300_99_20151224203208.JPG','http://m.nowonsc.kr/images/group02/resident_gallery_1.jpg','http://blogfiles.naver.net/MjAxNzEyMDRfNzYg/MDAxNTEyMzU4MDQ4MDU0.rZpepCX7Yfhv2_ozckFbyFipRsu9A-nV3GsKpLhD4Dsg.OsD-xg4u9m4j4apEHOhqSZ5eqXjbUhGzmW-m2TbCsk8g.JPEG.lllsarulll/%C0%FC%C1%D6_%B0%B4%B8%AE%B4%DC%B1%E6_%C1%D6%C2%F7%C0%E5%2C_%BF%C0%B0%C5%B8%AE%B0%F8%BF%EB%C1%D6%C2%F7%C0%E5_%280-1%29.JPG'];

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
