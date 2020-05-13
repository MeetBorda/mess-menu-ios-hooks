import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from '../src/firebase/firebase'
import { LoadingOutlined } from '@ant-design/icons'
import DisplayMenu from '../src/components/DisplayMenu'
import Feedback from '../src/components/Feedback'

function App() {
  const [mealTime, setMealTime] = useState('');
  const [menu, setMenu] = useState([])
  const [loading,setLoading] = useState(true)
  const db = firebase.database()
  // const themer = ()=>{
  //   window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
  //     if (e.matches) {
  //       setTheme('dark')
  //       console.log('dark mode is enabled');
  //     } else {
  //       setTheme('light')
  //       console.log('dark mode is disabled')
  //     }
  //   });
  // }

  

  const fetchData = async term => {
    const meal1 = meal()
    //console.log(meal1);
    
    try {
      const snapshot = await db.ref('/cities/'+meal1).once('value');
      const value = snapshot.val().trains
      console.log('snapshot', snapshot.val().trains);
      console.log(value);
      setMenu(value)
      setLoading(false)
    }
    catch (e) {
      console.log('error');
    }
  }
  useEffect(() => {
    fetchData()
  }, [mealTime])

  const meal = () => {
    let time = new Date(2020,1,1,18).getHours()
    if (time >= 10 && time <= 17){
      setMealTime('mumbai')
      return 'mumbai'
    }
    if (time > 17 && time <= 23){
      setMealTime('delhi')
      return 'delhi'
    }
    if (time >= 0 && time < 10){
      setMealTime('indore')
      return 'indore'
    }
    
  }
  
  const renderContent = () =>{
  return <>
    <DisplayMenu dataSource={menu} timeOfDay={mealTime} />
    <Feedback />
  </>
  }

  if(loading){
    console.log(window.matchMedia('(prefers-color-scheme: dark'))

    return(
      <div className={'loading'} style={{display:'flex',justifyContent:'center',flexDirection: 'column',alignItems: 'center  '}}>
          <h1 className={'loading'}>Sabra ka fal meetha hota hai</h1>
          <LoadingOutlined className={'loading'} style={{position:'fixed',top:'50%',left:'50%'}} />
        </div>
    )
  }
  else{
    return renderContent()
  }
  
}

export default App;
