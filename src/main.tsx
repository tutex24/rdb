import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'aos'

import 'swiper/css'
import 'aos/dist/aos.css'
import 'react-tooltip/dist/react-tooltip.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-modern-drawer/dist/index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Could not find root element')
}

const root = ReactDOM.createRoot(rootElement)
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
