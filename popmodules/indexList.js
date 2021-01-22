import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

class ListItems extends Component {
  render() {
    return (
      <View style={itemStyle.item}>
        <Button
          title={this.props.title}
          onPress={() => {
            this.props.onPress();
          }}
        />
      </View>
    );
  }
}

function IndexList({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 18}}>测试用</Text>
      </View>
      <ScrollView>
        <ListItems
          title="搜索推荐商品列表"
          onPress={() => {
            navigation.navigate('EXProductList');
          }}
        />
        <ListItems
          title="单个商品详情"
          onPress={() => {
            navigation.navigate('EXProduct', {
              sin: '0UEOM5B9HB801',
            });
          }}
        />
      </ScrollView>
    </View>
  );
}

const itemStyle = StyleSheet.create({
  item: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 5,
    marginLeft: 10,
    height: 44,
    borderBottomWidth: 1,
  },
});

export default IndexList;

const style = StyleSheet.create({
  header: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});
