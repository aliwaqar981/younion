import {HeaderBackIcon} from '../Components/HeaderBackIcon';
const {AppStyles, Colors} = require('.');

const Header = {
  screenOptions: {
    headerTitleAlign: 'left',
    headerStyle: AppStyles.headerStyle,
    headerTitleStyle: AppStyles.headerTitleStyle,
    headerTintColor: Colors.appTextColor6,
    headerBackImage: () => <HeaderBackIcon />,
  },
};

export default Header;
