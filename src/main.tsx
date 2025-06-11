import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.tsx'
import { store } from './app/store.tsx'
import Caruosel from './components/caruosel/caruosel.tsx'
import CaruselBottom from './components/caruselBottom/caruselBottom.tsx'
import Elements from './components/Elements/elements.tsx'
import './i18n/i18n.tsx'
import './index.css'
import Products from './products/Products.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />}>
						<Route
							index
							element={
								<>
									<Caruosel />
									<CaruselBottom />
									<Products />
								</>
							}
						/>
						<Route path='/product-details/:id' element={<Elements />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
)
