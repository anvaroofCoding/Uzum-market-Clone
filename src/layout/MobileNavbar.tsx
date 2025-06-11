import { FaHome, FaRegHeart, FaRegUser } from 'react-icons/fa'
import { RiShoppingBagLine } from 'react-icons/ri'
import { TbClipboardSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
	return (
		<div className='xl:hidden w-full block bg-white'>
			<div
				className='flex px-5 z-100 justify-between bg-white items-center border-t border-gray-300 h-[60px] w-full
			 fixed bottom-0 text-gray-600 '
			>
				<Link to={'/'}>
					<span className=' h-full  flex flex-col items-center justify-center text-[14px]'>
						<FaHome className='text-[20px]' />
						<span>Bosh sahifa</span>
					</span>
				</Link>
				<Link to={'/'}>
					<span className=' h-full  flex flex-col items-center justify-center text-[14px]'>
						<TbClipboardSearch className='text-[20px]' />
						<span>Katalog</span>
					</span>
				</Link>
				<Link to={'/'}>
					<span className=' h-full  flex flex-col items-center justify-center text-[14px]'>
						<RiShoppingBagLine className='text-[20px]' />
						<span>Savat</span>
					</span>
				</Link>
				<Link to={'/'}>
					<span className=' h-full  flex flex-col items-center justify-center text-[14px]'>
						<FaRegHeart className='text-[20px]' />
						<span>Saralangan</span>
					</span>
				</Link>
				<Link to={'/'}>
					<span className='h-full  flex flex-col items-center justify-center text-[14px]'>
						<FaRegUser className='text-[20px]' />
						<span>Kabinet</span>
					</span>
				</Link>
			</div>
		</div>
	)
}

export default MobileNavbar
