import { Check, Close, Trash } from '~/ui/icons'
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
					Icon={isDone ? Close : Check}
					className='bg-transparent'
					iconClassName={isDone ? 'text-done' : 'text-purple'}
					onClick={() => handleToggleTask(value)}
				/>
				<IconButton
					Icon={Trash}
					className='bg-transparent'
					iconClassName={isDone ? 'text-done' : 'text-purple'}
					onClick={() => handleDeleteTask(value)}
				/>
			</div>
		</div>
	)
}
export default TaskItem
