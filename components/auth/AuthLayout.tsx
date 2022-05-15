import Footer from './Footer'
import Header from './Header'

type Props = {
  children: JSX.Element
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#FAFAFA]">
      <Header />
      <main className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
