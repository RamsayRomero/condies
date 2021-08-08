import { useState, useEffect } from 'react';
import { useLocalStorageState } from './utils/useLocalStorageState';
import Sidebar from './components/sidebar';
import WeatherData from './components/weatherData';
import Forecast from './components/forecast';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import blackMountain from './images/Black_Mountain.jpg';
import joshuaTree from './images/joshua_tree.jpg';
import yosemite from './images/yosemite.jpg';
import redRocks from './images/red_rocks.jpg';
import buttermilks from './images/buttermilks.jpg';
import happies from './images/happies.webp';
import horseFlats from './images/horse_flats.jpg';
import tuolumne from './images/tuolumne.jpg';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/errorFallback';
import Spinner from './components/spinner';

const areas = [
  {
    title: 'Black Mountain',
    lat: 33.8255729,
    lon: -116.7571251,
    image: blackMountain,
  },
  {
    title: 'Joshua Tree',
    lat: 34.0169687,
    lon: -116.1660869,
    image: joshuaTree,
  },
  {
    title: 'Yosemite Valley',
    lat: 37.7381002,
    lon: -119.5968362,
    image: yosemite,
  },
  {
    title: 'Red Rocks',
    lat: 36.1613765,
    lon: -115.4127651,
    image: redRocks,
  },
  {
    title: 'Buttermilks',
    lat: 37.3281365,
    lon: -118.575375,
    image: buttermilks,
  },
  {
    title: 'Happy Boulders',
    lat: 37.4157995,
    lon: -118.449143,
    image: happies,
  },
  {
    title: 'Horse Flats',
    lat: 34.3404854,
    lon: -118.0170709,
    image: horseFlats,
  },
  {
    title: 'Tuolumne Meadows',
    lat: 37.8712102,
    lon: -119.3599051,
    image: tuolumne,
  },
];

function App() {
  const [units, setUnits] = useLocalStorageState('units', 'I');

  const [location, setLocation] = useLocalStorageState('location', areas[0]);

  const [state, setState] = useState({
    status: location ? 'pending' : 'idle',
    weatherData: null,
    error: null,
  });
  const { status, weatherData, error } = state;

  useEffect(() => {
    if (!location) {
      return;
    }
    setState({ status: 'pending' });
    axios('https://api.weatherbit.io/v2.0/current', {
      params: {
        key: process.env.REACT_APP_API_KEY,
        units: units,
        lat: location.lat,
        lon: location.lon,
      },
    }).then(
      (response) => {
        setState({ weatherData: response.data.data[0], status: 'resolved' });
      },
      (error) => setState({ error, status: 'error' })
    );
  }, [location, units]);

  return (
    <div className='h-screen bg-gray-100 overflow-hidden flex'>
      <Sidebar
        location={location}
        weatherData={weatherData}
        status={status}
        error={error}
      />
      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col px-4 md:px-8'>
        <div className='relative z-10 flex-shrink-0 h-16  mt-6 flex'>
          <div className='flex-1 flex justify-between px-4 md:px-0'>
            <div className='flex-1 flex'>
              <div className='w-full flex md:ml-0'>
                <Autocomplete
                  id='search_field'
                  blurOnSelect
                  disableClearable
                  autoHighlight
                  value={location}
                  onChange={(event, newValue) => {
                    setLocation(newValue);
                  }}
                  style={{ width: '100%' }}
                  options={areas}
                  getOptionLabel={(area) => area.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Search areas'
                      variant='outlined'
                    />
                  )}
                />
              </div>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <button
                onClick={() => setUnits('I')}
                className={`${
                  units === 'I'
                    ? 'bg-black text-white hover:bg-gray-700'
                    : 'bg-white text-black hover:bg-gray-200'
                }  inline-flex items-center h-9 w-9 justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                °F
              </button>
              <button
                onClick={() => setUnits('M')}
                className={`${
                  units === 'M'
                    ? 'bg-black text-white hover:bg-gray-700'
                    : 'bg-white text-black hover:bg-gray-200'
                } ml-2 inline-flex items-center h-9 w-9 justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                °C
              </button>
            </div>
          </div>
        </div>
        <main
          className='flex-1 relative overflow-y-auto focus:outline-none'
          tabIndex='0'
        >
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => setLocation(areas[0])}
            resetKeys={[location]}
          >
            <Forecast location={location} units={units} />
          </ErrorBoundary>
          <h2 className='text-lg font-semibold'>Today's Highlights</h2>
          {status === 'pending' ? (
            <Spinner />
          ) : status === 'error' ? (
            <div className='p-2'>
              Something went wrong :( Try refreshing{' '}
              <span>{error.message}</span>
            </div>
          ) : status === 'resolved' ? (
            <WeatherData units={units} weatherData={weatherData} />
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
