import snowIcon from '../images/icons/s06d.png';
import rainIcon from '../images/icons/u00d.png';

function calcUVIndexScale(uv) {
  if (uv <= 2) {
    return ['Low', 'green-500'];
  } else if (uv <= 5) {
    return ['Medium', 'yellow-400'];
  } else if (uv <= 7) {
    return ['High', 'yellow-600'];
  } else if (uv <= 10) {
    return ['Very High', 'red-700'];
  } else {
    return ['Extreme', 'purple-900'];
  }
}

function calcAQIScale(aqi) {
  if (aqi <= 50) {
    return ['Good', 'green-500'];
  } else if (aqi <= 100) {
    return ['Moderate', 'yellow-400'];
  } else if (aqi <= 150) {
    return ['Unhealthy for sensitive groups', 'yellow-600'];
  } else if (aqi <= 200) {
    return ['Unhealthy', 'red-700'];
  } else if (aqi <= 300) {
    return ['Very Unhealthy', 'purple-900'];
  } else {
    return ['Hazardous', 'pink-900'];
  }
}

export default function WeatherData({ weatherData, units }) {
  const [uvDescription, uvColor] = calcUVIndexScale(weatherData.uv);
  const [aqiDescription, aqiColor] = calcAQIScale(weatherData.aqi);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 my-4'>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>UV Index</h3>
        <div className='py-3 text-4xl'>{Math.round(weatherData.uv)}</div>
        <div className={`text-${uvColor} text-sm`}>{uvDescription}</div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Wind Status</h3>
        <div className='py-3'>
          <span className='text-4xl'>{Math.round(weatherData.wind_spd)}</span>
          {units === 'I' ? ' mph' : ' m/s'}
        </div>
        <div className='capitalize hidden lg:block md:hidden sm:block'>
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
        <div className='py-3'>
          <span className='text-4xl'>{Math.round(weatherData.rh)}</span> %
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Cloud Coverage</h3>
        <div className='py-3'>
          <span className='text-4xl'>{Math.round(weatherData.clouds)}</span> %
        </div>
      </div>
      <div className='p-4 bg-white rounded-2xl h-36'>
        <h3 className='text-gray-600'>Air Quality</h3>
        <div className='py-3'>
          <span className='text-4xl'>{Math.round(weatherData.aqi)}</span> aqi
        </div>
        <div className={`text-${aqiColor} text-sm`}>{aqiDescription}</div>
      </div>
    </div>
  );
}
