import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import LoginComponents from '../../components/Login';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../../context/reducers/Provider';
import loginUser from '../../context/actions/auth/loginUser';

const Login = () => {
  const [text, onChangeText] = React.useState('');
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
 

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponents
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};
export default Login;
