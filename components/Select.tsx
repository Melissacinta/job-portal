import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import Icon from '@mdi/react'
import { type } from 'os'
type Props = {
  options: Array<any>
  icon?: any
  activeField?: string
}

export default function Select({ options, icon, activeField }: Props) {
  const [selected, setSelected] = useState(options[0])

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1">
        <Listbox.Button
          className={classNames(
            activeField === 'select'
              ? 'border-2 border-[#2952A8] bg-white text-[#4E5559]'
              : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
            'relative h-[55px] w-full cursor-default appearance-none rounded-lg py-2  pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2952A8] sm:text-sm'
          )}
        >
          {icon && (
            <div className="absolute top-1/3 left-[4%] hover:cursor-pointer hover:opacity-80">
              <Icon
                path={icon}
                size={'15px'}
                color={activeField === 'select' ? '#2952A8' : '#4E5559'}
              />
            </div>
          )}
          <span className="block truncate pl-[6%]">{selected.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center pr-2">
            <img
              src="/images/down-arrow.svg"
              className="h-5 w-5 text-[#4E5559]"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-[#8d9ab6b0] text-[#2952A8]' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#2952A8]">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
