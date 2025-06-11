import { Carousel } from 'antd'

const Caruosel = () => {
	const images = [
		'https://images.uzum.uz/d0rgf8b3uvph50a08blg/main_page_banner.jpg',
		'https://images.uzum.uz/d0ve5127s4fq7e8tv9g0/main_page_banner.jpg',
		'https://images.uzum.uz/d0e9nfgn274j5sclsod0/main_page_banner.jpg',
		'https://images.uzum.uz/d103npgn274lpu385h40/main_page_banner.jpg',
		'https://images.uzum.uz/d0qmat0n274j5scojvh0/main_page_banner.jpg',
		'https://images.uzum.uz/d0qmdir3uvph50a0151g/main_page_banner.jpg',
		'https://images.uzum.uz/d0qmevi7s4fo7mqb3hp0/main_page_banner.jpg',
		'https://images.uzum.uz/d0qmkcon274j5scok310/main_page_banner.jpg',
		'https://images.uzum.uz/d0vt8f8n274lpu3832hg/main_page_banner.jpg',
	]

	return (
		<div className='py-5'>
			<div className='container rounded-xl overflow-hidden'>
				<Carousel arrows infinite={true} autoplay autoplaySpeed={2000}>
					{images.map((src, idx) => (
						<div key={idx}>
							<img
								src={src}
								alt={`banner-${idx}`}
								className='w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[415px] object-cover'
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default Caruosel
