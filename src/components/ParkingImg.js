import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {PageHeader, Typography, Menu, Icon} from "antd";
import './ParkingImg.scss'

@observer
class ParkingImg extends Component {
  render() {
    const imgList = ['https://t1.daumcdn.net/cfile/tistory/2322044857EFBB1713','http://img.asiatoday.co.kr/file/2019y/06m/30d/2019063001003093900180291.jpg',
  'http://www.ulsanpress.net/news/photo/201810/317629_117491_3056.jpg','http://imgnews.naver.net/image/5038/2015/12/24/459538_113430_300_99_20151224203208.JPG','http://m.nowonsc.kr/images/group02/resident_gallery_1.jpg',
'http://www.sijung.co.kr/news/photo/201903/227899_62958_94.jpg','http://www.yangsanilbo.com/news/photo/201702/61394_26794_5319.jpg','http://www.brnews.co.kr/news/photo/201808/918_1531_5436.jpg','http://www.nyjnews.net/imgdata/nyjnews_net/201909/2019090648293600.jpg'];
    const imgUrl = imgList[Math.floor(Math.random() * imgList.length)];


    return (
      <div>
        <img class="parking-img" alt="parking-img" src={imgUrl}/>
      </div>
    );
  }
}

export default ParkingImg;
