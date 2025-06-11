import { Image, Spin } from 'antd'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import type { Productss } from '../../products/Products'
import FavoriteButton from '../btn/FavoriteButton'

const Elements = () => {
	const { id } = useParams<{ id: string }>()
	const [data, setData] = useState<Productss | null>(null)
	const [nasi, setNasi] = useState<number>(
		Math.round(((1 * 1.75) / 24) * 13000)
	)
	const [oy, Setoy] = useState(24)

	const getProductsId = async () => {
		try {
			const res = await fetch(`https://dummyjson.com/products/${id}`)
			const productData: Productss = await res.json()
			setData(productData)
		} catch (error) {
			console.error('Xatolik:', error)
		}
	}

	const formatDateUz = (isoString: string): string => {
		const date = new Date(isoString)
		const oylar = [
			'yanvar',
			'fevral',
			'mart',
			'aprel',
			'may',
			'iyun',
			'iyul',
			'avgust',
			'sentabr',
			'oktabr',
			'noyabr',
			'dekabr',
		]
		return `${date.getDate()}-${oylar[date.getMonth()]}`
	}

	useEffect(() => {
		if (id) getProductsId()
	}, [id])

	if (!data) {
		return (
			<div className='flex justify-center items-center min-h-screen dark:bg-gray-900'>
				<Spin size='large' tip='Yuklanmoqda...' />
			</div>
		)
	}

	const nasiya = (item: number, dase: number) => {
		const kurs = 13000
		if (item === 24) setNasi(Math.round((dase * 1.75) / 24) * kurs)
		if (item === 12) setNasi(Math.round((dase * 1.45) / 12) * kurs)
		if (item === 6) setNasi(Math.round((dase * 1.25) / 9) * kurs)
		if (item === 3) setNasi(Math.round((dase * 1.15) / 3) * kurs)
		Setoy(item)
	}

	return (
		<div className='py-5 roboto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<div className='container min-h-[800px] grid grid-cols-1 lg:grid-cols-4 gap-5'>
				<div className='lg:col-span-3 flex flex-col gap-10'>
					<div>
						<h2 className='text-[24px] font-[400] mb-1'>{data.title}</h2>
						<div className='flex flex-wrap items-center gap-3 text-amber-400'>
							{[...Array(Math.round(data.rating))].map((_, i) => (
								<FaStar key={i} />
							))}
							<div className='text-sm text-gray-600 dark:text-gray-300'>
								{data.rating} ({data.stock} sharh) + 120 fotosurat + 33,000 ta
								buyurtma
							</div>
						</div>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
						<Image
							src={data.thumbnail}
							height={450}
							className='w-full object-cover rounded-md'
						/>
						<Image
							src={data.thumbnail}
							height={450}
							className='w-full object-cover rounded-md'
						/>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						{data.reviews?.map((item, index) => (
							<div
								key={index}
								className='p-4 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded-xl'
							>
								<div className='flex justify-between items-center mb-2'>
									<div>
										<h3 className='font-semibold'>{item.reviewerName}</h3>
										<p className='text-sm text-gray-500'>
											{formatDateUz(item.date)}
										</p>
									</div>
									<div className='flex gap-1 text-amber-400'>
										{[...Array(Math.round(item.rating || 5))].map((_, i) => (
											<FaStar key={i} />
										))}
									</div>
								</div>
								<p className='text-sm'>Comment: {item.comment}</p>
							</div>
						))}
					</div>
				</div>

				<div className='lg:col-span-1 h-full'>
					<div className='w-full h-auto p-5 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-2xl'>
						<div className='flex flex-col gap-3'>
							<h3 className='text-purple-600 dark:text-purple-400 text-sm font-semibold'>
								Uzum kartasi bilan to'lov amalga oshirilganda:
							</h3>
							<h3 className='text-purple-600 dark:text-purple-400 font-bold flex items-center text-lg'>
								{Math.floor((data.price / 1.52) * 13000).toLocaleString(
									'uz-UZ'
								)}{' '}
								so'm
								<sup className='bg-purple-600 text-white text-xs ml-3 px-2 py-1 rounded-md'>
									-52%
								</sup>
							</h3>
							<div className='text-sm text-gray-500'>
								<p>Boshqa usulda to'lansa:</p>
								<del>{data.price} $</del>
								<del>{(data.price * 13000).toLocaleString('uz-UZ')} So'm</del>
							</div>

							<div className='flex items-center gap-2 mt-3'>
								<img
									src='https://static.uzum.uz/nasiya/pdp_tarif.png'
									alt=''
									width={16}
								/>
								<h2 className='text-xs font-light'>
									Siz uchun 25% arzonroq • 12 oy
								</h2>
							</div>

							<div className='grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm'>
								{[24, 12, 6, 3].map(option => (
									<button
										key={option}
										onClick={() => nasiya(option, data.price)}
										className='w-full h-[32px] bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md'
									>
										{option} oy
									</button>
								))}
							</div>

							<div className='flex items-center gap-2 mt-2 text-base font-medium'>
								<mark className='bg-transparent text-purple-700 dark:text-purple-400'>
									{Number(nasi).toLocaleString('uz-UZ')} so‘m
								</mark>
								<span className='text-gray-500'>x</span>
								<p className='text-gray-800 dark:text-gray-200'>
									{oy.toLocaleString('uz-UZ')} oy
								</p>
							</div>

							<div className='w-full flex flex-col gap-2 mt-4'>
								<div className='flex gap-2'>
									<button className='h-[40px] w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md'>
										1 klikda xarid qiling
									</button>
									<FavoriteButton />
								</div>
								<button className='h-[40px] w-full bg-purple-600 hover:bg-purple-700 text-white rounded-md'>
									Savatchaga qo'shish
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Elements
