<img src="./screenshot.png?raw=true" width="350" />

# React PageSpeed Score [![Build Status](https://travis-ci.org/cauealves/react-pagespeed-score.svg?branch=master)](https://travis-ci.org/cauealves/react-pagespeed-score) [![Dependency Status](https://david-dm.org/cauealves/react-pagespeed-score.svg?style=flat-square)](https://david-dm.org/cauealves/react-pagespeed-score) [![Npm Package Version](https://img.shields.io/npm/v/react-pagespeed-score.svg?style=flat-square)](https://www.npmjs.org/package/react-pagespeed-score)

> A React component for display a dial-type chart of PageSpeed Insights.

<br />

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

## Props

Attribute  | Type        | Default             | Description
---        | ---         | ---                 | ---
`url`   | *String*    | `location.origin`    | The url that will be tested in Pagespeed Insights
`labels` | *String*   | `improve it \| gives pro spent \| nice job`             | Specify the labels of chart


## Development

```bash
npm install
npm start
```

## License

MIT © [Cauê Alves](http://cauealves.com)
