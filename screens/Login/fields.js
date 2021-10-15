import {createRef} from 'react';

import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

const passwordInputRef = createRef();

export const fields = [
  {
    placeholder: 'Username',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordInputRef.current.focus();
    },
    name: 'username',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return '';
    },
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'done',

    innerRef: passwordInputRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    title: 'Remember Me?',
    containerStyle: {alignSelf: 'flex-end', margin: 10},
    component: Checkbox,
    name: 'rememberMe',
  },
];

export const loginInitialValues = {
  username: '',
  password: '',
  rememberMe: false,
};
