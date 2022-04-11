import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={CONTACT_LIST}>
      <Stack.Screen name={CONTACT_LIST} component={Contacts} />
      <Stack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
