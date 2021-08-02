import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <h1 className={styles.title}>Movie Search Application</h1>
      </Link>
      <div>{children}</div>
    </div>
  )
}

export default Layout
