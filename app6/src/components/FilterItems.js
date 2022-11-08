import React from 'react'
import '../inputarrow.css'
import styles from '../my-style.module.css'
import {useState} from 'react';
import AnimalInfo from '../pages/Datas'

const Checking = () => {
    const [data, setData] = useState(AnimalInfo);
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === 'A3') {
        return {...obj, isFiltered: true};
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setData(newState);
};

const FilterItem = () => {
  
  const [count1, setCount] = useState(10);
  const [count2, setCount2] = useState(10);
  const [count3, setCount3] = useState(1.0);
  const [count4, setCount4] = useState(1.0);

  //max weight
  const Increment = () => {

    let maxvalue = 1000
    if(count1 >= maxvalue){
      maxvalue = 950
    }
    else{
      maxvalue = count1
    }
    setCount(maxvalue +50)
  }

  const Decrement = () => {
    let minvalue = 50
    if(count1 <= minvalue){
      minvalue = 50
    }
    else{
      minvalue = count1
    }
    setCount(minvalue -50)
  }

  //min weight

  const Increment2 = () => {

    let maxvalue = 1000
    if(count2 >= maxvalue){
      maxvalue = 950
    }else if(count1 <= count2){
      maxvalue = count1 -50
    }
    else{
      maxvalue = count2
    }
    setCount2(maxvalue +50)
  }

  const Decrement2 = () => {
    let minvalue = 50
    if(count2 <= minvalue){
      minvalue = 50
    }
    else{
      minvalue = count2
    }
    setCount2(minvalue -50)
  }

  //max weight
  const Increment3 = () => {

    let maxvalue = 3.0
    if(count3 >= maxvalue){
      maxvalue = 3.0
    }
    else{
      maxvalue = count3
    }
    setCount3(Math.round((maxvalue +0.1)*10)/10)
  }

  const Decrement3 = () => {
    let minvalue = 1.0
    if(count3 <= minvalue){
      minvalue = 1.0
    }
    else{
      minvalue = count3
    }
    setCount3(Math.round((minvalue -0.1)*10)/10)
  }

  //min height
  const Increment4 = () => {

    let maxvalue = 3.0
    if(count4 >= maxvalue){
      maxvalue = 3.0
    }else if(count3 <= count4){
      maxvalue = count3 -0.1
    }
    else{
      maxvalue = count4
    }
    setCount4(Math.round((maxvalue +0.1)*10)/10)
  }

  const Decrement4 = () => {
    let minvalue = 1.0
    if(count4 <= minvalue){
      minvalue = 1.0
    }
    else{
      minvalue = count4
    }
    setCount4(Math.round((minvalue -0.1)*10)/10)
  }

  return (
    <ul>  
      
      <li className={styles.Filter}>
          <div>
            <span><label for="weight filter">Enter max. weight (kg)</label></span>
            <span><input id="weight1" value={count1} className={styles.InputNum} type="number"  name="maxweight" ></input></span>
            <span><button className={styles.IncreasButton} onClick={() => Increment()}>+</button></span>
            <span><button className={styles.DecreaseButton} onClick={() => Decrement()}>-</button></span>
          </div>
          <div >
            <span><label  for="height filter max">Enter min. weight (kg)</label></span>
            <span><input  value={count2} className={styles.InputNum} type="number" id="height1" name="maxheight"  min="1.8" max="1000"></input></span>
            <span><button className={styles.IncreasButton} onClick={() => Increment2()}>+</button></span>
            <span><button className={styles.DecreaseButton} onClick={() => Decrement2()}>-</button></span>
          </div>
          <div>
            <span><label for="weight filter min">Enter max. height (m)</label></span>
            <span><input value={count3} className={styles.InputNum} type="number" id="weight2" name="minweight"  min="10" max="1000"></input></span>
            <span><button className={styles.IncreasButton} onClick={() => Increment3()}>+</button></span>
            <span><button className={styles.DecreaseButton} onClick={() => Decrement3()}>-</button></span>
          </div>
          <div>
            <span><label  for="height filter min">Enter min. height (m)</label></span>
            <span><input  value={count4} className={styles.InputNum} type="number" id="height1" name="minheight"  min="1.1" max="1000"></input></span>
            <span><button className={styles.IncreasButton} onClick={() => Increment4()}>+</button></span>
            <span><button className={styles.DecreaseButton} onClick={() => Decrement4()}>-</button></span>
          </div>
          <div>
            <span><label  for="height filter min">Enter name </label></span>
            <span><input  className={styles.InputName} type="text" id="filterword" name="nameofaniml" min="10" max="1000"></input></span>
          </div>
          <div>
            <div onClick={Checking} className={styles.button}>Filter</div>
          </div>
        
      </li>
    </ul>
  )
}

export default FilterItem