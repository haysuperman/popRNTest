import React, {Component} from 'react';
import {View, Text, ListViewComponent} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

export default class ProductCouponView extends Component {
  //goodsCouponList
  // this.props.goodsCouponList
  render() {
    if (!this.props.goodsCouponList) {
      return <View />;
    } else {
      return <View></View>;
    }
  }
  itemRender({item}) {
    return (
      <View>
        <Text>{item.name}</Text>,
      </View>
    );
  }
}

// function header(props) {
//   return (
//     <View>
//       <Text>我是无状态组件</Text>
//     </View>
//   );
// }
