import { LuMessageSquarePlus } from 'react-icons/lu'
// import React from 'react';
import { chatsData } from '../../components/Datas'

function SideBarChat() {
	return (
		<div className="space-y-6">
			<h3 className="font-semibold text-sm">
				Messages
				<span className="ml-2 rounded-full bg-subMain px-2 py-1 text-white text-xs">3</span>
			</h3>
			{/* search */}
			<div className="grid grid-cols-12 gap-2">
				<input
					type="text"
					placeholder="Search"
					className="col-span-10 rounded-lg border border-border bg-transparent px-2 py-3 text-xs"
				/>
				<button type="button" className="transitions h-10 w-10 flex-colo rounded bg-subMain text-md text-white">
					<LuMessageSquarePlus />
				</button>
			</div>

			{/* users */}
			<div className=" relative z-0 max-h-[200px] overflow-y-scroll xl:max-h-[780px]">
				{chatsData.map((chat, i) => (
					<div
						key={i}
						className="transitions grid cursor-pointer grid-cols-12 gap-2 border-border border-b px-2 py-4 hover:rounded hover:bg-text"
					>
						<div className="relative col-span-2">
							<img className="h-10 w-10 rounded-full border object-cover" alt="user" src={chat?.user?.image} />
							{chat?.status && (
								<span className="absolute top-0 right-0 h-[10px] w-[10px] rounded-full border border-white bg-subMain" />
							)}
						</div>
						<div className="col-span-7 space-y-1 pl-2">
							<h2 className="font-medium text-xs">{chat?.user?.title}</h2>
							<p className="truncate text-textGray text-xs">{chat?.message}</p>
						</div>
						<div className="col-span-3">
							<p className="text-[11px] text-textGray">{chat?.active}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default SideBarChat
