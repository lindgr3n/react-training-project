import React, { Component } from 'react';
import PropTypes from 'prop-types';

import wheatherReport from './weatherreport';

class WeatherChannel extends Component {
  render() {
    return (
      <div className="card-group">
        {wheatherReport.days.map(day => {
          return <DailyForcast key={day.day} data={day} />;
        })}
      </div>
    );
  }
}

export default WeatherChannel;

const DailyForcast = props => {
  const { day, img, temp_hi, temp_lo } = props.data;
  return (
    <div className="card w-20">
      <DailyForcastDay text={day} />
      <DailyForcastImage src={img} />
      <div className="card-body">
        <DailyForcastTemp temp={temp_hi} />
        <DailyForcastTemp temp={temp_lo} />
      </div>
    </div>
  );
};

DailyForcast.propTypes = {
  data: PropTypes.object.isRequired
};

const DailyForcastDay = props => {
  const { text } = props;
  return <div>{text}</div>;
};

DailyForcastDay.propTypes = {
  text: PropTypes.string.isRequired
};

const DailyForcastImage = props => {
  const { src } = props;
  return (
    <div className="card-img-top">
      <img src={src} alt="Type of weather" />
    </div>
  );
};
DailyForcastImage.propTypes = {
  src: PropTypes.string.isRequired
};

const DailyForcastTemp = props => {
  const { temp } = props;
  return <span style={{ paddingLeft: 5, paddingRight: 5 }}>{temp}°C</span>;
};

DailyForcastTemp.propTypes = {
  temp: PropTypes.number
};
