import { useEffect, useState } from 'react'

const NavbarBottom = () => {
	const [navItems, setnavItems] = useState()
	const getCategoryList = async () => {
		const res = await fetch('https://dummyjson.com/products/category-list')
		const data = await res.json()
		console.log(data)
		setnavItems(data)
	}
	useEffect(() => {
		getCategoryList()
	}, [])
	return (
		<div className='hidden container xl:flex items-center w-full pt-2 dark:bg-gray-900 '>
			{/* Hafta tovarlari belgisi */}
			<div className='flex items-center gap-2'>
				<img
					src='https://static.uzum.uz/fast_categories/Topsales.png'
					alt='icon'
					className='w-6 h-6'
				/>
				<span className='font-semibold text-black dark:text-white'>
					Hafta tovarlari
				</span>
			</div>
			{/* Nav menyular */}
			<nav className='flex flex-1 justify-evenly text-gray-600 dark:text-gray-300 text-sm font-medium '>
				{navItems?.slice(0, 11).map((item: number, index: number) => (
					<span
						key={index}
						className='relative cursor-pointer transition-colors duration-300 hover:text-black dark:hover:text-white group capitalize'
					>
						{item}
						<span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full'></span>
					</span>
				))}
			</nav>
		</div>
	)
}

export default NavbarBottom
