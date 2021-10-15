import {createRef} from 'react';

import Input from '../../components/Input';

const emailRef = createRef();
const passwordRef = createRef();
const confirmPasswordRef = createRef();

export const registerFields = [
  {
    placeholder: 'Name',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      emailRef.current.focus();
    },
    name: 'name',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    placeholder: 'Mobile Number',
    returnKeyType: 'next',
    keyboardType: 'phone-pad',
    onSubmitEditing: () => {
      emailRef.current.focus();
    },
    name: 'mobileNumber',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: emailRef,
    placeholder: 'Email',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    onSubmitEditing: () => {
      passwordRef.current.focus();
    },
    name: 'email',
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
    innerRef: passwordRef,
    name: 'password',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
    onSubmitEditing: () => {
      confirmPasswordRef.current.focus();
    },
  },
  {
    innerRef: confirmPasswordRef,
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    returnKeyType: 'done',
    name: 'confirmPassword',
    component: Input,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
];

export const registerInitialValues = {
  name: '',
  mobileNumber: '',
  email: '',
  password: '',
  confirmPassword: '',
};
