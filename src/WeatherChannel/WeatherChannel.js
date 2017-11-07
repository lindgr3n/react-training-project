import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherChannel.css';
import wheatherReport from './weatherreport';

class WeatherChannel extends Component {
  render() {
    return (
      <div className="card-group">
        {wheatherReport.days.map(day => {
          return <WeeklyForcast key={day.day} data={day} />;
        })}
        <div className="hidden">
          <DailyForcast />
        </div>
      </div>
    );
  }
}

export default WeatherChannel;

const WeeklyForcast = props => {
  const { day, img, temp_hi, temp_lo } = props.data;
  return (
    <div className="card w-20">
      <WeeklyForcastDay text={day} />
      <WeeklyForcastImage src={img} />
      <div className="card-body">
        <WeeklyForcastTemp temp={temp_hi} />
        <WeeklyForcastTemp temp={temp_lo} />
      </div>
    </div>
  );
};

WeeklyForcast.propTypes = {
  data: PropTypes.object.isRequired
};

const WeeklyForcastDay = props => {
  const { text } = props;
  return <div>{text}</div>;
};

WeeklyForcastDay.propTypes = {
  text: PropTypes.string.isRequired
};

const WeeklyForcastImage = props => {
  const { src } = props;
  return (
    <div className="card-img-top">
      <img src={src} alt="Type of weather" />
    </div>
  );
};
WeeklyForcastImage.propTypes = {
  src: PropTypes.string.isRequired
};

const WeeklyForcastTemp = props => {
  const { temp } = props;
  return <span style={{ paddingLeft: 5, paddingRight: 5 }}>{temp}°C</span>;
};

WeeklyForcastTemp.propTypes = {
  temp: PropTypes.number
};

const DailyForcast = props => {
  return <div>test</div>;
};