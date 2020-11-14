import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings173235Navigator from '../features/Settings173235/navigator';
import UserProfile173228Navigator from '../features/UserProfile173228/navigator';
import Settings173227Navigator from '../features/Settings173227/navigator';
import Settings173225Navigator from '../features/Settings173225/navigator';
import SignIn2173223Navigator from '../features/SignIn2173223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings173235: { screen: Settings173235Navigator },
UserProfile173228: { screen: UserProfile173228Navigator },
Settings173227: { screen: Settings173227Navigator },
Settings173225: { screen: Settings173225Navigator },
SignIn2173223: { screen: SignIn2173223Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
