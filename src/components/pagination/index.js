import React from 'react'
import styles from './index.module.css'

const Pagination = ({ totalPage, currentPage, onChangePage }) => {
  return (
    <ul className={styles.list}>
      <li>
        <button disabled={currentPage === 1} onClick={() => onChangePage(1)}>
          first
        </button>
      </li>
      <li>
        <button
          disabled={currentPage <= 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          previous
        </button>
      </li>
      <li>{currentPage}</li>
      <li>
        <button
          disabled={currentPage >= totalPage}
          onClick={() => onChangePage(currentPage + 1)}
        >
          next
        </button>
      </li>
      <li>
        <button
          disabled={totalPage === currentPage}
          onClick={() => onChangePage(totalPage)}
        >
          last
        </button>
      </li>
    </ul>
  )
}

export default Pagination
