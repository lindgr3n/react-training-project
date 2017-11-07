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

const DATA = {
  days: [
    {
      day: 'Måndag',
      img: 'https://openweathermap.org/img/w/13d.png',
      temp_hi: 5,
      temp_lo: -10
    },
    {
      day: 'Tisdag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: 2,
      temp_lo: 0
    },
    {
      day: 'Onsdag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: 10,
      temp_lo: 0
    },
    {
      day: 'Torsdag',
      img: 'https://openweathermap.org/img/w/03d.png',
      temp_hi: -2,
      temp_lo: -8
    },
    {
      day: 'Fredag',
      img: 'https://openweathermap.org/img/w/13d.png',
      temp_hi: -10,
      temp_lo: -20
    },
    {
      day: 'Lördag',
      img: 'https://openweathermap.org/img/w/01d.png',
      temp_hi: -20,
      temp_lo: -25
    },
    {
      day: 'Söndag',
      img: 'https://openweathermap.org/img/w/03d.png',
      temp_hi: -5,
      temp_lo: -10
    }
  ]
};
export default DATA;
