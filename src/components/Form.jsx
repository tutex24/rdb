import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Menu, Switch } from '@headlessui/react'
import { forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import { BiLoaderCircle } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa'

export const Input = forwardRef(({ label, name, type, color, placeholder, register }, ref) => {
	return (
		<div className="w-full text-sm">
			<label className={`${color ? 'text-black text-sm' : 'font-semibold text-white'}`}>{label}</label>
			<input
				ref={ref}
				name={name}
				{...register}
				type={type}
				placeholder={placeholder}
				className={`mt-3 w-full border bg-transparent p-4 text-sm ${
					color ? 'border-border font-light' : 'border-white text-white'
				} rounded-lg focus:border focus:border-subMain`}
			/>
		</div>
	)
})

// button

export function Button({ label, onClick, loading, Icon, type = 'button' }) {
	return (
		<button
			type={type}
			disabled={loading}
			onClick={onClick}
			className={
				'transitions w-full flex-rows gap-4 rounded bg-subMain px-2 py-4 font-medium text-sm text-white hover:opacity-80'
			}
		>
			{loading ? (
				<BiLoaderCircle className="animate-spin text-2xl text-white" />
			) : (
				<>
					{label}
					{Icon && <Icon className="text-white text-xl" />}
				</>
			)}
		</button>
	)
}

// select

export function MenuSelect({ children, datas, item: data }) {
	return (
		<div className="relative w-full text-sm">
			<Menu>
				<Menu.Button>{children}</Menu.Button>
				<Menu.Items className="absolute left-0 z-50 flex flex-col gap-4 rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none">
					{datas.map((item, index) => (
						<button
							type="button"
							onClick={() => item.onClick(data)}
							key={index}
							className={'flex items-center gap-4 hover:text-subMain'}
						>
							{item.icon && <item.icon className="text-md text-subMain" />}
							{item.title}
						</button>
					))}
				</Menu.Items>
			</Menu>
		</div>
	)
}

// select 2

export function Select({ children, selectedPerson, setSelectedPerson, datas }) {
	return (
		<div className="relative w-full text-sm ">
			<div className="w-full">
				<Listbox value={selectedPerson} onChange={setSelectedPerson}>
					<ListboxButton className={'w-full'}>{children}</ListboxButton>
					<ListboxOptions className="absolute top-10 left-0 z-50 flex w-full flex-col gap-4 rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none">
						{datas.map((person) => (
							<ListboxOption
								className={'cursor-pointer text-xs hover:text-subMain'}
								key={person.id}
								value={person}
								disabled={person.unavailable}
							>
								{person.name}
							</ListboxOption>
						))}
					</ListboxOptions>
				</Listbox>
			</div>
		</div>
	)
}

// switch

export function Switchi({ checked, onChange }) {
	return (
		<Switch
			checked={checked}
			onChange={onChange}
			className={`${checked ? 'bg-subMain' : 'bg-border'}transitions relative inline-flex w-12 cursor-pointer rounded-full p-[2px]`}
		>
			<span
				aria-hidden="true"
				className={`${checked ? 'translate-x-5' : 'translate-x-0'}transitions pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg`}
			/>
		</Switch>
	)
}

// textarea

export function Textarea({ label, name, register, placeholder, rows }) {
	return (
		<div className="w-full text-sm">
			<label className={'text-black text-sm'}>{label}</label>
			<textarea
				name={name}
				rows={rows}
				{...register}
				placeholder={placeholder}
				className={
					'mt-3 w-full rounded border border-border bg-transparent p-4 font-light text-sm focus:border-subMain '
				}
			/>
		</div>
	)
}

// date picker

export function DatePickerComp({ label, startDate, onChange }) {
	return (
		<div className="w-full text-sm">
			<label className={'text-black text-sm'}>{label}</label>

			<DatePicker
				selected={startDate}
				onChange={onChange}
				className="mt-3 w-full rounded-lg border border-border bg-transparent p-4 font-light text-sm focus:border focus:border-subMain"
			/>
		</div>
	)
}

// time picker

export function TimePickerComp({ label, startDate, onChange }) {
	return (
		<div className="w-full text-sm">
			<label className={'text-black text-sm'}>{label}</label>
			<DatePicker
				selected={startDate}
				onChange={onChange}
				showTimeSelect
				showTimeSelectOnly
				timeIntervals={30}
				timeCaption="Time"
				dateFormat="h:mm aa"
				className="mt-3 w-full rounded-lg border border-border bg-transparent p-4 font-light text-sm focus:border focus:border-subMain"
			/>
		</div>
	)
}

// checkbox

export function Checkbox({ label, name, onChange, checked }) {
	return (
		<div className="flex w-full flex-row items-center text-sm">
			{/* design checkbox */}
			<label className="relative flex-colo cursor-pointer">
				<input
					type="checkbox"
					name={name}
					checked={checked}
					onChange={onChange}
					className="absolute h-0 w-0 opacity-0"
				/>
				<span
					className={` mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${
						checked ? 'border-subMain bg-subMain' : 'border-gray-300 bg-white'
					}`}
				>
					<FaCheck className={`text-[10px] ${checked ? 'block text-white' : 'hidden'}`} />
				</span>
			</label>

			{label && <p className={'ml-2 text-black text-xs'}>{label}</p>}
		</div>
	)
}

// from to date picker

export function FromToDate({ label, startDate, onChange, endDate, bg }) {
	return (
		<div className="flex w-full flex-col gap-2 text-sm">
			{label && <label className={'text-black text-sm'}>{label}</label>}
			<DatePicker
				selectsRange={true}
				startDate={startDate}
				endDate={endDate}
				onChange={onChange}
				className={`w-full ${
					bg ? bg : 'bg-transparent'
				} h-14 rounded-lg border border-border px-4 font-normal text-main text-xs focus:border focus:border-subMain`}
			/>
		</div>
	)
}
