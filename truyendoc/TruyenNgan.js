import React from 'react';
import { FlatList, ActivityIndicator,TouchableHighlight, Text, View, Image } from 'react-native';

import ChiTiet from './ChiTiet';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
class TruyenNgan extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  static navigationOptions = {
    title: 'TRUYEN NGAN',
  };

  componentDidMount() {
    return fetch('http://10.0.3.3/react-native-truyen/select_truyenngan.php')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <TouchableHighlight onPress={()=>this.props.navigation.navigate("ChiTiet",{id:item.id})}>
              <View style={{ flexDirection: 'row',border:5,margin:5}}>
                <Image source={{ uri: item.anh }} style={{ width: 90, height: 90 }} />
                <View style={{flexDirection:"column",marginLeft:10,height:100,width:200}}>
                <Text >{item.tieude}</Text>
                <Text >{item.theloai}</Text>
                <Text >{item.thoigian}</Text>
                </View>

              </View>
            </TouchableHighlight>
          }
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
const AppTruyenNgan =createStackNavigator({
  TruyenNgan:{
    screen:TruyenNgan
  },
  ChiTiet:{
    screen:ChiTiet
  }
})

export default createAppContainer(AppTruyenNgan);
