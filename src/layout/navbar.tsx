import { BiSolidCategory } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa6'
import { RiShoppingBag4Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='pt-4 pb-2 xl:block hidden'>
			<div className='container h-[45px] flex justify-between items-center'>
				<Link to={'/'} className='h-[80%]'>
					<img
						src='https://vectorseek.com/wp-content/uploads/2024/04/Uzum-Market-Logo-Vector.svg-.png'
						alt=''
						className='h-[100%]'
					/>
				</Link>
				<button className='bg-purple-200 px-4 h-[40px] flex gap-2 items-center hover:bg-purple-300 duration-300 text-purple rounded-md'>
					<BiSolidCategory />
					<span>Katolog</span>
				</button>
				<div className='w-[551px] overflow-hidden h-[40px] border border-gray-500 rounded-md pl-3 flex justify-between items-center'>
					<input
						type='search'
						name=''
						id=''
						className='w-[450px] h-full border-none overflow-hidden outline-none placeholder:text-gray-600'
						placeholder='Mahsulotlar va turkumlarni ishlash'
					/>
					<div className='w-[85px] h-full flex justify-center items-center'>
						<CiSearch className='text-[20px]' />
					</div>
				</div>
				<button className='dark:text-gray-500 border-gray-400 border px-4 h-[40px] flex gap-2 items-center hover:bg-gray-300 duration-300  rounded-md'>
					<FaRegUser />
					Kirish
				</button>
				<button className='dark:text-gray-500 border-gray-400 border px-4 h-[40px] flex gap-2 items-center hover:bg-gray-300 duration-300  rounded-md'>
					<FaRegHeart />
					Saralanagan
				</button>
				<button className='dark:text-gray-500 border-gray-400 border px-4 h-[40px] flex gap-2 items-center hover:bg-gray-300 duration-300  rounded-md'>
					<RiShoppingBag4Line />
					Savat
				</button>
			</div>
		</div>
	)
}

export default Navbar
