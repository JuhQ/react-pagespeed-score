# react-pagespeed-score

> A React component for display a dial-type chart of PageSpeed Insights.

<br />

<p align="center">
  <img width="60%" src="./screenshot.png?raw=true" />
</p>

## Install 

Via [Node.js](https://nodejs.org) run the following:
```bash
$ npm i react-pagespeed-score --save
```

## Basic Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import PageSpeedScore from 'react-pagespeed-score';

class BasicUsage extends React.Component {
    render() {
      return (
        <PageSpeedScore url="http://cauealves.com/" />
      );
    }
};
```

## Development

```bash
npm install
npm start
```

## License

MIT © [Cauê Alves](http://cauealves.com)
