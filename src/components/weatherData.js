export default function WeatherData({ weatherData }) {
  return (
    <div className='grid grid-cols-3 gap-4 mt-4'>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>UV Index</h3>
        <div className='py-4'>{Math.round(weatherData.uv)}</div>
      </div>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>Wind Status</h3>
        <div className='py-4'>
          <span className='text-3xl mr-2'>{weatherData.wind_spd}</span>
          mph
        </div>
        <div className='capitalize'>{weatherData.wind_cdir_full}</div>
      </div>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>Sunrise & Sunset</h3>
        <div className='py-4 flex items-center'>
          <div className='rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500'>
            <svg
              className='h-8 w-8 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z'
              />
            </svg>
          </div>
          <time className='ml-2'>{weatherData.sunrise}</time>
        </div>
        <div className='py-4 flex items-center'>
          <div className='rounded-full bg-gradient-to-bl from-yellow-200 to-yellow-500'>
            <svg
              className='h-8 w-8 text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z'
              />
            </svg>
          </div>
          <time className='ml-2'>{weatherData.sunset}</time>
        </div>
      </div>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>Humidity</h3>
        <div className='py-4'>{weatherData.rh}%</div>
      </div>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>Cloud Coverage</h3>
        <div className='py-4'>{weatherData.clouds}%</div>
      </div>
      <div className='p-4 bg-gray-50 rounded-lg'>
        <h3 className='text-gray-600'>Air Quality</h3>
        <div className='py-4'>{weatherData.aqi}aqi</div>
      </div>
    </div>
  );
}
