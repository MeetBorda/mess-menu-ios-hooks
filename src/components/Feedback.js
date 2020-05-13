import React ,{ Component } from 'react';
import { Modal } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './Feedback.css'
export default class Feedback extends Component{
   state = {visible:false}
   showModal = () => {
      this.setState({
        visible: true,
      });
    };
   
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false
      });
      // ENTER LOGIC FOR FEEDBACK AND COMPONENTs

    };
   
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
   render(){

      return (<div >
    <a  onClick={this.showModal} style={{position:'fixed',bottom:'50px',right:'10px'}}><MessageOutlined className={'feedBackStyle'} /></a>
    <Modal
          bodyStyle={{color:'rgb(65,65,65)'}}
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      )
   }

}

  // const feedBackStyle = {
  //     fontSize: '32px',
  //     color: 'black'
  // }
