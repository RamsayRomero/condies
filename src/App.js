import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Sidebar from './components/sidebar';
import WeatherData from './components/weatherData';
import Forecast from './components/forecast';
import axios from 'axios';

function App() {
  const [profileDropdownIsOpen, setProfileDropdownIsOpen] = useState(false);

  const [location, setLocation] = useState('');

  const [state, setState] = useState({
    status: location ? 'pending' : 'idle',
    weatherData: null,
    error: null,
  });
  const { status, weatherData, error } = state;

  useEffect(() => {
    setState({ status: 'pending' });
    axios('https://api.weatherbit.io/v2.0/current', {
      params: {
        key: process.env.REACT_APP_API_KEY,
        units: 'I',
        lat: '33.8255729',
        lon: -116.7571251,
      },
    }).then(
      (response) => {
        console.log(response.data);
        setState({ weatherData: response.data.data[0], status: 'resolved' });
      },
      (error) => setState({ error, status: 'error' })
    );
  }, []);

  return (
    <div className='h-screen bg-gray-100 overflow-hidden flex'>
      <Sidebar weatherData={weatherData} status={status} />
      <div className='flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8'>
        <div className='relative z-10 flex-shrink-0 h-16  border-b border-gray-200 flex'>
          <button className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'>
            <span className='sr-only'>Open sidebar</span>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </button>
          <div className='flex-1 flex justify-between px-4 md:px-0'>
            <div className='flex-1 flex'>
              <form className='w-full flex md:ml-0' action='#' method='GET'>
                <label htmlFor='search_field' className='sr-only'>
                  Search
                </label>
                <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                    <svg
                      className='h-5 w-5'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <input
                    id='search_field'
                    className='block h-full w-full border-transparent py-2 pl-8 pr-3 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                    placeholder='Search'
                    type='search'
                    name='search'
                  />
                </div>
              </form>
            </div>
            <div className='ml-4 flex items-center md:ml-6'>
              <button className=' p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className='ml-3 relative'>
                <div>
                  <button
                    onClick={() =>
                      setProfileDropdownIsOpen(!profileDropdownIsOpen)
                    }
                    type='button'
                    className='max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    id='user-menu'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='sr-only'>Open user menu</span>
                    <img
                      className='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=NUbxqHJFDM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
                <Transition
                  show={profileDropdownIsOpen}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                >
                  <a
                    href='/'
                    className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Your Profile
                  </a>

                  <a
                    href='/'
                    className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Settings
                  </a>

                  <a
                    href='/'
                    className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'
                  >
                    Sign out
                  </a>
                </Transition>
              </div>
            </div>
          </div>
        </div>
        <main
          className='flex-1 relative overflow-y-auto focus:outline-none'
          tabIndex='0'
        >
          <Forecast />
          <h2 className='text-lg font-semibold'>Today's Highlights</h2>
          {status === 'pending' ? (
            <div>Loading</div>
          ) : status === 'error' ? (
            <div>Error</div>
          ) : status === 'resolved' ? (
            <WeatherData weatherData={weatherData} />
          ) : null}
        </main>
      </div>
    </div>
  );
}

export default App;
