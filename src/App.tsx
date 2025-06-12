import { Outlet } from 'react-router-dom'
import Footer from './layout/footer'
import MobileNavbar from './layout/MobileNavbar'
import Navbar from './layout/navbar'
import NavbarBottom from './layout/navbarBottom'
import TopNavbar from './layout/topNavbar'

function App() {
	return (
		<div>
			<MobileNavbar />
			<TopNavbar />
			<Navbar />
			<NavbarBottom />
			<Outlet />
			<Footer />
		</div>
	)
}

export default App
