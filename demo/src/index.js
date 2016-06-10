import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedScore from './../../src/index';

class Demo extends React.Component {
    render() {
      return (
        <PageSpeedScore url="http://cauealves.com/" />
      );
    }
};

ReactDOM.render(<Demo />, document.getElementById('demo'));