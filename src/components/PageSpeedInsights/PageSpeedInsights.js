import React, {
  Component,
  PropTypes
} from 'react';

import {
  API_URL,
  CHART_API_URL
} from './PageSpeedInsightsConstants';

import Loader from 'react-loader';

export default class PageSpeedInsights extends Component {

  static propTypes = {
    url: PropTypes.string.isRequired
  }

  static defaultProps = {
    url: location.origin
  }

  constructor(props) {
    super(props);

    this.state = {
      score: false,
      loaded: false
    };
  }

  componentDidMount() {
    let url = this._getApiUrl(this.props.url);

    this._makeRequest(url);
  }

  _getApiUrl(url) {
    const query = [
      'url=' + url
    ].join('&');

    return API_URL + query;
  }

  _makeRequest(url) {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState === xmlhttp.DONE) {
        if (xmlhttp.status === 200) {
          this._handleResponse(xmlhttp.responseText);
       }
      }
    };

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  _handleResponse(r) {
    let data = JSON.parse(r);

    this.setState({
      score: data.ruleGroups.SPEED.score,
      loaded: true
    });
  }

  _getImageSrc () {
    const query = [
      'chtt=PageSpeed+Score',
      'chs=500x300',
      'cht=gom',
      'chd=t:' + this.state.score,
      'chxt=x,y',
      'chxl=0:|' + this.state.score + '|1:|improve it|gives pro spent|nice job'
    ].join('&');

    return CHART_API_URL + query;
  }

  render() {
    return (
      <div className="chart">
        <Loader loaded={this.state.loaded}>
          <img src={this._getImageSrc(this.state.score)} />
        </Loader>
      </div>
    );
  }
}
