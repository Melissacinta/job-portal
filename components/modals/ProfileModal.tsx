/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import {
  mdiAccount,
  mdiCity,
  mdiEmail,
  mdiLock,
  mdiMapMarker,
  mdiSchool,
} from '@mdi/js'
import Icon from '@mdi/react'
import { states } from '../../utils/stateData'
import Select from 'components/Select'
import { PlusIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileModal({ open, setOpen }) {
  const continueButtonRef = useRef(null)
  const [activeField, setActiveField] = useState('')
  const [activeDot, setActiveDot] = useState('one')
  const onChange = (state) => {
    console.log(state)
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        initialFocus={continueButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center px-4 pt-4 pb-20 text-center  sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[#010101bf] transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="mx-auto flex  max-w-[50rem] items-end justify-center px-4 pt-4 pb-20 text-center  sm:block sm:p-0">
              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className=" relative inline-block max-h-[90vh] transform overflow-scroll rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 sm:my-8 sm:w-full sm:p-[6rem] sm:align-middle">
                  <div className="">
                    <div className="border-b pb-6">
                      <Dialog.Title
                        as="h3"
                        className="mb-6 text-2xl font-medium leading-6 text-[#2952A8]"
                      >
                        Better market your expertise with
                        <br /> specialized profiles
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm font-normal text-[#1F2020]">
                          Specialized profiles allow you to display more
                          specific skills, deliverables, and more – and help
                          power better search results and job recommendations.
                        </p>
                      </div>
                    </div>
                    <div className="mt-[10px] flex items-center justify-end">
                      <div
                        onClick={() => setActiveDot('one')}
                        className={classNames(
                          activeDot === 'one'
                            ? 'h-[11px] w-[11px]'
                            : 'h-[9px] w-[9px]',
                          'mr-2 flex items-center justify-center rounded-full bg-[#A5B4D6]'
                        )}
                      >
                        <div
                          className={classNames(
                            activeDot === 'one'
                              ? 'h-[7px] w-[7px] bg-[#2952A8]'
                              : 'bg-transparent',
                            'rounded-full'
                          )}
                        ></div>
                      </div>

                      <div
                        onClick={() => setActiveDot('two')}
                        className={classNames(
                          activeDot === 'two'
                            ? 'h-[11px] w-[11px]'
                            : 'h-[9px] w-[9px]',
                          'mr-[6px] flex items-center justify-center rounded-full bg-[#A5B4D6]'
                        )}
                      >
                        <div
                          className={classNames(
                            activeDot === 'two'
                              ? 'h-[7px] w-[7px] bg-[#2952A8]'
                              : 'bg-transparent',
                            'rounded-full '
                          )}
                        ></div>
                      </div>

                      <div
                        onClick={() => setActiveDot('three')}
                        className={classNames(
                          activeDot === 'three'
                            ? 'h-[11px] w-[11px]'
                            : 'h-[9px] w-[9px]',
                          'flex items-center justify-center rounded-full bg-[#A5B4D6]'
                        )}
                      >
                        <div
                          className={classNames(
                            activeDot === 'three'
                              ? 'h-[7px] w-[7px] bg-[#2952A8]'
                              : 'bg-transparent',
                            'rounded-full '
                          )}
                        ></div>
                      </div>
                    </div>
                    <div className="sm:mx-auto sm:w-11/12">
                      <div className="mt-5 space-y-6">
                        <h4 className="text-lg font-medium text-[#4E5559]">
                          Personal Information
                        </h4>

                        <div onClick={() => setActiveField('fullname')}>
                          <div className="relative mt-1">
                            <div className="absolute top-[50%] left-[4%] -translate-y-1/2 hover:cursor-pointer hover:opacity-80">
                              <Icon
                                path={mdiAccount}
                                size={'15px'}
                                color={
                                  activeField === 'fullname'
                                    ? '#2952A8'
                                    : '#4E5559'
                                }
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
                                activeField === 'fullname'
                                  ? 'border-2 border-[#2952A8] text-[#4E5559]'
                                  : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                                'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[9%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:pl-[8%] sm:text-lg'
                              )}
                            />
                          </div>
                        </div>

                        <div onClick={() => setActiveField('phoneNumber')}>
                          <div className="relative mt-1">
                            <div className="absolute top-[50%] left-[4%] -translate-y-1/2 border-r-2 border-gray-600 pr-2">
                              <small
                                className={classNames(
                                  activeField === 'phoneNumber'
                                    ? 'text-[#2952A8]'
                                    : 'text-[#4E5559]',
                                  'text-lg font-normal'
                                )}
                              >
                                +234
                              </small>
                            </div>
                            <input
                              id="phoneNumber"
                              name="phoneNumber"
                              type="tel"
                              placeholder="Phone Number"
                              autoComplete="phoneNumber"
                              required
                              className={classNames(
                                activeField === 'phoneNumber'
                                  ? 'border-2 border-[#2952A8] text-[#4E5559]'
                                  : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                                'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[18%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:pl-[15%] sm:text-lg'
                              )}
                            />
                          </div>
                        </div>

                        <div onClick={() => setActiveField('select')}>
                          <Select
                            options={states}
                            icon={mdiMapMarker}
                            activeField={activeField}
                          />
                        </div>
                      </div>
                      <div className="mt-5 space-y-6">
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium text-[#4E5559]">
                            Education
                          </h4>
                          <button className="flex items-center gap-2 rounded-[0.625rem] bg-[#E6ECFB] px-[1.75rem] py-[0.8125rem] text-base font-normal text-[#010101]">
                            <span>
                              <PlusIcon className=" h-3 w-4" />
                            </span>
                            Add Education
                          </button>
                        </div>
                        <div onClick={() => setActiveField('degree')}>
                          <div className="relative mt-1">
                            <div className="absolute top-[50%] left-[4%] -translate-y-1/2 hover:cursor-pointer hover:opacity-80">
                              <Icon
                                path={mdiSchool}
                                size={'15px'}
                                color={
                                  activeField === 'degree'
                                    ? '#2952A8'
                                    : '#4E5559'
                                }
                              />
                            </div>
                            <input
                              id="degree"
                              name="degree"
                              type="text"
                              placeholder="Degree (BSC)"
                              autoComplete="degree"
                              required
                              className={classNames(
                                activeField === 'degree'
                                  ? 'border-2 border-[#2952A8] text-[#4E5559]'
                                  : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                                'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[9%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:pl-[8%] sm:text-lg'
                              )}
                            />
                          </div>
                        </div>

                        <div onClick={() => setActiveField('school')}>
                          <div className="relative mt-1">
                            <div className="absolute top-[50%] left-[4%] -translate-y-1/2 hover:cursor-pointer hover:opacity-80">
                              <Icon
                                path={mdiCity}
                                size={'15px'}
                                color={
                                  activeField === 'school'
                                    ? '#2952A8'
                                    : '#4E5559'
                                }
                              />
                            </div>
                            <input
                              id="school"
                              name="school"
                              type="text"
                              placeholder="School (University/Insitutions)"
                              autoComplete="school"
                              required
                              className={classNames(
                                activeField === 'school'
                                  ? 'border-2 border-[#2952A8] text-[#4E5559]'
                                  : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                                'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[9%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:pl-[8%] sm:text-lg'
                              )}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-14 sm:mt-20 sm:flex sm:flex-row-reverse sm:gap-[30px]">
                        <button
                          type="button"
                          className="inline-flex h-[45px] w-full items-center justify-center rounded-[10px] border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:max-w-[167px] sm:text-sm"
                          onClick={() => setOpen(false)}
                          ref={continueButtonRef}
                        >
                          Next
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex h-[45px] w-full items-center justify-center rounded-[10px] border border-gray-300 bg-[#F5F5F5] px-4 py-2 text-base font-medium text-[#4E5559] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:mt-0 sm:max-w-[167px] sm:text-sm"
                          onClick={() => setOpen(false)}
                        >
                          Skip for now
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
