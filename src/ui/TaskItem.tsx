import IconButton from './IconButton'

interface TaskItemProps {
	value: string
	isDone: boolean
	handleToggleTask: (task: string) => void
	handleDeleteTask: (task: string) => void
}

const TaskItem = ({
	value,
	isDone,
	handleToggleTask,
	handleDeleteTask,
}: TaskItemProps) => {
	return (
		<div
			className={`bg-midnight rounded-[10px] px-5 py-4  flex justify-between items-center mt-3 ${
				isDone ? 'text-done' : 'text-purple'
			} ${isDone ? 'line-through' : ''}`}
		>
			{value}
			<div className='flex gap-1'>
				<IconButton
					src='/check.svg'
					alt='Check'
					className='bg-transparent'
					onClick={() => handleToggleTask(value)}
				/>
				<IconButton
					src='/trash.svg'
					alt='Delete task'
					className='bg-transparent'
					onClick={() => handleDeleteTask(value)}
				/>
			</div>
		</div>
	)
}
export default TaskItem
