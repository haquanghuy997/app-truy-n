import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TruyenNgan from './TruyenNgan';
import TruyenCuoi from './TruyenCuoi';
import DangNhap from './DangNhap';
const AppNavigatorTab = createBottomTabNavigator({
  TruyenCuoi: {
    screen: TruyenCuoi,
    navigationOptions: {
      title: 'Truyện cười'
    }
  },
  TruyenNgan: {
    screen: TruyenNgan,
    navigationOptions: {
      title: 'Truyện ngắn'
    }
  },
  DangNhap: {
    screen: DangNhap,
    navigationOptions: {
      title: 'Dang nhap'
    }
  },

},
{
  initialRouteName: 'TruyenCuoi',
  
  tabBarOptions: {
    activeTintColor: '#F9F3FF',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: '#180330',
    },
  }
}
);

export default createAppContainer(AppNavigatorTab);