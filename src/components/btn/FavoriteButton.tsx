import { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa'

const FavoriteButton = () => {
	const [liked, setLiked] = useState(false)

	// Sahifa yuklanganda localStorage'dan holatni olish
	useEffect(() => {
		const saved = localStorage.getItem('liked')
		if (saved === 'true') {
			setLiked(true)
		}
	}, [])

	// Har safar o‘zgarganda localStorage'ga yozish
	useEffect(() => {
		localStorage.setItem('liked', liked.toString())
	}, [liked])

	// Tugmani bosganda holatni almashtirish
	const toggleLike = () => {
		setLiked(prev => !prev)
	}

	return (
		<button
			onClick={toggleLike}
			className='h-[40px] flex justify-center items-center w-[25%] bg-gray-200 hover:bg-gray-300 rounded-md'
		>
			<FaHeart
				className={`text-[20px] transition duration-300 ${
					liked ? 'text-red-500' : 'text-black'
				}`}
			/>
		</button>
	)
}

export default FavoriteButton
