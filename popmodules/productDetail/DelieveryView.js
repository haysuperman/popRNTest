import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const arrowDownImage = 'http://192.168.60.62:5310/image/arrow_down.png';
const arrowUpImage = 'http://192.168.60.62:5310/image/arrow_up.png';

export default class DelieveryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: true,
    };
  }

  render() {
    return (
      <View style={this.state.isClose ? style.close : style.open}>
        <View style={style.headerView}>
          <View style={style.contentView}>
            <Text>
              Delievery to Echo -{' '}
              <Text
                style={{
                  fontWeight: '600',
                }}>
                M2J 4A6 North York
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            style={style.btnView}
            onPress={() => {
              this.setState({
                isClose: !this.state.isClose,
              });
            }}>
            <Image
              style={style.btnImage}
              source={{uri: this.state.isClose ? arrowDownImage : arrowUpImage}}
            />
          </TouchableOpacity>
        </View>
        {this.state.isClose ? <View /> : this.pickView()}
      </View>
    );
  }

  pickView() {
    return (
      <View style={style.pickupViewStyle}>
        <PickItem />
        <PickItem />
        <PickItem />
        <View style={pickItemStyle.business}>
          <Text>3-4 business days</Text>
        </View>
      </View>
    );
  }
}

function PickItem() {
  return (
    <View style={pickItemStyle.item}>
      <View style={pickItemStyle.icon} />
      <Text style={pickItemStyle.text}>Free Shipping</Text>
    </View>
  );
}

const pickItemStyle = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  icon: {
    marginRight: 20,
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  business: {
    marginTop: 5,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 28,
    backgroundColor: '#F5F5F5',
  },
});
const style = StyleSheet.create({
  close: {
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    height: 60,
  },
  open: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 60,
  },
  contentView: {
    // padding: 20,
    paddingTop: 15,
    flex: 7,
  },
  btnView: {
    paddingTop: 18,
    height: 60,
    flex: 1,
  },
  btnImage: {
    marginRight: 10,
    width: 15,
    height: 8,
  },
  pickupViewStyle: {
    marginBottom: 15,
    paddingLeft: 20,
    flex: 1,
  },
});
