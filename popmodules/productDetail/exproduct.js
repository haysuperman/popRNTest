import React, {Component} from 'react';

import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import DelieveryView from './DelieveryView';
import ProductCouponView from './ProductCouponView';
import ProductImageSwiper from './ProductImageSwiper';

export default class EXProduct extends Component {
  static defaultProps = {
    sin: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      isLoading: true,
    };
  }
  fetchData() {
    fetch(
      'https://popdev.aosom.com/product/item/' +
        this.props.sin +
        '?_lang=en&_siteId=212&_version=v1',
      {method: 'get'},
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({
          productData: result.data,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    } else if (!this.state.productData) {
      return <Text>error</Text>;
    } else {
      return (
        <ScrollView style={style.scrollView}>
          <View style={style.allView}>
            <Text style={style.sin}>/ SIN:{this.state.productData.sin}</Text>
            <ProductImageSwiper
              images={this.state.productData.productImages}
              // style={style.productImage}
            />
            <View>
              <Text style={style.productName}>
                {this.state.productData.skuName}
              </Text>
            </View>
            <View>
              <Text style={style.brandName}>
                <Text style={style.brandNameLeft}>More From - </Text>
                {this.state.productData.brandName}
              </Text>
            </View>
            <View style={style.v1view}>
              <Image
                style={style.iconV1}
                source={{
                  uri: 'http://192.168.60.62:5310/image/IconAosomIdeasVI.png',
                }}
              />
              <Text style={style.v1text}>{13} Reviews</Text>
            </View>
            <Text style={style.pricetext}>${this.state.productData.price}</Text>
            <DelieveryView />
            <ProductCouponView
              goodsCouponList={this.state.productData.goodsCouponList}
            />
            <HTMLView
              style={style.html}
              value={this.state.productData.shortDesc}
            />
          </View>
        </ScrollView>
      );
    }
  }
}

const style = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  allView: {
    padding: 15,
  },
  sin: {
    color: 'black',
    fontSize: 14,
    paddingVertical: 5,
    paddingBottom: 10,
  },
  ppp: {
    width: 43,
    height: 20,
    left: 15,
    top: 10,
  },
  productName: {
    paddingVertical: 10,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 25,
    color: 'black',
  },
  productImage: {
    borderRadius: 10,
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').width - 30,
  },
  brandNameLeft: {
    // color: 'black',
    fontWeight: '400',
    // fontSize: 17,
    // height: 23,
  },
  brandName: {
    color: 'black',
    fontWeight: '600',
    fontSize: 17,
    height: 23,
  },
  v1view: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  iconV1: {
    width: 81,
    height: 20,
  },
  v1text: {
    paddingLeft: 10,
    fontSize: 13,
    color: 'black',
    textDecorationLine: 'underline',
  },
  pricetext: {
    paddingVertical: 10,
    fontSize: 26,
    lineHeight: 24,
    fontWeight: '600',
  },
  html: {},
});
