import React from 'react'
import PropTypes from 'prop-types'
import {List, Button } from 'antd'

const menuStyle = {
   display: 'flex',
   justifyContent:'center',
   flexDirection: 'column',
   alignItems: 'center  ',
 }
 let listStyle = {
   color: "red"
 }
 
 let headerStyle = {
 color: "rgb(65,65,65)"
 }
 
function DisplayMenu(props) {
   
   console.log(props)
   return (
      <div style={menuStyle}>
         <h1 style={headerStyle}>{props.timeOfDay.toUpperCase()}</h1>
         <Button  onClick={()=>{listStyle={color:'blue'}}} >YOLO</Button>
         <div>
            <List
            style={{color:'red'}}
            size='large'
            split={false}
            dataSource={props.dataSource}
            renderItem={item => <List.Item style={listStyle}>{item}</List.Item>}
            />
         </div>
      </div>
   )
}

DisplayMenu.propTypes = {

}

export default DisplayMenu

