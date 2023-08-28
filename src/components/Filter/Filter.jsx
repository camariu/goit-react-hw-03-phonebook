import React from 'react';
import style from './Filter.module.css';

export default function Filter({ onFilterChange }) {
  return (
    <div className={style.filter}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="name"
        onChange={event => onFilterChange(event.target.value)}
      ></input>
    </div>
  );
}
