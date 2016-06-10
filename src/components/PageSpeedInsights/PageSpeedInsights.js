import React, { 
  Component, 
  PropTypes 
} from 'react';

import { 
  API_URL, 
  CHART_API_URL 
} from './PageSpeedInsightsConstants';


export default class PageSpeedInsights extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired
  };

  static defaultProps = {
    url: location.origin
  };

  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  componentDidMount() {
    let url = this._getApiUrl(this.props.url);

    this._makeRequest(url);
  };

  _getApiUrl(url) {
    const query = [
      'url=' + url
    ].join('&');

    return API_URL + query;
  }

  _makeRequest(url) {
    let xmlhttp = new XMLHttpRequest();

    let self = this;

    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
              self._handleResponse(xmlhttp.responseText);
           };
        };
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  _handleResponse(r) {
    let data = JSON.parse(r);

    this.setState({
      score: data.ruleGroups.SPEED.score
    });
  }

  render() {
    return (
      <div>{this.state.score}</div>
    )
  }
};