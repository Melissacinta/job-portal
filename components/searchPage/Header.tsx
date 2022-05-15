import { SearchIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Header = () => {
  const [active, setActive] = useState('jobs')
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <header className="shadowLg sticky top-0 z-40">
      <Popover className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Jobberman</span>
              <img
                src="/images/logo.svg"
                alt="jobberman logo"
                className="h-8 w-auto sm:h-10"
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 flex items-center justify-end gap-4 md:hidden">
            <img
              className="h-[2.25rem] w-[2.25rem]"
              src="/images/Profileuser.png"
              alt=""
            />
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="#"
              onClick={() => setActive('jobs')}
              className={classNames(
                active === 'jobs' ? 'text-[#2952A8]' : 'text-[#010101]',
                'font-medium hover:text-gray-700 sm:text-lg'
              )}
            >
              Jobs
            </a>
            <a
              href="#"
              onClick={() => setActive('savedJobs')}
              className={classNames(
                active === 'savedJobs' ? 'text-[#2952A8]' : 'text-[#010101]',
                'font-medium hover:text-gray-700 sm:text-lg'
              )}
            >
              Saved Jobs
            </a>
            <a
              href="#"
              onClick={() => setActive('orderHistory')}
              className={classNames(
                active === 'orderHistory' ? 'text-[#2952A8]' : 'text-[#010101]',
                'font-medium hover:text-gray-700 sm:text-lg'
              )}
            >
              Order History
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end gap-4 md:flex md:flex-1 lg:w-0">
            <div className="px-12 lg:px-0">
              {/* Search */}
              <div className="mx-auto w-full max-w-xs lg:max-w-md">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative text-gray-600 focus-within:text-gray-600">
                  <input
                    id="search"
                    style={{ fontFamily: 'FontAwesome', fontWeight: '400' }}
                    className="block h-[2.25rem] w-full rounded-[0.4375rem] border border-transparent bg-[#F0F1F2] py-2 px-2 text-right leading-5 text-[#8B8B8B] placeholder-[#8B8B8B] focus:border-transparent focus:bg-opacity-20 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:min-w-[17.4735rem] sm:text-xs"
                    placeholder="&#xf002;  Search for anything"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </div>
            <img
              className="h-[2.25rem] w-[2.25rem]"
              src="/images/Profileuser.png"
              alt=""
            />
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="sr-only">Jobberman</span>
                    <img
                      src="/images/logo.svg"
                      alt="jobberman logo"
                      className="h-8 w-auto"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid  gap-4">
                  <a
                    href="#"
                    onClick={() => setActive('jobs')}
                    className={classNames(
                      active === 'jobs' ? 'text-[#2952A8]' : 'text-[#010101]',
                      'font-medium hover:text-gray-700 sm:text-lg'
                    )}
                  >
                    Jobs
                  </a>
                  <a
                    href="#"
                    onClick={() => setActive('savedJobs')}
                    className={classNames(
                      active === 'savedJobs'
                        ? 'text-[#2952A8]'
                        : 'text-[#010101]',
                      'font-medium hover:text-gray-700 sm:text-lg'
                    )}
                  >
                    Saved Jobs
                  </a>
                  <a
                    href="#"
                    onClick={() => setActive('orderHistory')}
                    className={classNames(
                      active === 'orderHistory'
                        ? 'text-[#2952A8]'
                        : 'text-[#010101]',
                      'font-medium hover:text-gray-700 sm:text-lg'
                    )}
                  >
                    Order History
                  </a>
                </div>
                <div className="mt-6">
                  <div className="px-12 lg:px-0">
                    {/* Search */}
                    <div className="mx-auto w-full max-w-xs lg:max-w-md">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative text-gray-600 focus-within:text-gray-600">
                        <input
                          id="search"
                          style={{
                            fontFamily: 'FontAwesome',
                            fontWeight: '400',
                          }}
                          className="block h-[2.25rem] w-full rounded-[0.4375rem] border border-transparent bg-[#F0F1F2] py-2 px-2 leading-5 text-[#8B8B8B] placeholder-[#8B8B8B] focus:border-transparent focus:bg-opacity-20 focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-0 sm:min-w-[17.4735rem] sm:text-xs"
                          placeholder="&#xf002;  Search for anything"
                          type="search"
                          name="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  )
}

export default Header
