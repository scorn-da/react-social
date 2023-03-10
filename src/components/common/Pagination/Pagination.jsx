import React, { useState } from 'react';
import styles from 'src/components/common/Pagination/Pagination.module.css';
import cn from "classnames";

const Pagination = ({ totalItems, pageSize, currentPage, onPageChanged, partSize = 15 }) => {
  const numberOfPages = Math.ceil(totalItems / pageSize);
  const pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  const itemsPart = Math.ceil(numberOfPages / partSize);
  const [partsNumber, setPartsNumber] = useState(1);
  const leftButtonValue = (partsNumber - 1) * partSize + 1;
  const rightButtonValue = partsNumber * partSize;

  return (
    <ul>
      {partsNumber > 1 &&
        <li key="-1">
          <button onClick={() => {
            setPartsNumber(partsNumber - 1)
          }} className={styles.button}>Prev</button>
        </li>
      }
      {pages.filter(page => page >= leftButtonValue && page <= rightButtonValue).map(page => {
        return (
          <li key={page}>
            <button className={cn(styles.button, {[styles.selected]: currentPage === page} )}
                    onClick={() => {
                      onPageChanged(page);
                    }}>{page}</button>
          </li>
        )
      })}
      {itemsPart > partsNumber &&
      <li key="-2">
        <button onClick={() => {
          setPartsNumber(partsNumber + 1)
        }} className={styles.button}>Next</button>
      </li>}
    </ul>
  );
};

export default Pagination;
