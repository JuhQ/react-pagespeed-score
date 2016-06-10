import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedScore from './../../src/index';

class Demo extends React.Component {
    render() {
      return (
        <PageSpeedScore />
      );
    }
};

ReactDOM.render(<Demo />, document.getElementById('demo'));