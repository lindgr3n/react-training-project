import React, { Component } from 'react';
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

    if (!dayToShow || dayToShow.day !== evt.data.day || !this.state.showdailyforcast) {
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
            <h1 className="App-title">Dagens väder</h1>
            <div className="text-left">
              <button className="btn btn-primary" onClick={this.changeView}>
                Tillbaka
              </button>
            </div>
            <DailyForcast data={this.state.daytoshow} />{' '}
          </div>
        ) : (
          <div>
            <h1 className="App-title">Veckans väder</h1>
            <WeatherChannel onDayClick={this.showDailyForcast} />
          </div>
        )}
      </div>
    );
  }
}

export default WeatherChannelApp;

const DailyForcast = props => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      {data.day}
      <ul className="w-75 list-group center-block">
        {data.time.map(hour_info => {
          return <DailyForcastTime key={hour_info.time} data={hour_info} />;
        })}
      </ul>
    </div>
  );
};

const DailyForcastTime = props => {
  const { time, info } = props.data;
  const { temp, condition, wind, cloud_chance } = info;
  let classes = 'badge badge-pill ';
  classes += temp <= 0 ? 'badge-primary' : 'badge-warning';
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {time}
      <div>
        <span className={classes}>{temp}°C</span>
        <br />
        <span className="font-italic pr-2" style={{ fontSize: 10 }}>
          condition: {condition}
        </span>
        <span className="font-italic pr-2" style={{ fontSize: 10 }}>
          wind: {wind}
        </span>
        <span className="font-italic pr-2" style={{ fontSize: 10 }}>
          cloud chance: {cloud_chance}
        </span>
      </div>
    </li>
  );
};
