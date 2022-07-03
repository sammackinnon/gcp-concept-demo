'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const containerNHT = document.querySelector('.nht_table');
const containerWHT = document.querySelector('.wht_table');
const containerACT = document.querySelector('.act_table');
const containerWHTButton = document.querySelector('.wht_button');
const containerACTButton = document.querySelector('act_button');

const coords = [58.0, -6.0743];

let map, mapEvent;

// containerWorkouts.addEventListener('click', this.moveToPopup);

map = L.map('map').setView(coords, 8);

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);

// const nhtMarker = L.marker([57.9666025, -6.868337], { opacity: 0 })
//   .addTo(map)
//   .bindPopup(
//     L.popup({
//       maxHeight: 250,
//       minWidth: 100,
//       autoClose: false,
//       className: 'trustLocation',
//     })
//   )
//   .setPopupContent('North Harris Trust')
//   .openPopup();

// const whtMarker = L.marker([57.8547124, -6.9433016], { opacity: 0 })
//   .addTo(map)
//   .bindPopup(
//     L.popup({
//       maxWidth: 250,
//       minWidth: 100,
//       autoClose: false,
//       className: 'trustLocation',
//     })
//   )
//   .setPopupContent('West Harris Trust')
//   .openPopup();

// const actMarker = L.marker([58.21227, -5.26988], { opacity: 0 })
//   .addTo(map)
//   .bindPopup(
//     L.popup({
//       maxWidth: 250,
//       minWidth: 100,
//       autoClose: false,
//       className: 'trustLocation',
//     })
//   )
//   .setPopupContent('Assynt Crofters Trust')
//   .openPopup();

const nhtLands = fetch(
  'https://raw.githubusercontent.com/sammackinnon/Data/main/nht.geojson'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return { color: '#9D3F9D' };
      },
    })
      .addTo(map)
      .bindPopup('North Harris Trust');
  });

const whtLands = fetch(
  'https://raw.githubusercontent.com/sammackinnon/Data/main/wht.geojson'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return { color: '#9D3F9D' };
      },
    })
      .addTo(map)
      .bindPopup('West Harris Trust');
  });

const actLands = fetch(
  'https://raw.githubusercontent.com/sammackinnon/Data/main/act.geojson'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    L.geoJSON(data, {
      style: function (feature) {
        return { color: '#9D3F9D' };
      },
    })
      .addTo(map)
      .bindPopup('Assynt Crofters Trust');
  });

// const leafletIcon = L.icon({
//   iconUrl:
//     'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
//   iconSize: [25, 41],
//   iconaAnchor: [12, 41],
//   transparent: true,
// });

// const nhtMarker = L.marker([57.9666025, -6.868337], {
//   icon: leafletIcon,
// }).addTo(map);

// const whtMarker = L.marker([57.8547124, -6.9433016]).addTo(map);

// const actMarker = L.marker([58.21227, -5.26988]).addTo(map);

// this.map.setView();

containerNHT.addEventListener('mouseover', function () {
  map.setView([57.96676, -6.86782], 10);
});

containerWHT.addEventListener('mouseover', function () {
  map.setView([57.8547124, -6.9433016], 11);
});

containerACT.addEventListener('mouseover', function () {
  map.setView([58.21227, -5.26988], 11);
});

containerWHTButton.addEventListener('click', function () {});

// _moveToPopup(e) {
//     const workoutEL =e.target.closest()
// };
