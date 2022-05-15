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

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    router.push('/signup')
  }, [])
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default Home
