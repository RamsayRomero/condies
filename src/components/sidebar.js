import blackMountain from '../images/20171213-mp6a6604.jpg';
import { formatDay } from '../utils/formatDate';

export default function Sidebar({ weatherData, status }) {
  const today = new Date();

  return (
    <div className='bg-gray-50 hidden md:flex md:flex-shrink-0'>
      <div className='w-80 flex flex-col'>
        <div className='border-r border-gray-200 p-6 flex flex-col flex-grow overflow-y-auto'>
          {status === 'pending' ? (
            <div>Loading...</div>
          ) : status === 'error' ? (
            <div>An error occurred</div>
          ) : status === 'resolved' ? (
            <div>
              <div className=''>
                <img
                  className='w-36'
                  src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
                  alt='Weather icon'
                />
              </div>
              <div className='mt-6 text-7xl font-light'>
                {weatherData.temp}°
              </div>
              <div className='mt-6 pb-8 border-b'>
                <time dateTime={today}>
                  {formatDay(today.getDay())},{' '}
                  <span className='text-gray-600'>
                    {today.getHours()}:{today.getMinutes()}
                  </span>
                </time>
              </div>
              <div className='mt-6 flex items-center'>
                <img
                  className='h-5 w-5'
                  src={`https://www.weatherbit.io/static/img/icons/${weatherData.weather.icon}.png`}
                  alt='Weather icon'
                />{' '}
                <span className='ml-2'>{weatherData.weather.description}</span>
              </div>
              <div className='mt-2'>Feels like: {weatherData.app_temp}°</div>
              <div className='mt-4 overflow-hidden rounded-lg'>
                <img
                  className='w-full object-cover'
                  src={blackMountain}
                  alt='Paul Robinson climbing Teahupoo V12 in Black Mountain, CA'
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
