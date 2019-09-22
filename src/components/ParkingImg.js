import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './ParkingImg.scss'

@observer
class ParkingImg extends Component {
  render() {
    const imgList = ['https://t1.daumcdn.net/cfile/tistory/2322044857EFBB1713','http://img.asiatoday.co.kr/file/2019y/06m/30d/2019063001003093900180291.jpg',
  'http://www.ulsanpress.net/news/photo/201810/317629_117491_3056.jpg','http://blogfiles.naver.net/20150120_65/polarbear55_1421720675596V0OQl_JPEG/%B4%EB%B1%B8_%B0%F8%BF%B5%C1%D6%C2%F7%C0%E5_%289%29.JPG','http://blogfiles.naver.net/MjAxODA0MTFfMTc0/MDAxNTIzNDEyMDY1NzQ2.PzNONjrK04se1O11zHnSEk4YNBvArRlZ13kRFqoRn3kg.WKAHJNuVFCJVjmuchF5rSj1J-0ieR6qud6BXd472bxsg.JPEG.nerve2016/%BE%EE%B8%B0%C0%CC_%B4%EB%B0%F8%BF%F8_%C1%D6%C2%F7_%B4%C9%B5%BF_%B0%F8%BF%B5_%C1%D6%C2%F7%C0%E5%C0%CC_%C1%C1%BE%C6%BF%E4_%284%29.JPG','http://imgnews.naver.net/image/5038/2015/12/24/459538_113430_300_99_20151224203208.JPG','http://m.nowonsc.kr/images/group02/resident_gallery_1.jpg','http://blogfiles.naver.net/MjAxNzEyMDRfNzYg/MDAxNTEyMzU4MDQ4MDU0.rZpepCX7Yfhv2_ozckFbyFipRsu9A-nV3GsKpLhD4Dsg.OsD-xg4u9m4j4apEHOhqSZ5eqXjbUhGzmW-m2TbCsk8g.JPEG.lllsarulll/%C0%FC%C1%D6_%B0%B4%B8%AE%B4%DC%B1%E6_%C1%D6%C2%F7%C0%E5%2C_%BF%C0%B0%C5%B8%AE%B0%F8%BF%EB%C1%D6%C2%F7%C0%E5_%280-1%29.JPG'];
    const imgUrl = imgList[Math.floor(Math.random() * imgList.length)];
    

    return (
      <div>
        <img class="parking-img" alt="parking-img" src={imgUrl}/>
      </div>
    );
  }
}

export default ParkingImg;
