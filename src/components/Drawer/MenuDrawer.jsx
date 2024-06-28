import Sidebar from '../../Layout/Sidebar'
import MainDrawer from './MainDrawer'

function MenuDrawer({ isOpen, toggleDrawer }) {
	return (
		<MainDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
			<Sidebar />
		</MainDrawer>
	)
}

export default MenuDrawer
