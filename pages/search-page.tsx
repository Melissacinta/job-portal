import { PlusIcon } from '@heroicons/react/solid'
import ConsentModal from 'components/modals/ConsentModal'
import ProfileModal from 'components/modals/ProfileModal'
import Cta from 'components/searchPage/Cta'
import FilterComponent from 'components/searchPage/FilterComponent'
import Footer from 'components/searchPage/Footer'
import Header from 'components/searchPage/Header'
import JobFunctions from 'components/searchPage/JobFunctions'
import SearchAlert from 'components/searchPage/SearchAlert'
import SearchBar from 'components/searchPage/SearchBar'
import SearchResults from 'components/searchPage/SearchResults'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SearchPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const [openProfile, setOpenProfile] = useState(false)
  useEffect(() => {
    setOpen(true)
  }, [])
  return (
    <>
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.1/css/font-awesome.css"
        ></link>
      </Head>

      <Header />
      <main className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 py-[1.875rem] sm:px-0 md:justify-start ">
          <SearchBar />
          <div className="mt-[0.9375rem] items-start justify-between gap-8 sm:flex">
            <FilterComponent />
            <SearchResults />
            <aside className="h-full w-full space-y-6 rounded-[0.9375rem] pt-7 sm:max-w-[18.8125rem] sm:pt-0">
              <SearchAlert />
              <Cta />
              <JobFunctions />
            </aside>
          </div>
        </div>
      </main>
      <Footer />

      <ConsentModal
        open={open}
        setOpen={setOpen}
        setOpenProfile={setOpenProfile}
      />
      <ProfileModal open={openProfile} setOpen={setOpenProfile} />
    </>
  )
}

export default SearchPage
