import { mdiFilterOutline, mdiMapMarker } from '@mdi/js'
import Icon from '@mdi/react'
import Select from 'components/Select'
import SelectThree from 'components/SelectThree'
import { useState } from 'react'
import ReactSlider from 'react-slider'
import { formatMoney } from 'utils/formatMoney'
import Range from './Range'

const FilterComponent = () => {
  const [values, setValues] = useState([10000, 500000])
  const level = [
    { id: 1, name: 'Part Time' },
    { id: 2, name: 'Junior' },
    { id: 3, name: 'Mid' },
    { id: 3, name: 'Senior' },
  ]

  const companySize = [
    { id: 1, name: 'Small size 5 - 10' },
    { id: 2, name: 'Mid size 11 - 50' },
    { id: 3, name: 'Large size 50+' },
  ]
  return (
    <div className=" hidden h-full w-full max-w-[18.8125rem] rounded-[0.9375rem] bg-white px-3 py-6 sm:block">
      <div className="flex justify-between border-b border-[#E5E5E5] px-3">
        <h4 className="flex items-center gap-4 text-2xl font-medium">
          <span>Filter</span>
          <Icon path={mdiFilterOutline} size={'18px'} color="#000000" />
        </h4>
        <span className="flex items-center gap-4 text-xs font-medium text-[#4E5559] underline">
          <a href="#">clear all filters</a>
        </span>
      </div>

      <div className="mt-8 px-3">
        <h4 className="pb-2">
          <span className="text-base font-normal text-[#010101]">
            Salary Rang
          </span>{' '}
          <span className="text-xs font-medium  text-[#4E5559]">
            (min - max)
          </span>
        </h4>
        <span className="inline-block pb-[0.3125rem]  text-xs font-medium text-[#4E5559]">
          NGN {formatMoney(values[0])} - NGN {formatMoney(values[1])} +
        </span>
        <Range values={values} setValues={setValues} />
      </div>

      <div className="mt-8 px-3">
        <h4 className="pb-2">
          <span className="text-base font-normal text-[#010101]">Level</span>{' '}
          <span className="text-xs font-medium  text-[#4E5559]">
            (Junior, Mid, Senior)
          </span>
        </h4>

        <SelectThree options={level} />
      </div>

      <div className="mt-8 px-3">
        <h4 className="pb-2">
          <span className="text-base font-normal text-[#010101]">
            Availability
          </span>
        </h4>

        <div className="mt-4 sm:col-span-2 sm:mt-0">
          <div className="max-w-lg sm:grid sm:grid-cols-2 sm:gap-[0.875rem]">
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="Part-Time"
                  name="Part-Time"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="Part-Time"
                  className="font-medium text-gray-700"
                >
                  Part-Time
                </label>
              </div>
            </div>
            <div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="fulltime"
                    name="fulltime"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="fulltime"
                    className="font-medium text-gray-700"
                  >
                    Full Time
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="contract"
                    name="contract"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="contract"
                    className="font-medium text-gray-700"
                  >
                    Contract
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-3">
        <h4 className="pb-2">
          <span className="text-base font-normal text-[#010101]">
            Company Size
          </span>
        </h4>

        <SelectThree options={companySize} />
      </div>

      <div className="mt-8 px-3 pb-12">
        <h4 className="pb-2">
          <span className="text-base font-normal text-[#010101]">
            Area of interest
          </span>
        </h4>

        <div className="mt-4 sm:col-span-2 sm:mt-0">
          <div className="max-w-lg sm:space-y-5">
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="nodejs"
                  name="nodejs"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="nodejs" className="font-medium text-gray-700">
                  Node js
                </label>
              </div>
            </div>
            <div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="design"
                    name="design"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="design" className="font-medium text-gray-700">
                    Design
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="construction"
                    name="construction"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="construction"
                    className="font-medium text-gray-700"
                  >
                    Construction
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="education"
                    name="education"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="education"
                    className="font-medium text-gray-700"
                  >
                    Education
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterComponent
