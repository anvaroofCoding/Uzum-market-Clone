import { Button, Modal, Space } from 'antd'
import { useState } from 'react'
import { MdLocationPin } from 'react-icons/md'
import { LanguageSelector } from '../i18n/langToggle'
import Switch from '../mod/dark'

const TopNavbar = () => {
	const [open, setOpen] = useState(false)

	const showModal = () => {
		setOpen(true)
	}
	const handleOk = () => {
		setOpen(false)
	}

	const handleCancel = () => {
		setOpen(false)
	}
	return (
		<div className='bg-gray-100 dark:bg-gray-800 xl:block hidden '>
			<div className='container text-[14px] h-[40px] xl:flex hidden justify-between items-center'>
				<div className='flex gap-[20px] items-center'>
					<span className='flex justify-center gap-0 items-center'>
						<Space>
							<Button variant='link' color='purple' onClick={showModal}>
								<MdLocationPin className='text-purple text-[20px]' />
								Topshirish Punktlari
							</Button>
						</Space>
						<Modal
							open={open}
							title='Title'
							onOk={handleOk}
							onCancel={handleCancel}
							footer={() => (
								<>
									<Button
										style={{
											backgroundColor: '#7000FF',
											color: '#fff',
											borderColor: '#7000FF',
										}}
										onClick={() => console.log('Custom pressed')}
									>
										Custom Button
									</Button>

									<Button
										onClick={handleCancel}
										style={{
											backgroundColor: '#7000FF',
											color: '#fff',
											borderColor: '#7000FF',
										}}
									>
										Cancel
									</Button>

									<Button
										type='primary'
										onClick={handleOk}
										style={{
											backgroundColor: '#7000FF',
											color: '#fff',
											borderColor: '#7000FF',
										}}
									>
										OK
									</Button>
								</>
							)}
						>
							<p>Topshirish Punktlari</p>
						</Modal>
					</span>
					<span className='text-black dark:text-white'>
						Topshirish Punklari
					</span>
				</div>
				<ul className='flex gap-[20px] items-center cursor-pointer'>
					<li className='text-purple border-r border-black/40 dark:border-white/40 pr-5'>
						Sotuv Bo'limi
					</li>
					<li className='text-purple '>Topshirish punktini ochish</li>
					<li className='text-black dark:text-white'>Savol-javob</li>
					<li className='text-black dark:text-white'>Buyurtmalarim</li>
					<li className=' '>
						<LanguageSelector />
					</li>

					<li>
						<Switch />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TopNavbar
