import axios from 'axios';
import { useEffect, useState } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';

export default function Forecast({ location }) {
  const [state, setState] = useState({
    status: location ? 'pending' : 'idle',
    forecastData: null,
    error: null,
  });
  const { status, forecastData, error } = state;

  useEffect(() => {
    setState({ status: 'pending' });
    axios('https://api.weatherbit.io/v2.0/forecast/daily', {
      params: {
        key: process.env.REACT_APP_API_KEY,
        units: 'I',
        lat: '33.8255729',
        lon: -116.7571251,
      },
    }).then(
      (response) =>
        setState({
          forecastData: response.data.data.slice(0, 7),
          status: 'resolved',
        }),
      (error) => setState({ status: 'error', error })
    );
  }, []);

  return (
    <div className='py-6'>
      <div className='flex justify-between'>
        {status === 'pending' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          <div>Error</div>
        ) : status === 'resolved' ? (
          forecastData.map((day) => {
            const zonedDate = utcToZonedTime(day.valid_date, day.timezone);
            return (
              <div
                key={day.valid_date}
                className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'
              >
                <div>{format(zonedDate, 'eee')}</div>
                <div className='my-3'>
                  <img
                    className='-ml-px w-10'
                    src={`https://www.weatherbit.io/static/img/icons/${day.weather.icon}.png`}
                    alt='Weather icon'
                  />
                </div>
                <div className='flex'>
                  <span>{Math.round(day.max_temp)}°</span>
                  <span className='ml-2 text-gray-600'>
                    {Math.round(day.low_temp)}°
                  </span>
                </div>
              </div>
            );
          })
        ) : null}
      </div>
    </div>
  );
}
