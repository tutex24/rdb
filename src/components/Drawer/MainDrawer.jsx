import Drawer from 'react-modern-drawer'

function MainDrawer({ isOpen, toggleDrawer, children }) {
	return (
		<Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="overflow-y-scroll bg-white">
			{children}
		</Drawer>
	)
}

export default MainDrawer
