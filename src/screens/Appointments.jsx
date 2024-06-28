import moment from 'moment'
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { BiChevronLeft, BiChevronRight, BiPlus, BiTime } from 'react-icons/bi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineCalendarDays } from 'react-icons/hi2'
import Layout from '../PrivateLayout'
import { servicesData } from '../components/Datas'
import AddAppointmentModal from '../components/Modals/AddApointmentModal'

// custom toolbar
const CustomToolbar = (toolbar) => {
	// today button handler
	const goToBack = () => {
		toolbar.date.setMonth(toolbar.date.getMonth() - 1)
		toolbar.onNavigate('prev')
	}

	// next button handler
	const goToNext = () => {
		toolbar.date.setMonth(toolbar.date.getMonth() + 1)
		toolbar.onNavigate('next')
	}

	// today button handler
	const goToCurrent = () => {
		toolbar.onNavigate('TODAY')
	}

	// month button handler
	const goToMonth = () => {
		toolbar.onView('month')
	}

	// week button handler
	const goToWeek = () => {
		toolbar.onView('week')
	}

	// day button handler
	const goToDay = () => {
		toolbar.onView('day')
	}

	// view button group
	const viewNamesGroup = [
		{ view: 'month', label: 'Month' },
		{ view: 'week', label: 'Week' },
		{ view: 'day', label: 'Day' },
	]

	return (
		<div className="mb-8 flex flex-col gap-8">
			<h1 className="font-semibold text-xl">Appointments</h1>
			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-12">
				<div className="flex items-center justify-center sm:justify-start md:col-span-1">
					<button
						type="button"
						onClick={goToCurrent}
						className="rounded-md border border-subMain px-6 py-2 text-subMain"
					>
						Today
					</button>
				</div>
				{/* label */}
				<div className="flex-rows gap-4 md:col-span-9">
					<button type="button" onClick={goToBack} className="text-2xl text-subMain">
						<BiChevronLeft />
					</button>
					<span className="font-semibold text-xl">{moment(toolbar.date).format('MMMM YYYY')}</span>
					<button type="button" onClick={goToNext} className="text-2xl text-subMain">
						<BiChevronRight />
					</button>
				</div>
				{/* filter */}
				<div className="grid grid-cols-3 rounded-md border border-subMain md:col-span-2">
					{viewNamesGroup.map((item, index) => (
						<button
							type="button"
							key={index}
							onClick={item.view === 'month' ? goToMonth : item.view === 'week' ? goToWeek : goToDay}
							className={`flex-colo border-subMain border-l py-2 text-xl ${
								toolbar.view === item.view ? 'bg-subMain text-white' : 'text-subMain'
							}`}
						>
							{item.view === 'month' ? (
								<HiOutlineViewGrid />
							) : item.view === 'week' ? (
								<HiOutlineCalendarDays />
							) : (
								<BiTime />
							)}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

function Appointments() {
	const localizer = momentLocalizer(moment)
	const [open, setOpen] = React.useState(false)
	const [data, setData] = React.useState({})

	// handle modal close
	const handleClose = () => {
		setOpen(!open)
		setData({})
	}

	const events = [
		{
			id: 0,
			start: moment({ hours: 7 }).toDate(),
			end: moment({ hours: 9 }).toDate(),
			color: '#FB923C',
			title: 'John Doe',
			message: 'He is not sure about the time',
			service: servicesData[1],
			shareData: {
				email: true,
				sms: true,
				whatsapp: false,
			},
		},
		{
			id: 1,
			start: moment({ hours: 12 }).toDate(),
			end: moment({ hours: 13 }).toDate(),
			color: '#FC8181',
			title: 'Minah Mmassy',
			message: 'She is coming for checkup',
			service: servicesData[2],
			shareData: {
				email: false,
				sms: true,
				whatsapp: false,
			},
		},

		{
			id: 2,
			start: moment({ hours: 14 }).toDate(),
			end: moment({ hours: 17 }).toDate(),
			color: '#FFC107',
			title: 'Irene P. Smith',
			message: 'She is coming for checkup. but she is not sure about the time',
			service: servicesData[3],
			shareData: {
				email: true,
				sms: true,
				whatsapp: true,
			},
		},
	]

	// onClick event handler
	const handleEventClick = (event) => {
		setData(event)
		setOpen(!open)
	}

	return (
		<Layout>
			{open && (
				<AddAppointmentModal
					datas={data}
					isOpen={open}
					closeModal={() => {
						handleClose()
					}}
				/>
			)}
			{/* calender */}
			<button
				type="button"
				onClick={handleClose}
				className="button-fb fixed right-12 bottom-8 z-50 h-16 w-16 flex-colo animate-bounce rounded-full border border-border bg-subMain text-white"
			>
				<BiPlus className="text-2xl" />
			</button>

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				style={{
					// height fix screen
					height: 900,
					marginBottom: 50,
				}}
				onSelectEvent={(event) => handleEventClick(event)}
				defaultDate={new Date()}
				timeslots={1}
				resizable
				step={60}
				selectable={true}
				// custom event style
				eventPropGetter={(event) => {
					const style = {
						backgroundColor: '#07b8db',

						borderRadius: '10px',
						color: 'white',
						border: '1px',
						borderColor: '#F2FAF8',
						fontSize: '12px',
						padding: '5px 5px',
					}
					return {
						style,
					}
				}}
				// custom date style
				dayPropGetter={(date) => {
					const backgroundColor = 'white'
					const style = {
						backgroundColor,
					}
					return {
						style,
					}
				}}
				// remove agenda view
				views={['month', 'day', 'week']}
				// toolbar={false}
				components={{ toolbar: CustomToolbar }}
			/>
		</Layout>
	)
}

export default Appointments
