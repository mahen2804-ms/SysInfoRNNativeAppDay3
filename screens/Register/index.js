import React from 'react';
import {View, Keyboard} from 'react-native';
import Form from '../../components/Form';
import Typography from '../../components/Typography';
import {registerFields, registerInitialValues} from './fields';

const Register = () => {
  return (
    <View>
      <Typography
        variant="h1"
        style={{textAlign: 'center', marginVertical: 20}}>
        Register
      </Typography>
      <Form
        fields={registerFields}
        initialValues={registerInitialValues}
        btnProps={{
          title: 'Register',
        }}
        onSubmit={value => {
          console.warn(value);
          Keyboard.dismiss();
        }}
      />
    </View>
  );
};

export default Register;
