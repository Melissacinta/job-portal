import { mdiPencil, mdiToggleSwitch } from '@mdi/js'
import Icon from '@mdi/react'

const SearchAlert = () => {
  return (
    <div className="col-span-1  divide-gray-200 rounded-[10px] bg-white">
      <div className="flex w-full items-center justify-between space-x-3 p-6">
        <Icon path={mdiToggleSwitch} color={'#259A1B'} size="35.83px" />
        <div className="flex-1">
          <h3 className="text-lg font-medium text-[#010101]">
            Get alert for this search
          </h3>
        </div>
      </div>
      <div>
        <hr className="mx-auto w-9/12" />
        <div className="-mt-px flex">
          <div className="flex w-0 flex-1">
            <div className="relative -mr-px w-0 flex-1 items-start justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
              <button className="ml-6 flex items-center justify-center gap-2 rounded bg-[#E9E9E9] py-[4.87px] px-[7.88px]">
                <Icon path={mdiPencil} color={'#4E5559'} size="11.25px" />
                Edit
              </button>
            </div>
          </div>
          <div className="-ml-px flex w-0 flex-1">
            <a className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-[#4168C5] hover:text-gray-500">
              <span className="">example@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAlert
