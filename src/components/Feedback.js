import React, { Component } from 'react';
import { StarFilled } from '@ant-design/icons';
import { Rate, Popover } from 'antd'
import 'antd/dist/antd.css';
import './Feedback.css'
import firebase from '../firebase/firebase'
export default class Feedback extends Component {
  state = { visible: false, valueStored: null }
  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  handleChange=(e)=>{
    console.log('val',e)
    firebase.database().ref('/feedback/').push({rating:e},
       function(error) {
      if (error) {
        console.log(error)
      } else {
        console.log(e)
      }
    });
  }
  
  render() {
    return (
      <div>
        <Popover
          arrowPointAtCenter
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          content={
            this.state.valueStored != null ? 
            <Rate className={'rate'} defaultValue={this.state.valueStored} disabled />:
            <Rate className={'rate'} defaultValue={3}
              onChange={this.handleChange }
                 />
          }>
          <StarFilled className='star' />
        </Popover>
      </div>
    )
  }
}
