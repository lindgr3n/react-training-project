/* 
Sun -  sky is clear       https://openweathermap.org/img/w/01d.png
CloudySun                 https://openweathermap.org/img/w/02d.png
Cloudy                    https://openweathermap.org/img/w/03d.png
CloudyCanRain             https://openweathermap.org/img/w/04d.png


CloudyRaining                   https://openweathermap.org/img/w/09d.png
CloudySunRain - moderate rain   https://openweathermap.org/img/w/10d.png 
CloudyCanRainThunder            https://openweathermap.org/img/w/11d.png 
CloudySnowing - light snow      https://openweathermap.org/img/w/13d.png 

*/

export const DATA_WEEKLY = {
  days: [
    {
      date: 20171106,
      day: 'Måndag',
      img: 'https://openweathermap.org/img/w/13d.png',
      temp_hi: 5,
      temp_lo: -10,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171107,
      day: 'Tisdag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: 2,
      temp_lo: 0,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171108,
      day: 'Onsdag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: 10,
      temp_lo: 0,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171109,
      day: 'Torsdag',
      img: 'https://openweathermap.org/img/w/03d.png',
      temp_hi: -2,
      temp_lo: -8,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171110,
      day: 'Fredag',
      img: 'https://openweathermap.org/img/w/13d.png',
      temp_hi: -10,
      temp_lo: -20,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171111,
      day: 'Lördag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: -20,
      temp_lo: -25,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    },
    {
      date: 20171112,
      day: 'Söndag',
      img: 'https://openweathermap.org/img/w/03d.png',
      temp_hi: -5,
      temp_lo: -10,
      time: [{ '01:00': -10 }, { '04:00': -8 }, { '07:00': -5 }, { '10:00': 1 }, { '13:00': 5 }, { '16:00': 1 }, { '19:00': -5 }, { '22:00': -8 }]
    }
  ]
};
