export default function WeatherData({ weatherData }) {
  return (
    <main
      className='flex-1 relative overflow-y-auto focus:outline-none'
      tabIndex='0'
    >
      <div className='py-6'>
        <div className='flex justify-between'>
          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Sun</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Mon</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Tue</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Wed</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Thu</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Fri</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>

          <div className='flex flex-col items-center p-2 bg-gray-50 rounded-xl text-sm'>
            <div>Sat</div>
            <div className='mt-3'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='flex'>
              <span>16°</span>
              <span className='ml-2'>32°</span>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-lg font-semibold'>Today's Highlights</h2>
      <div className='grid grid-cols-3 gap-4 mt-4'>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
        <div className='p-4 bg-gray-50 rounded-lg'>
          <h3 className='text-gray-600'>Wind Status</h3>
          <div className='py-4'>
            <span className='text-3xl mr-2'>7.70</span>
            mph
          </div>
          <div className='flex items-center'>
            <svg
              className='h-5 w-5'
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
            <span className='ml-1'>SW</span>
          </div>
        </div>
      </div>
    </main>
  );
}
