import React, { useState } from 'react';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import { postInstance } from '../../redux/axiosInstance';

import visiblePassword from '../../common/icons/eye.svg';
import closeDialog from '../../common/icons/closeDialog.svg';

import styles from './Register.module.scss';
import CustomInput from '../CustomInput/CustomInput';

const Register = ({ changeWindow, dialog }) => {
  const handleWindowChange = () => {
    changeWindow(false);
  };

  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);

  const [response, setResponse] = useState('');

  const form = useFormState({
    values: {
      fullname: '',
      email: '',
      password: '',
    },
    onValidate: (values) => {
      let errors = {};
      if (!values.fullname && buttonListener) {
        errors = {
          ...errors,
          username: 'Mandatory info missing',
        };
      }
      if (!values.email && buttonListener && !response) {
        errors = {
          ...errors,
          email: 'Mandatory info missing',
        };
      }
      if (response) {
        errors = {
          ...errors,
          email: 'The email address is already in use!',
        };
      }
      if (
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email) &&
        buttonListener &&
        !response
      ) {
        errors = {
          ...errors,
          email: 'Email should have correct format',
        };
      }
      if (!values.password && buttonListener) {
        errors = {
          ...errors,
          password: 'Mandatory info missing',
        };
      }
      if (Object.keys(errors).length) {
        setResponse('');
        throw errors;
      }
    },
    onSubmit: ({ username, email, password }) => {
      postInstance
        .post('auth/register', {
          username,
          email,
          password,
        })
        .then((response) => {
          dialog.hide();
        })
        .catch((error) => {
          form.update('email', '');
          setResponse(error.response.data);
        });
    },
  });

  // if (
  //   values.fullname &&
  //   !/([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/gi.test(values.fullname)
  // ) {
  //   errors.fullname = 'Example: Tony Stark';
  // }

  // if (values.password && values.password.length < 8) {
  //   errors.password = 'The password has to be at least 8';
  // }

  return (
    <div>
      <img
        onClick={() => dialog.hide()}
        className={styles.closeDialog}
        src={closeDialog}
        alt="closeDialog"
      />
      <div className={styles.dialogContainer}>
        <div className={styles.topSectionWrapper}>
          <div className={styles.title}>Register</div>
          <Form className={styles.form} {...form}>
            {/* FULL NAME */}
            <CustomInput
              name="fullname"
              placeholder="Full name"
              value={form.values.fullname}
              error={form.errors.fullname}
              form={form}
            />

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

              {form.errors.password ? (
                <></>
              ) : (
                <span className={styles.passwordHint}>
                  The password has to be at least 8 symbols
                </span>
              )}
            </div>

            <FormSubmitButton
              className={styles.sumbitButton}
              onClick={() => {
                setButtonListener(true);
              }}
              {...form}
            >
              Register
            </FormSubmitButton>
          </Form>
        </div>
        <div className={styles.bottomDialog}>
          <div className={styles.bottomText}>
            I already have an account,{' '}
            <span className={styles.logInButton} onClick={handleWindowChange}>
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
