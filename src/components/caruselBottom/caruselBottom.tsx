const CaruselBottom = () => {
	return (
		<div className='container hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 h-[60px] dark:text-gray-200'>
			{items.map((item, index) => (
				<div
					key={index}
					className='w-full flex justify-center items-center gap-3 rounded-lg border border-transparent dark:border-transparent 
						hover:bg-gray-200 hover:border-gray-300 
						dark:hover:bg-gray-800 dark:hover:border-gray-600 duration-300 transition-colors'
				>
					<img src={item.img} alt='' className='h-[40px]' />
					<p className='text-sm'>{item.label}</p>
				</div>
			))}
		</div>
	)
}

const items = [
	{
		img: 'https://static.uzum.uz/static/promo_images/756b6f56-9d2d-414c-a9d3-37d40d1c808b',
		label: 'Onalar va Bolalar uchun',
	},
	{
		img: 'https://static.uzum.uz/static/promo_images/a266cae1-db3a-4b40-a984-cf9220d9b2e8',
		label: 'Arzon narxlar kafolati',
	},
	{
		img: 'https://static.uzum.uz/static/promo_images/66eaead4-ce8b-45b2-8691-592ced656ccf',
		label: 'Zamonaviy Bozor',
	},
	{
		img: 'https://static.uzum.uz/static/promo_images/a98e3eef-162f-47b1-b8d8-f6253393bd95',
		label: 'Hafta tovarlari',
	},
]

export default CaruselBottom
