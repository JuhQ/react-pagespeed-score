import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedInsights from './components/PageSpeedInsights/PageSpeedInsights';

export default class PageSpeedScore extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <PageSpeedInsights url={this.props.url} />
    );
  }
};