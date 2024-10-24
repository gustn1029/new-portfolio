import Footer from '../footer/Footer'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default RootLayout