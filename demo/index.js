import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedScore from './../src/index';

const Demo = () => (
  <PageSpeedScore url="http://cauealves.com/" />
);

ReactDOM.render(<Demo />, document.getElementById('demo'));
