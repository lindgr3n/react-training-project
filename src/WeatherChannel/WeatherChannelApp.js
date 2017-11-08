import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherChannel.css';

import WeatherChannel from './WeatherChannel';

class WeatherChannelApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daytoshow: {},
      showdailyforcast: false
    };
    this.showDailyForcast = this.showDailyForcast.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  showDailyForcast(evt) {
    console.log('this', this);
    console.log('evt', evt);

    let dayToShow = this.state.daytoshow;
    let showDailyForcast = false;

    if (!dayToShow || dayToShow.day != evt.data.day || !this.state.showdailyforcast) {
      showDailyForcast = true;
    }

    this.setState({ daytoshow: evt.data, showdailyforcast: showDailyForcast });
  }

  changeView() {
    this.setState({ daytoshow: {}, showdailyforcast: false });
  }

  render() {
    return (
      <div>
        {this.state.showdailyforcast ? (
          <div>
            <button onClick={this.changeView}>back</button>
            <DailyForcast data={this.state.daytoshow} />{' '}
          </div>
        ) : (
          <WeatherChannel onDayClick={this.showDailyForcast} />
        )}
      </div>
    );
  }
}

export default WeatherChannelApp;

const DailyForcast = props => {
  const { data } = props;
  console.log(data);
  return <div>{data.day}</div>;
};
