import React from 'react';
import '../App.css';
// imported swiftslider and installed by npm i swift slider
import SwiftSlider from 'react-swift-slider'

// array of data for slider
const data =  [
  {'id':'1','src':'https://image-us.samsung.com/us/smartphones/galaxy-s10/v4/images/galaxy-s10_highlight_kv.jpg'},
  {'id':'2','src':'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iphone-11-pro-review-1568651417.gif'},
  {'id':'3','src':'https://media0.giphy.com/media/Ka2ap1tZeqtoThCpfN/giphy.gif?cid=790b76116e58d4d5cc0c71ff9a99959ce2e9dbc3e4e77b00&rid=giphy.gif'},
  {'id':'4','src':'https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/huawei-mate30-pro-5g/images/tl/camera/mate30-pro-5g-pic-four-camera@2x.jpg'},
  {'id':'5','src':'https://cdn.opstatics.com/store/20170907/assets/images/events/2019/08/hotdog/mclaren/mcl-3.webp'}
];
// content class
class Homepage extends React.Component {

  render() {
    return (
      <div>
      <SwiftSlider data={data} height={620}  />
      </div>
    );
  }
}

export default Homepage;