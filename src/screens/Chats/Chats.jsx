// import React from 'react';
import Layout from '../../PrivateLayout'
import Coversation from './Coversation'
import SideBarChat from './SideBarChat'

function Chats() {
	return (
		<Layout>
			<div
				// data-aos="fade-left"
				// data-aos-duration="1000"
				// data-aos-delay="100"
				// data-aos-offset="200"
				className="gap-4 rounded-xl border-[1px] border-border bg-white p-5 xl:flex"
			>
				{/* sidebar */}
				<div className="xl:w-[30%] 2xl:w-[20%] ">
					<SideBarChat />
				</div>
				{/* chats */}
				<div className="mt-6 rounded-lg bg-slate-50 p-2 sm:p-6 xl:mt-0 xl:w-[70%] 2xl:w-[80%]">
					<Coversation />
				</div>
			</div>
		</Layout>
	)
}

export default Chats
