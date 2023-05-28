import React, { useState, useEffect } from 'react';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import visiblePassword from '../../common/icons/eye.svg';
import closeDialog from '../../common/icons/closeDialog.svg';

import styles from './Login.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/userSlice';

import { postInstance } from '../../redux/axiosInstance';

const Login = ({ changeWindow, dialog }) => {
  const handleWindowChange = () => {
    changeWindow(true);
  };

  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState(false);

  const dispatch = useDispatch();

  const form = useFormState({
    values: {
      email: '',
      password: '',
    },
    onValidate: (values) => {
      let errors = {};
      if (!values.email && buttonListener) {
        errors = {
          ...errors,
          email: 'Mandatory info missing',
        };
      }
      if (!values.password && buttonListener) {
        errors = {
          ...errors,
          password: 'Mandatory info missing',
        };
      }
      if (Object.keys(errors).length) {
        throw errors;
      }
    },
    onSubmit: ({ email, password }) => {
      postInstance
        .post('auth/login', {
          email,
          password,
        })
        .then((response) => {
          // Handle the response
          dispatch(loginSuccess(response.data));
          dialog.hide();
        })
        .catch((error) => {
          if (error) {
            form.reset();
            setResponse(true);
          }
        });
    },
  });

  return (
    <>
      <div>
        <img
          onClick={() => dialog.hide()}
          className={styles.closeDialog}
          src={closeDialog}
          alt="closeDialog"
        />
        <div className={styles.dialogContainer}>
          <div className={styles.topSectionWrapper}>
            <div className={styles.title}>Login</div>
            <Form className={styles.form} {...form}>
              {/* EMAIL */}
              <CustomInput
                name="email"
                placeholder="Email"
                value={form.values.email}
                error={form.errors.email}
                form={form}
              />

              {/* PASSWORD */}
              <div className={styles.inputBox}>
                <CustomInput
                  name="password"
                  placeholder="Password"
                  value={form.values.password}
                  error={form.errors.password}
                  form={form}
                  type={passVisibility}
                />
                <img
                  className={styles.password}
                  src={visiblePassword}
                  alt="password"
                  onMouseDown={(e) => setPassVisibility('none')}
                  onMouseUp={(e) => setPassVisibility('password')}
                />
              </div>

              {!response ? (
                <></>
              ) : (
                <span className={styles.passwordHint}>
                  The email or password is incorrect
                </span>
              )}

              <FormSubmitButton
                className={styles.sumbitButton}
                onClick={() => {
                  setResponse(false);
                  setButtonListener(true);
                }}
                {...form}
              >
                Login
              </FormSubmitButton>
            </Form>
          </div>
          <div className={styles.bottomDialog}>
            <div className={styles.bottomText}>
              I have no account,{' '}
              <span className={styles.logInButton} onClick={handleWindowChange}>
                Register now
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
