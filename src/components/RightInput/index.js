import React, { Component } from 'react';
import TextArea from '../TextArea/index'
import css from './index.less';

class RightInput extends Component{
  constructor(props) {
    super(props);
    this.onClickRun = this.onClickRun.bind(this);
  }
  onClickRun() {
    const script = document.createElement('script');
    const questionNum = this.numEl.innerHTML;
    script.src = `./niuke${questionNum || 1}.js`;
    this.scriptEl.innerHTML = '';
    this.scriptEl.append(script);
  }
  render() {
    return(
      <div className='rightInput_wrapper'>
        <div className='rightInput_upper'>
          <TextArea readOnly='true' ref={(el) => {this.el = el;}} />
        </div>
        <div className='rightInput_middle'>
          <div className='rightInput_button' onClick={this.onClickRun}>运行</div>
          <div className='rightInput_num' contentEditable='true' ref={(numEl) => {this.numEl = numEl}} />
          <div id='script_wrapper' ref={(scriptEl) => {this.scriptEl = scriptEl}}/>
        </div>
        <div className='rightInput_bottom'>
          <TextArea/>
        </div>
      </div>
    )
  }
}

export default RightInput;
