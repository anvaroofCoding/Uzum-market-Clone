import { CiFacebook } from 'react-icons/ci'
import {
	FaApple,
	FaGooglePlay,
	FaInstagram,
	FaTelegramPlane,
	FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div>
			<div className='container h-[200px] roboto'>
				<div className='w-full h-[80%] flex justify-between items-start pt-15'>
					<ul className='flex flex-col items-start gap-1'>
						<li className='font-bold text-[14px]'>Biz haqimizda</li>
						<li className='text-[12px]'>Topshirish punktlari</li>
						<li className='text-[12px]'>Vakansiyalar</li>
					</ul>
					<ul className='flex flex-col items-start gap-1'>
						<li className='font-bold text-[14px]'>Foydalanuvchilarga</li>
						<li className='text-[12px]'>Biz bilan bog'lanish</li>
						<li className='text-[12px]'>Savol-javob</li>
					</ul>
					<ul className='flex flex-col items-start gap-1'>
						<li className='font-bold text-[14px]'>Tadbirkorlarga</li>
						<li className='text-[12px]'>Uzumda sotish</li>
						<li className='text-[12px]'>Sotuv-kabinetiga kirish</li>
						<li className='text-[12px]'>Topshirish punktini ochish</li>
					</ul>
					<ul className='flex flex-col items-start gap-1'>
						<li className='font-bold text-[14px]'>Ilovani yuklab olish</li>
						<li className='flex gap-10'>
							<div className='flex items-center gap-[7px] text-[14px]'>
								<FaApple />
								AppStore
							</div>
							<div className='flex items-center gap-[7px] text-[14px]'>
								<FaGooglePlay />
								<span>Google Play</span>
							</div>
						</li>
						<li className='font-bold  mt-8 text-[14px]'>Ijtimoiy tarmoqlar</li>
						<li className='text-[20px] flex justify-center items-center gap-2'>
							<FaInstagram />
							<FaTelegramPlane />
							<CiFacebook />
							<FaYoutube />
						</li>
					</ul>
				</div>
			</div>
			<div className='w-full h-[80px] '>
				<div className='h-full container flex justify-between items-center'>
					<div className='flex gap-4'>
						<span>Maxfiylik kelishuvi </span>
						<span>Foydalanuvchi kelishuvi</span>
					</div>
					<p className='text-[12px] text-gray-500'>
						«2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
						himoyalangan»
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
