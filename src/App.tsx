import { Outlet } from 'react-router-dom'
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
		</div>
	)
}

export default App
