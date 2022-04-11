import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNav = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
    const {authState: {isLoggedIn}} = useContext(GlobalContext);

 
    const getUser= async () => {
        try {
       const user = await AsyncStorage.getItem("user");
          if (user){
            setIsAuthenticated(true)
          } else {
            setIsAuthenticated(false)
          }
        } catch {

        }
      }
      useEffect(() => {
        getUser()
    }, [])

  return (
    <NavigationContainer>
      {isLoggedIn ?  <DrawerNavigator/> : <AuthNavigator/>  }
    </NavigationContainer>
  );
};

export default AppNav;
