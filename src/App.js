import React, { useState, useEffect } from 'react';
import './App.css';
import useMenu from '../src/hooks/useMenu'
import firebase from '../src/firebase/firebase'
function App() {
  const [mealTime, setMealTime] = useState('');
  const [menu, setMenu] = useState([])
  const db = firebase.database()

  const fetchData = async term => {
    meal()
    console.log(mealTime);
    try {
      const snapshot = await db.ref('/cities/mumbai').once('value');
      const value = snapshot.val().trains
      console.log('snapshot', snapshot.val().trains);
      console.log(value);
      setMenu(value)
    }
    catch (e) {
      console.log('error');
    }
  }
  useEffect(() => {
    fetchData()
    console.log('from effect', menu);
  }, [mealTime])

  const meal = () => {
    let mealTime = new Date().getHours()
    if (mealTime >= 10 && mealTime <= 17)
      setMealTime('mumbai')
    if (mealTime > 17 && mealTime <= 23)
      setMealTime('delhi')
    if (mealTime >= 0 && mealTime < 10)
      setMealTime('indore')
    return mealTime
  }

  return (
    <div className="App">
      <p>YOLO</p>
      <p>{mealTime}</p>
      <ul>
        {menu.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
