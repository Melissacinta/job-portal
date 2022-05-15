/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export default function ConsentModal({ open, setOpen }) {
  const continueButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={continueButtonRef}
        onClose={setOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="mx-auto flex  min-h-[screen] max-w-[490px] items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
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
                <Dialog.Panel className="relative inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-12 sm:align-middle">
                  <div>
                    <div className="text-center">
                      <Dialog.Title
                        as="h3"
                        className="mb-6 text-2xl font-medium leading-6 text-black"
                      >
                        Hey, Welcome to Jobberman
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm font-normal text-[#1F2020]">
                          continue setting up your profile
                          <br /> and get started and get personalized with our
                          features
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-7 sm:flex sm:justify-between sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex h-[45px] w-full max-w-[167px] items-center justify-center rounded-[10px] border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={continueButtonRef}
                    >
                      Continue
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex h-[45px] w-full max-w-[167px] items-center justify-center rounded-[10px] border border-gray-300 bg-[#F5F5F5] px-4 py-2 text-base font-medium text-[#4E5559] shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:mt-0 sm:text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Not now
                    </button>
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
