import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedInsights from './components/PageSpeedInsights/PageSpeedInsights';

export default ({ url, labels }) => (
  <PageSpeedInsights url={url} labels={labels} />
);
