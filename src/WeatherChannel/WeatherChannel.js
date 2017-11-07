import React, { Component } from 'react';
// import './WeatherChannel.css';

class WeatherChannel extends Component {
  render() {
    return (
      <div>
        <DailyForcast />
      </div>
    );
  }
}

export default WeatherChannel;

const DailyForcast = props => {
  return (
    <div>
      <DailyForcastDay />
      <DailyForcastImage />
      <div>
        <DailyForcastTemp />
      </div>
    </div>
  );
};

const DailyForcastDay = props => {
  return <div>Wed</div>;
};

const DailyForcastImage = props => {
  // src="http://via.placeholder.com/350x150"
  return <div>Cloud</div>;
};
const DailyForcastTemp = props => {
  return <div>78</div>;
};
