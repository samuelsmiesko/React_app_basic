import React from 'react';
import styles from '../my-style.module.css';


function AddList ({handleMouseLeave}) {
  
  

  return (
    <div onClick={handleMouseLeave} className={styles.Addlist} >
      <p >+</p>
    </div>
  )
}

export default AddList;