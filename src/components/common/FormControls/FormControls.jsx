import React from "react";
import styles from './FormControls.module.css';
import classNames from "classnames";

export const Element = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={classNames(styles.control, {[styles.error]: hasError})}>
      <p>
        <props.element {...input} {...props} />
      </p>
      {hasError && <p>{meta.error}</p>}
    </div>
  )
}
