import React, { useState } from 'react';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import closeDialog from '../../common/icons/closeDialog.svg';

import styles from './RequestManagerRole.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import { useSelector } from 'react-redux';
import { useTokenInstance } from '../../redux/axiosInstance';
import { useEffect } from 'react';

const RequestManagerRole = ({ dialog }) => {
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState(false);

  const token = useSelector(({ user }) => user.token);
  const request = useTokenInstance(token);

  const form = useFormState({
    values: {
      requestMsg: '',
    },
    onValidate: (values) => {
      let errors = {};
      if (!values.requestMsg && buttonListener) {
        errors = {
          ...errors,
          requestMsg: 'Mandatory info missing',
        };
      }

      if (response) {
        errors = {
          ...errors,
          requestMsg: 'Sorry, but You have already sent a request',
        };
      }

      if (Object.keys(errors).length) {
        setResponse(false);
        throw errors;
      }
    },
    onSubmit: ({ requestMsg }) => {
      request
        .post('/manager/request', requestMsg, {
          headers: { 'Content-Type': 'text/plain' },
        })
        .then((response) => {
          dialog.hide();
        })
        .catch((error) => {
          form.update('requestMsg', '');
          setResponse(true);
        });
    },
  });

  return (
    <div className={styles.dialogContainer}>
      <img
        onClick={() => dialog.hide()}
        className={styles.closeDialog}
        src={closeDialog}
        alt="closeDialog"
      />
      <div className={styles.title}>
        Hey, you are welcome by Mosaic project team 👋
      </div>
      <Form className={styles.form} {...form}>
        {/* EMAIL */}
        <CustomInput
          name="requestMsg"
          placeholder="Describe why we should give you the manager role..."
          value={form.values.requestMsg}
          error={form.errors.requestMsg}
          form={form}
          textarea="textarea"
        />

        <FormSubmitButton
          className={styles.sumbitButton}
          onClick={() => {
            setButtonListener(true);
          }}
          {...form}
        >
          Send request
        </FormSubmitButton>
      </Form>
    </div>
  );
};
export default RequestManagerRole;
