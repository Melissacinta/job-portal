import Icon from '@mdi/react'

import {
  mdiAccount,
  mdiFacebook,
  mdiInstagram,
  mdiLinkedin,
  mdiTwitter,
} from '@mdi/js'

const Footer = () => {
  return (
    <footer className="bg-[#010101] text-white">
      <div className="mx-auto max-w-7xl items-start  justify-between px-4 py-12 sm:flex sm:flex-row sm:px-6 md:justify-start md:space-x-10 lg:px-8">
        <div className="flex w-full flex-col gap-12 sm:w-1/3 sm:gap-[7.3125rem]">
          <div className="flex-1 cursor-pointer">
            <img src="/images/light-logo.svg" alt="" />
          </div>
          <div className="mt-auto flex flex-1 flex-col gap-8">
            <div className="flex items-center gap-[1.875rem]">
              <div className="cursor-pointer hover:text-blue-700">
                <Icon path={mdiTwitter} size={'22px'} />
              </div>
              <div className="cursor-pointer hover:text-blue-700">
                <Icon path={mdiInstagram} size={'22px'} />
              </div>
              <div className="cursor-pointer hover:text-blue-700">
                <Icon path={mdiLinkedin} size={'22px'} />
              </div>
              <div className="cursor-pointer hover:text-blue-700">
                <Icon path={mdiFacebook} size={'22px'} />
              </div>
            </div>
            <div className="flex items-center gap-[0.8975rem]">
              <img
                src="/images/googlestore.svg"
                className="h-11 w-auto cursor-pointer"
              />
              <img
                src="/images/appstore.svg"
                className="h-11 w-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between sm:w-2/3 sm:flex-row">
          {Object.keys(footerLinks).map((title) => (
            <div
              key={title}
              className="mt-[1.87rem]  flex w-full flex-col gap-[1.875rem]  sm:mt-0 sm:w-1/3"
            >
              <h3 className="text-2xl font-medium ">{title}</h3>
              <nav className="flex flex-1 flex-col gap-5">
                {footerLinks[title].map((item) => (
                  <a
                    href="#"
                    className="hover:text-blue-700 focus:outline-none"
                    key={item.name}
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-lg font-medium ">{item.name}</p>
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <p className=" px-4 pb-12 text-center text-lg font-normal text-[#979797]">
        Jobberman 2021. All rights reserved.
      </p>
    </footer>
  )
}
const footerLinks = {
  About: [
    { name: 'Home' },
    { name: 'About Jobberman' },
    { name: 'Contact us/ Help Center' },
    { name: 'Privacy & Policies' },
    { name: 'Terms of Use' },
  ],
  Companies: [
    { name: 'Post a job' },
    { name: 'Job FAQs' },
    { name: 'Talents' },
  ],
  Candidates: [
    { name: 'My Accounts' },
    { name: 'Job Alerts' },
    { name: 'Applied jobs' },
  ],
}
export default Footer
