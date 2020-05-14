import React, { Component } from 'react';
import { StarFilled } from '@ant-design/icons';
import { Rate, Popover } from 'antd'
import 'antd/dist/antd.css';
import './Feedback.css'

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
              onChange={(e) => {
                this.setState({ valueStored: e })
                } }
                 />
          }>
          <StarFilled className='star' />
        </Popover>
      </div>
    )
  }
}
