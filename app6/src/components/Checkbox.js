import React from 'react'
import { useState } from "react";
import styles from '../my-style.module.css'

function CheckboxExample () {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.liAnimal}>
      <div>Is Favorite ?</div>
      <div>
        <input style={{marginLeft: "15px", height:"20px"}}
          type="checkbox"
          checked={checked}
          onChange={e => setChecked(e.target.checked)}
        ></input>
      </div>
    </div>
  )
}

export default CheckboxExample