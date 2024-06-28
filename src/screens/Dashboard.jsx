import {
	BsArrowDownLeft,
	BsArrowDownRight,
	BsArrowUpRight,
	BsCheckCircleFill,
	BsClockFill,
	BsXCircleFill,
} from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// import React from 'react';
import Layout from '../Layout'
import { DashboardBigChart, DashboardSmallChart } from '../components/Charts'
import { appointmentsData, dashboardCards, memberData, reviewData, transactionData } from '../components/Datas'
import { Transactiontable } from '../components/Tables'

function Dashboard() {
	return (
		<Layout>
			{/* boxes */}
			<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{dashboardCards.map((card, index) => (
					<div key={card.id} className=" rounded-xl border-[1px] border-border bg-white p-5">
						<div className="flex items-center gap-4">
							<div className={`h-10 w-10 flex-colo rounded-md bg-opacity-10 ${card.color[1]}${card.color[0]}`}>
								<card.icon />
							</div>
							<h2 className="font-medium text-sm">{card.title}</h2>
						</div>
						<div className="mt-4 grid grid-cols-8 items-center gap-4 rounded-xl bg-dry px-8 py-5">
							<div className="col-span-5">
								{/* statistc */}
								<DashboardSmallChart data={card.datas} colors={card.color[2]} />
							</div>
							<div className="col-span-3 flex flex-col gap-4">
								<h4 className="font-medium text-md">
									{card.value}
									{
										// if the id === 4 then add the $ sign
										card.id === 4 ? '$' : '+'
									}
								</h4>
								<p className={`flex gap-2 text-sm ${card.color[1]}`}>
									{card.percent > 50 && <BsArrowUpRight />}
									{card.percent > 30 && card.percent < 50 && <BsArrowDownRight />}
									{card.percent < 30 && <BsArrowDownLeft />}
									{card.percent}%
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="my-6 grid w-full grid-cols-1 gap-6 xl:grid-cols-8">
				<div className="w-full xl:col-span-6">
					{/* eye banner */}
					<div className=" relative rounded-xl border-[1px] border-border bg-white">
						<img src="/images/banner.avif" className="h-72 w-full rounded object-cover" alt="banner" />
						<div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center space-y-4 bg-subMain bg-opacity-10 px-6 py-5 md:px-12">
							<h1 className="font-semibold text-subMain text-xl capitalize">The future of eye care is here</h1>
							<p className="max-w-96 text-textGray text-xs leading-6">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor asin cididunt ut labore
								et dolore magna ali qua. Lorem ipsum dolor sit amet.
							</p>
							<div>
								{' '}
								<button type="button" className="transitions flex-colo rounded bg-subMain px-6 py-3 text-white text-xs">
									Read More
								</button>
							</div>
						</div>
					</div>
					<div className="mt-6 rounded-xl border-[1px] border-border bg-white p-5">
						<div className="flex-btn gap-2">
							<h2 className="font-medium text-sm">Earning Reports</h2>
							<p className="flex items-center gap-4 text-sm">
								5.44% <span className="rounded-xl bg-subMain px-2 py-1 text-white text-xs">+2.4%</span>
							</p>
						</div>
						{/* Earning Reports */}
						<div className="mt-4">
							<DashboardBigChart />
						</div>
					</div>
					{/* transaction */}
					<div className="mt-6 rounded-xl border-[1px] border-border bg-white p-5">
						<div className="flex-btn gap-2">
							<h2 className="font-medium text-sm">Recent Transaction</h2>
							<p className="flex items-center gap-4 text-sm">
								Today <span className="rounded-xl bg-subMain px-2 py-1 text-white text-xs">27000$</span>
							</p>
						</div>
						{/* table */}
						<div className="mt-4 overflow-x-scroll">
							<Transactiontable data={transactionData.slice(0, 5)} action={false} />
						</div>
					</div>
				</div>
				{/* side 2 */}
				<div
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="10"
					data-aos-offset="200"
					className="grid gap-6 sm:grid-cols-2 xl:col-span-2 xl:block"
				>
					{/* review */}
					<div className="rounded-xl border-[1px] border-border bg-white p-5">
						<h2 className="font-medium text-sm">Recent Reviews</h2>
						{reviewData.slice(1, 3).map((rev, index) => (
							<div key={index} className="mt-6 flex-btn gap-4 border-border border-b pb-4">
								<div className="flex items-center gap-4">
									<img src={rev?.user?.image} alt={rev?.user?.title} className="h-10 w-10 rounded-md object-cover" />
									<div className="flex flex-col gap-1">
										<h3 className="font-medium text-xs">{rev?.user?.title}</h3>
										<p className="max-w-44 truncate text-wrap text-gray-400 text-xs leading-5">
											{rev?.comment.slice(0, 45)}...
										</p>
									</div>
								</div>
								<div className="flex-rows gap-1">
									<p className="text-textGray text-xs">{rev?.star}</p>
									<p className="text-orange-500 text-xs">
										<FaStar />
									</p>
								</div>
							</div>
						))}
					</div>
					{/* recent patients */}
					<div className="rounded-xl border-[1px] border-border bg-white p-5 xl:mt-6">
						<h2 className="font-medium text-sm">Recent Patients</h2>
						{memberData.slice(3, 8).map((member, index) => (
							<Link
								to={`/patients/preview/${member.id}`}
								key={index}
								className="mt-6 flex-btn gap-4 border-border border-b pb-4"
							>
								<div className="flex items-center gap-4">
									<img src={member.image} alt="member" className="h-10 w-10 rounded-md object-cover" />
									<div className="flex flex-col gap-1">
										<h3 className="font-medium text-xs">{member.title}</h3>
										<p className="text-gray-400 text-xs">{member.phone}</p>
									</div>
								</div>
								<p className="text-textGray text-xs">2:00 PM</p>
							</Link>
						))}
					</div>
					{/* today apointments */}
					<div className="rounded-xl border-[1px] border-border bg-white p-5 xl:mt-6">
						<h2 className="mb-4 font-medium text-sm">Today Appointments</h2>
						{appointmentsData.map((appointment, index) => (
							<div key={appointment.id} className="grid grid-cols-12 items-center gap-2">
								<p className="col-span-3 font-light text-[12px] text-textGray">{appointment.time}</p>
								<div className="relative col-span-2 flex-colo">
									<hr className="h-20 w-[2px] bg-border" />
									<div
										className={`h-7 w-7 flex-colo bg-opacity-10 text-sm ${appointment.status === 'Pending' && 'bg-orange-500 text-orange-500'}${appointment.status === 'Cancel' && 'bg-red-500 text-red-500'}${appointment.status === 'Approved' && 'bg-green-500 text-green-500'}-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 transform rounded-full`}
									>
										{appointment.status === 'Pending' && <BsClockFill />}
										{appointment.status === 'Cancel' && <BsXCircleFill />}
										{appointment.status === 'Approved' && <BsCheckCircleFill />}
									</div>
								</div>
								<Link to="/appointments" className="col-span-6 flex flex-col gap-1">
									<h2 className="font-medium text-xs">{appointment.user?.title}</h2>
									<p className="font-light text-[12px] text-textGray">
										{appointment.from} - {appointment.to}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard
