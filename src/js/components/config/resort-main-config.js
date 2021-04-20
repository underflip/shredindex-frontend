import {
  cilElevator,
  cilList, cilMediaSkipBackward, cilRain, cilSnowflake, cilTerrain,
} from '@coreui/icons';

const ResortMainInfo = {
  id: 2,
  name: 'The Remarkables',
  description: 'Deep steeps, long cruisers, glade zones, powder stashes, and corduroy groomers can all be found within 4,270 acres of skiable terrain. Three mountains surround a European-style, ski-through village filled with quaint shops, cafés, and eateries. Sun Peaks has an abundance of activities and events for both on and off the slopes, leaving you wishing only for more time at Canada\'s second largest ski area. We were thrilled to be named in National Geographic\'s Best Winter Trips of 2019 article, a testament to our terrain and conditions, and overall village vibe and amenities. ',
  location: {
    address: '',
    state: 'Queenstown',
    country: 'New Zealand',
    lat: -45.0540695,
    lng: 168.8121154,
  },
  scores: [
    {
      id: 0, name: 'Shred Total', icon: cilSnowflake, percentage: 64,
    },
    {
      id: 1, name: 'Digital Nomad', icon: cilTerrain, percentage: 45,
    },
    {
      id: 2, name: 'Hardcore', icon: cilRain, percentage: 30,
    },
    {
      id: 3, name: 'Family', icon: cilList, percentage: 80,
    },
    {
      id: 4, name: 'Apres', icon: cilMediaSkipBackward, percentage: 65,
    },
  ],
  statistics: [
    {
      id: 0, stat: 'Average Annual Snow Fall', icon: cilSnowflake, value: 6, type: 'meters',
    },
    {
      id: 1, stat: 'Skiiable Terrain', icon: cilTerrain, value: 6343, type: 'acres',
    },
    {
      id: 2, stat: 'Elevation Peak', icon: cilRain, value: 2030, type: 'meters',
    },
    {
      id: 3, stat: 'Number of Runs', icon: cilList, value: 12, type: '',
    },
    {
      id: 4, stat: 'longest Run', icon: cilMediaSkipBackward, value: 6876, type: 'meters',
    },
    {
      id: 5, stat: 'Number of Lifts', icon: cilElevator, value: 135, type: '',
    },
  ],
};
export default ResortMainInfo;
