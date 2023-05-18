import React from 'react';
import styles from './CustomInput.module.scss';
import classNames from 'classnames';

import {
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
} from 'reakit/Form';
const CustomInput = ({
  name,
  error,
  value,
  placeholder,
  form,
  type,
  textarea,
}) => {
  return (
    <div className={styles.inputBox}>
      {textarea === 'textarea' ? (
        <FormInput
          className={error ? styles.formTextareaError : styles.formTextarea}
          {...form}
          name={name}
          type={type}
          as={textarea}
        />
      ) : (
        <FormInput
          className={error ? styles.formInputError : styles.formInput}
          {...form}
          name={name}
          type={type}
        />
      )}

      <span
        className={classNames(styles.formSpanEmpty, {
          [styles.formSpanEmptyError]: value === '' && error,
          [styles.formSpanFilledError]: value !== '' && error,
          [styles.formSpanFilled]: value !== '',
        })}
      >
        {placeholder}
      </span>
      <FormMessage className={styles.formMessage} {...form} name={name} />
    </div>
  );
};

export default CustomInput;
