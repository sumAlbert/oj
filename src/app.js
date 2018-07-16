import React, { Component } from 'react';
import DraggableLayout from './components/DraggableLayout';
import RightInput from './components/RightInput';
import css from './app.less';

class App extends Component{
  render() {
    return(
      <div className='app'>
        <DraggableLayout distance='200px'>
          <div>12asdasdasd3</div>
          <RightInput/>
        </DraggableLayout>
      </div>
    )
  }
}

export default App;