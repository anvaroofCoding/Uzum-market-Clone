import { useTranslation } from 'react-i18next'
import Select from 'react-select'

const languages = [
	{ value: 'uz', label: 'O‘zbekcha', icon: '🇺🇿' },
	{ value: 'ru', label: 'Русский', icon: '🇷🇺' },
	{ value: 'en', label: 'English', icon: '🇬🇧' },
	{ value: 'fr', label: 'Français', icon: '🇫🇷' },
	{ value: 'ar', label: 'العربية', icon: '🇸🇦' },
	{ value: 'kz', label: 'Қазақша', icon: '🇰🇿' },
]

const customStyles = {
	control: (base: any) => ({
		...base,
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		cursor: 'pointer',
		padding: 0,
		minHeight: 'unset',
	}),
	valueContainer: (base: any) => ({
		...base,
		padding: 0,
	}),
	indicatorsContainer: () => ({
		display: 'none',
	}),
	singleValue: (base: any) => ({
		...base,
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		color: 'inherit',
	}),
	option: (base: any, state: any) => ({
		...base,
		backgroundColor: state.isFocused ? '#f3e8ff' : 'transparent',
		color: state.isFocused ? '#000' : 'inherit',
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		fontSize: '14px',
		padding: '10px 12px',
		cursor: 'pointer',
	}),
	menu: (base: any) => ({
		...base,
		zIndex: 50,
		backgroundColor: '#fff',
		color: '#000',
		borderRadius: '8px',
		boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
		overflow: 'hidden',
		width: '140px',
	}),
	menuList: (base: any) => ({
		...base,
		padding: 0,
	}),
}

const formatOptionLabel = (option: any) => (
	<div className='flex items-center space-x-2 px-2 py-1'>
		<span className='text-xl'>{option.icon}</span>
		<span className='text-sm'>{option.label}</span>
	</div>
)

export const LanguageSelector = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (option: any) => {
		if (option) i18n.changeLanguage(option.value)
	}

	const current = languages.find(l => l.value === i18n.language) || languages[0]

	return (
		<div className='text-sm text-black dark:text-white'>
			<Select
				options={languages}
				defaultValue={current}
				onChange={changeLanguage}
				styles={customStyles}
				formatOptionLabel={formatOptionLabel}
				isSearchable={false}
			/>
		</div>
	)
}
