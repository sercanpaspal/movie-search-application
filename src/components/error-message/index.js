import React from 'react'
import styles from './index.module.css'

const ErrorMessage = ({ message }) => (
  <div className={styles.content}>
    <div className={styles.innerContent}>{message}</div>
  </div>
)

export default ErrorMessage
