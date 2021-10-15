import React from 'react';
import {View, Keyboard} from 'react-native';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {fields, loginInitialValues} from './fields';

const Login = () => {
  return (
    <View>
      <Typography
        variant="h1"
        style={{textAlign: 'center', marginVertical: 20}}>
        Login
      </Typography>
      <Form
        fields={fields}
        initialValues={loginInitialValues}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
        }}
        btnProps={{
          title: 'Login',
        }}
      />
      <Typography style={{textAlign: 'center', marginVertical: 10}}>
        Don't Have Acount? Please{` `}
        <Typography
          onPress={() => {}}
          style={{
            color: 'red',
            textDecorationLine: 'underline',
          }}>
          Signup
        </Typography>
      </Typography>
    </View>
  );
};

export default Login;
