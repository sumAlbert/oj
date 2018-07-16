import React , { Component } from 'react';
import css from './index.less';

class Index extends Component{
  constructor(prop) {
    super(prop);
    this.state = {
      direction: this.props.direction || 'ROW',
      distance: this.props.distance || '100px',
      showFlag: false
    };
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.movableFlag = false;
  }
  onMouseDown(event) {
    this.movableFlag = true
  }
  onMouseMove(event) {
    if(this.movableFlag) {
      this.setState({
        distance: `${event.clientX}px`
     })
    }
  }
  onMouseUp() {
    this.movableFlag = false;
  }
  onMouseEnter() {
    this.setState({
      showFlag: true
    });
  }
  onMouseLeave() {
    this.setState({
      showFlag: false
    });
  }getLeftWidth() {
    return {
      width: this.state.distance
    }
  }
  render() {
    return (
      <div className='dragLayout'
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}>
        <div className='dragLayout_part-left' style={this.getLeftWidth()}>
          { this.props.children[0] }
          <div className={`dragLayout_moveBar-normal ${
            this.state.showFlag ? 'dragLayout_moveBar-show' : ''
            }`}
               onMouseDown={this.onMouseDown}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}>
            <div className='dragLayout_circle'/>
            <div className='dragLayout_circle'/>
            <div className='dragLayout_circle'/>
          </div>
        </div>
        <div className='dragLayout_part-right'>{ this.props.children[1] }</div>
      </div>
    )
  }
}

export default Index;