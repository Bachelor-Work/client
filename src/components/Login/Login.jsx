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

const Login = ({ changeWindow, dialog }) => {
  const handleWindowChange = () => {
    changeWindow(true);
  };

  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState('');

  const loginHandler = async ({ email, password }) => {
    // setButtonListener(true);
    // try {
    //   const data = await login(email, password);
    //   user.setIsAuth(true);
    //   dialog2.hide();
    // } catch (e) {
    //   setResponse(e.response.data.message);
    // }
  };

  const form = useFormState({
    values: { email: '', password: '' },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        //Email
        if (!values.email) {
          errors.email = 'Mandatory info missing';
        }

        //Pasword
        if (!values.password) {
          errors.password = 'Mandatory info missing';
        }

        if (response === 'The email or password is incorrect') {
          errors.email = '*';
          errors.password = '*';
        }

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      loginHandler(values);
    },
  });

  useEffect(() => {
    if (response === 'The email or password is incorrect') {
      form.update('email', form.values.email);
      form.update('password', '');
    }
  }, [response]);

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
                  setResponse('');
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
