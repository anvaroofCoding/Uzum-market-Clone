import { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { MdAddShoppingCart, MdOutlineStarPurple500 } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedProduct } from '../features/counter/counterSlice'

export interface Productss {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	availabilityStatus: string
	minimumOrderQuantity: number
	shippingInformation: string
	returnPolicy: string
	warrantyInformation: string
	sku: string
	weight: number
	dimensions: {
		width: number
		height: number
		depth: number
	}
	thumbnail: string
	images: string[]
	tags: string[]
	reviews: {
		[key: string]: any
	}[]
	meta: {
		createdAt: string
		updatedAt: string
		barcode: string
		qrCode: string
	}
}
const Products = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [prod, setProd] = useState<Productss[]>([])
	const [skip, setSkip] = useState(-1)
	const limit = 20

	const getProducts = async () => {
		const res = await fetch(
			`https://dummyjson.com/products?limit=${limit}&skip=${skip}`
		)
		const data = await res.json()
		setProd(prev => [...prev, ...data.products])
	}

	const handleLoadMore = () => {
		setSkip(prev => prev + limit)
	}
	const handeId = async (item: number) => {
		console.log(item)
		dispatch(setSelectedProduct(item))
		navigate(`/product-details/${item}`)
	}

	useEffect(() => {
		getProducts()
	}, [skip])

	return (
		<div className='py-1 pt-5 roboto bg-white dark:bg-gray-900 transition-colors duration-300'>
			<div className='container min-h-[1000px]'>
				<h2 className='text-[28px] font-bold flex items-center gap-2 text-gray-900 dark:text-white cursor-pointer'>
					<span>Mashhur</span>
					<FaAngleRight />
				</h2>

				<div className='w-full mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
					{prod.map((item, index) => (
						<div
							key={index}
							onClick={() => handeId(item.id)}
							className='h-[470px] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow hover:shadow-lg transition p-3'
						>
							<div>
								<img
									src={item.thumbnail}
									alt={item.title}
									className='w-full h-[309px] object-cover'
								/>
							</div>
							<div className='p-3 flex flex-col items-start gap-1 text-gray-800 dark:text-gray-100'>
								<p className='text-[12.8px] font-medium'>
									{item.title.length > 30
										? item.title.slice(0, 30) + '...'
										: item.title}
								</p>
								<p className='flex items-center gap-3 text-[11.2px] text-gray-600 dark:text-gray-300'>
									<MdOutlineStarPurple500 className='text-yellow-500' />
									<span>
										{item.rating} ({item.stock} sharh)
									</span>
								</p>
								<mark className='text-[12px] bg-transparent text-purple-600 dark:text-purple-400'>
									{Math.round((item.price * 1.44) / 12)} $/Oyiga
								</mark>
								<div className='w-full mt-4 flex items-center justify-between text-[#FF4DA8] dark:text-pink-400'>
									<div>
										<p className='text-[12px]'>Arzon narxlar kafolati</p>
										<p className='text-[14px]'>{item.price} $</p>
									</div>
									<div className='w-[32px] h-[32px] rounded-full border border-gray-400 dark:border-gray-300 flex justify-center items-center'>
										<MdAddShoppingCart className='text-black dark:text-white' />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center py-5'>
					<button
						onClick={handleLoadMore}
						className='mt-4 px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 transition'
					>
						Yana ko‘proq
					</button>
				</div>
			</div>
		</div>
	)
}

export default Products
