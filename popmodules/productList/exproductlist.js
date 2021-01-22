import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default class EXProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(
      'https://popdev.aosom.nl/rest/v1/suggest/terms?1611124176229&kw=1&_lang=nl&_siteId=212&_version=test',
      {method: 'get'},
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({productList: result.data.product});
      })
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    } else if (!this.state.productList || this.state.productList.length <= 0) {
      return <Text>error</Text>;
    }
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={this.state.productList}
          renderItem={(item) => {
            return this.ProductItemRender(item);
          }}
          keyExtractor={(item) => item.sin}
        />
      </View>
    );
  }

  ProductItemRender({item}) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.push('EXProduct', {
            sin: item.sin,
          });
        }}>
        <View style={style.item}>
          <Image style={style.image} source={{uri: item.image}} />
          <View style={style.info}>
            <Text numberOfLines={1} style={style.text}>
              {item.title}
            </Text>
            <Text style={style.price}>{item.price / 100}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  info: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  text: {
    paddingVertical: 5,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  price: {
    paddingVertical: 5,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
