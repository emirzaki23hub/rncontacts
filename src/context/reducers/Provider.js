import React, {createContext, useReducer} from 'react';
import authInitialState from '../initialState/authInitialState';
import contactsInitialState from '../initialState/contactsInitialState';
import auth from './auth';
import contactsAuth from './contactsAuth';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsAuth,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
