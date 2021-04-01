import snowIcon from '../images/icons/s06d.png';
import rainIcon from '../images/icons/u00d.png';

export default function WeatherData({ weatherData, units }) {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 my-4'>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>UV Index</h3>
        <div className='py-4 text-4xl'>{Math.round(weatherData.uv)}</div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Wind Status</h3>
        <div className='py-4'>
          <span className='text-4xl'>{Math.round(weatherData.wind_spd)}</span>
          {units === 'I' ? ' mph' : ' m/s'}
        </div>
        <div className='capitalize hidden sm:block'>
          {weatherData.wind_cdir_full}
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Precipitation</h3>
        <div className='mt-2 flex items-center'>
          <img className='w-8' src={snowIcon} alt='' />
          <span className='ml-1'>
            {Math.round(weatherData.snow)} {units === 'I' ? ' in/hr' : ' mm/hr'}
          </span>
        </div>
        <div className='mt-2 flex items-center'>
          <img className='w-8' src={rainIcon} alt='' />
          <span className='ml-1'>
            {Math.round(weatherData.precip)}{' '}
            {units === 'I' ? ' in/hr' : ' mm/hr'}
          </span>
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Humidity</h3>
        <div className='py-4'>
          <span className='text-4xl'>{Math.round(weatherData.rh)}</span> %
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Cloud Coverage</h3>
        <div className='py-4'>
          <span className='text-4xl'>{Math.round(weatherData.clouds)}</span> %
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Air Quality</h3>
        <div className='py-4'>
          <span className='text-4xl'>{Math.round(weatherData.aqi)}</span> aqi
        </div>
      </div>
    </div>
  );
}
