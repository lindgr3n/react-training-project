import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherChannel.css';
import wheatherReport from './weatherreport';

class WeatherChannel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daytoshow: {},
      showdailyforcast: false
    };
    this.showDailyForcast = this.showDailyForcast.bind(this);
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
  render() {
    return (
      <div>
        <div className="card-group">
          {wheatherReport.days.map(day => {
            return <WeeklyForcast key={day.day} data={day} onClick={this.showDailyForcast} />;
          })}
        </div>
        <div className={this.state.showdailyforcast ? '' : 'hidden'}>
          <DailyForcast data={this.state.daytoshow} />
        </div>
      </div>
    );
  }
}

export default WeatherChannel;

const WeeklyForcast = props => {
  const { day, img, temp_hi, temp_lo } = props.data;
  return (
    <div className="card w-20" onClick={e => props.onClick(props, e)}>
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
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
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
  const { data } = props;
  console.log(data);
  return <div>{data.day}</div>;
};
