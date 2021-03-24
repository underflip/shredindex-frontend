import {cilElevator, cilList, cilMediaSkipBackward, cilRain, cilSnowflake, cilTerrain} from '@coreui/icons';

const MountainStatItems = [
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
];

export default MountainStatItems;
