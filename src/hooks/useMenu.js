import {useEffect,useState} from 'react'
import firebase from '../firebase/firebase'

export default ()=>{
   const [menu,setMenu] = useState([])
   const [errorMessage,setErrorMessage] = useState('')
   const [loading,setLoading] = useState(true)
   const db = firebase.database()
   const getMenu = async mealTime =>{
      try{
         const query  =  db.ref('/cities/'+ mealTime)
           query.once('value', snap => {
            setLoading(false)
            setMenu(['del01','del02'])
            console.log(snap.val());
         })
         
      }
      catch(e){
         setErrorMessage('Something Went Wrong :(')
      }
   }
   useEffect(()=>{
      getMenu('breakfast');
   },[])
   return [getMenu,menu,errorMessage,loading]
}