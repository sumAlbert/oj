import React, { Component } from 'react';
import css from './index.less';

class TeatArea extends Component{
  constructor(props) {
    super(props);
    this.state = {
      readOnly: this.props.readOnly
    }
  }
  render() {
    return(
      <div className='textArea-wrapper'>
        <div className='textArea-content' contentEditable={this.state.readOnly} ref={(el) => {this.el = el;}}/>
      </div>
    )
  }
}

export default TeatArea;