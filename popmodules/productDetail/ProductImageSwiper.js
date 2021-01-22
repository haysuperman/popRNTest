import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';

export default class ProductImageSwiper extends Component {
  static defaultProps = {
    images: [],
  };
  render() {
    var images = [];
    for (var image in this.props.images) {
      images.push(
        <Image
          style={style.productImage}
          source={{uri: this.props.images[image].url}}
        />,
      );
    }
    return (
      <View style={style.view}>
        <Swiper style={style.wrapper} showsButtons={false}>
          {images}
        </Swiper>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    borderRadius: 10,
  },
  wrapper: {
    height: Dimensions.get('window').width - 30,
  },
  productImage: {
    borderRadius: 10,
    // width: Dimensions.get('window').width - 30,
    // height: Dimensions.get('window').width - 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB',
  },
});
