import React from 'react'
import { List } from 'antd'
import './DisplayMenu.css'

function DisplayMenu(props) {
   
   console.log(props)
   return (
      <div className='menuStyle'>
         <h1 className={"headerStyle"}>{props.timeOfDay.toUpperCase()}</h1>
         <div>
            <List
            style={{color:'red'}}
            size='large'
            split={false}
            dataSource={props.dataSource}
            renderItem={item => <List.Item className={'listStyle'}>{item}</List.Item>}
            />
         </div>
      </div>
   )
}


export default DisplayMenu

