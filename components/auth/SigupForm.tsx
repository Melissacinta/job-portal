import { mdiAccount, mdiEmail, mdiLock } from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AuthLayout from './AuthLayout'

const formFields = [
  {
    type: 'email',
    placeholder: 'Enter email',
    label: 'Email',
    icon: mdiEmail,
    name: 'email',
    required: true,
  },
  {
    type: 'text',
    placeholder: 'Enter first name',
    name: 'fullname',
    icon: mdiAccount,
    required: true,
  },
  {
    type: 'password',
    placeholder: 'Password',
    label: 'Password',
    icon: mdiLock,
    name: 'password',
    required: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SignupForm() {
  const router = useRouter()
  const [activeField, setActiveField] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/search-page')
  }
  return (
    <AuthLayout>
      <div className="rounded-[20px] bg-white px-16 sm:mx-auto sm:w-full sm:max-w-[610px]">
        <div>
          <h2 className="mt-6 text-2xl font-medium text-[#4E5559]">
            Please fill this form
          </h2>
        </div>
        <div className="pt-6 pb-12">
          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            {formFields.map((field) => (
              <div key={field.name} onClick={() => setActiveField(field.name)}>
                <div className="relative mt-1">
                  {field.icon && (
                    <div className="absolute top-1/3 left-[6%] hover:cursor-pointer hover:opacity-80">
                      <Icon
                        path={field.icon}
                        size={'15px'}
                        color={
                          activeField === field.name ? '#2952A8' : '#4E5559'
                        }
                      />
                    </div>
                  )}
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    autoComplete={field.name}
                    required={field.required}
                    className={classNames(
                      activeField === field.name
                        ? 'border-2 border-[#2952A8] text-[#4E5559]'
                        : 'border-transparent bg-[#EDEDED] text-[#979797] hover:border-gray-300 hover:text-gray-700',
                      'block h-[55px] w-full appearance-none rounded-lg py-2 pl-[11%] placeholder-[#979797] shadow-sm focus:border-[#2952A8] focus:outline-none focus:ring-[#2952A8] sm:text-lg'
                    )}
                  />
                </div>
              </div>
            ))}

            <div className="space-y-7 pt-16 text-center">
              <button
                type="submit"
                className="flex h-[55px] w-full items-center justify-center rounded-lg border-2 border-transparent bg-[#4168C5] py-2 px-4 text-lg font-medium text-white shadow-sm hover:border-[#4E5559] hover:bg-white hover:text-[#010101] focus:outline-none focus:ring-2 focus:ring-[#4168C5] focus:ring-offset-2"
              >
                Continue
              </button>

              <p className="text-lg font-medium text-[#4E5559]">or</p>

              <button
                type="submit"
                className="flex h-[55px] w-full items-center justify-center rounded-lg border-2 border-[#4E5559] bg-white py-2 px-4 text-lg font-medium text-[#010101] shadow-sm hover:bg-[#4168C5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#4168C5] focus:ring-offset-2"
              >
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}
