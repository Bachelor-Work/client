import Map from '../../components/Map/Map';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import visiblePassword from '../../common/icons/eye.svg';
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormSubmitButton as FormSubmitButton,
} from 'reakit/Form';

import './Contacts.scss';

const Contacts = () => {
  const [passVisibility, setPassVisibility] = useState('password');
  const [buttonListener, setButtonListener] = useState(false);
  const [response, setResponse] = useState('');

  const form = useFormState({
    values: { first: '', last: '', email: '', message: '' },
    onValidate: (values) => {
      const errors = {};
      if (buttonListener) {
        if (!values.first) {
          errors.first = 'Mandatory info missing';
        }

        if (!values.last) {
          errors.last = 'Mandatory info missing';
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
          errors.email = 'Email should have correct format';
        }
        if (!values.email) {
          errors.email = 'Mandatory info missing';
        }

        if (!values.message) {
          errors.message = 'Mandatory info missing';
        }

        setResponse('');

        if (Object.keys(errors).length) {
          throw errors;
        }
      }

      setButtonListener(false);
    },

    onSubmit: (values) => {
      // registerHandler(values);
    },
  });

  return (
    <div className="contactsWrapper">
      <div className="contactForm">
        <div className="contactFormWrapper">
          <div className="contactTitle">Contact us</div>
          <div className="contactSubTitle">
            As a friendly dev, I would love to hear from you!
          </div>

          <Form className="form" {...form}>
            <div className="fullnameWrapper">
              <div className="fullnamePartWrapper">
                <CustomInput
                  name="first"
                  placeholder="First name"
                  value={form.values.first}
                  error={form.errors.first}
                  form={form}
                />
              </div>
              <div className="fullnamePartWrapper">
                <CustomInput
                  name="last"
                  placeholder="Last name"
                  value={form.values.last}
                  error={form.errors.last}
                  form={form}
                />
              </div>
            </div>

            <CustomInput
              name="email"
              placeholder="Email"
              value={form.values.email}
              error={form.errors.email}
              form={form}
            />

            <CustomInput
              name="message"
              placeholder="Message"
              value={form.values.message}
              error={form.errors.message}
              form={form}
              textarea="textarea"
            />

            <FormSubmitButton
              className="sendMessageButton"
              onClick={() => {
                setButtonListener(true);
              }}
              {...form}
            >
              Send Message
            </FormSubmitButton>
          </Form>
        </div>
      </div>
      <div className="mapWrapper">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
