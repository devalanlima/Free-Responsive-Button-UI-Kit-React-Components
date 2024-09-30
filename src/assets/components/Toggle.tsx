interface Props {
	inputValue: boolean
	label1: string
	label2: string
	onChange: () => void
}

export default function Toggle ({inputValue=true, label1, label2, onChange}: Props) {
	return (
		<label className="bg-gray-medium rounded-md overflow-hidden cursor-pointer select-none flex hover:outline outline-primary-medium outline-2">
			<div className={`${inputValue ? 'bg-primary-medium text-gray-light' : 'text-gray-dark'} p-2`}>{label1}</div>
			<div className={`${!inputValue ? 'bg-primary-medium text-gray-light' : 'text-gray-dark'} p-2`}>{label2}</div>
			<input className="sr-only" type="checkbox" onChange={onChange} checked={inputValue} />
		</label>
	)
}