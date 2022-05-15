import { PlusIcon, SearchIcon } from '@heroicons/react/solid'
import { mdiBriefcaseVariant, mdiMapMarkerRadiusOutline, mdiWeb } from '@mdi/js'
import Icon from '@mdi/react'
import Select from 'components/Select'
import SelectTwo from 'components/SelectTwo'
import { useState } from 'react'

const SearchBar = () => {
  const [activeField, setActiveField] = useState('one')
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const options = [
    { id: 1, name: 'Remote off' },
    { id: 2, name: 'Remote on' },
  ]
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-[#2952A8] sm:text-[2.8125rem]">
          Find a Job
        </h1>
        <button className="flex items-center gap-2 rounded-[0.625rem] bg-[#E6ECFB] px-[1.75rem] py-[0.8125rem] text-base font-normal text-[#010101] sm:float-right">
          <span>
            <PlusIcon className=" h-3 w-4" />
          </span>
          Create new search
        </button>
        <div className="sm:clear-both"></div>
        <main className="mt-7 flex flex-col items-center gap-[1.875rem] bg-white pt-[1.6875rem] pb-[1.4375rem] pl-14 pr-[3.1875rem] sm:flex-row">
          <div onClick={() => setActiveField('one')} className="w-full flex-1">
            <div className="relative">
              <div className="absolute top-[50%] left-[4%] -translate-y-1/2 hover:cursor-pointer hover:opacity-80">
                <Icon
                  path={mdiBriefcaseVariant}
                  size={'15px'}
                  color={activeField === 'one' ? '#2952A8' : '#4E5559'}
                />
              </div>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Full Name"
                autoComplete="fullname"
                required
                className={classNames(
                  activeField === 'one'
                    ? 'border-2 border-[#2952A8] text-[#4E5559]'
                    : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                  'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[9%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:pl-[8%] sm:text-lg'
                )}
              />
            </div>
          </div>
          <div
            onClick={() => setActiveField('two')}
            className={classNames(
              activeField === 'two'
                ? 'border-2 border-[#2952A8] text-[#4E5559]'
                : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
              'flex h-[55px] w-full  flex-1 appearance-none rounded-lg placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:text-lg'
            )}
          >
            <div className="relative flex-1">
              <div className="absolute top-[50%] left-[4%] -translate-y-1/2 hover:cursor-pointer hover:opacity-80">
                <Icon
                  path={mdiMapMarkerRadiusOutline}
                  size={'15px'}
                  color={activeField === 'two' ? '#2952A8' : '#4E5559'}
                />
              </div>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Full Name"
                autoComplete="fullname"
                required
                className="block h-full w-full appearance-none bg-transparent pl-[12%] placeholder-[#979797] focus:border-[#2952A8] focus:outline-none  sm:pl-[10%] sm:text-lg"
              />
            </div>
            <div className="relative w-[35%] pr-4">
              <SelectTwo
                options={options}
                icon={mdiWeb}
                activeField={activeField}
              />
            </div>
          </div>

          <button
            type="button"
            className="inline-flex h-[45px] w-full items-center justify-center rounded-[10px] border border-transparent bg-[#4168C5] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:max-w-[167px] sm:text-sm"
          >
            <SearchIcon className="h-[0.875rem] w-[1.125rem]" />
            Search
          </button>
        </main>
      </div>
    </>
  )
}

export default SearchBar
