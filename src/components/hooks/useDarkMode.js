import {useEffect,useState} from 'react'

export default () =>{
   const [theme,setTheme] = useState('light')
useEffect(()=>{
   window.matchMedia('(prefers-color-scheme: dark').matches ? 
setTheme('dark')
: setTheme('light')

},[theme])
return [theme]
}