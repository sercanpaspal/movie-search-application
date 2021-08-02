import React from 'react'
import styles from './index.module.css'

const SearchForm = ({ query, onChangeQuery }) => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        value={query}
        className={styles.input}
        type="text"
        onChange={(e) => onChangeQuery(e.target.value)}
        pattern=".{3,}"
        title="Minimum 3 character required!"
        placeholder="Search for any movie..."
      />
    </form>
  )
}

export default SearchForm
