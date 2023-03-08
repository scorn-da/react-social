import React from 'react';
import styles from 'src/components/common/Pagination/Pagination.module.css';
import classNames from "classnames";

const Pagination = ({ totalUsers, pageSize, currentPage, onPageChanged }) => {
  const numberOfPages = Math.ceil(totalUsers / pageSize);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <ul>
      {pages.map(page => {
        return (
          <button key={page} className={classNames(styles.button, currentPage === page ? styles.selected : undefined)}
                  onClick={() => {
                    onPageChanged(page);
                  }}>{page}</button>
        )
      })}
    </ul>
  );
};

export default Pagination;
