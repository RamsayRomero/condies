import { format } from 'date-fns-tz';

export default function Sidebar({ weatherData, status, error, location }) {
  const today = new Date();

  return (
    <div className='bg-white hidden md:flex md:flex-shrink-0'>
      <div className='w-80 flex flex-col'>
        <div className='border-r border-gray-200 p-6 flex flex-col flex-grow overflow-y-auto'>
          {status === 'pending' ? (
            <div>Loading...</div>
          ) : status === 'error' ? (
            <div>
              Something went wrong :( <span>{error.message}</span>
            </div>
          ) : status === 'resolved' ? (
            <div>
              <h2 className='text-2xl'>{location.title}</h2>
              <div className='mt-6 overflow-hidden rounded-lg'>
                <img
                  className='w-full object-cover'
                  src={location.image}
                  alt=''
                />
              </div>
              <div className='mt-6 text-7xl font-light'>
                {Math.round(weatherData.temp)}°
              </div>
              <div className='mt-6 pb-8 border-b'>
                <time dateTime={today}>
                  {format(today, 'cccc')},{' '}
                  <span className='text-gray-600'>{format(today, 'p')}</span>
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
              <div className='mt-4 text-gray-600 text-sm'>
                Feels like:{' '}
                <span className='text-xl text-black'>
                  {Math.round(weatherData.app_temp)}
                </span>
                °
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
