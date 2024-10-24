import { useState } from 'react'
import { useTasksListContext } from '~/context/TasksListProvider'
import IconButton from '~/ui/IconButton'
import { Plus } from '~/ui/icons'

const AddNewTask = () => {
	const [newTask, setNewTask] = useState<string>('')

	const { addTask } = useTasksListContext()

	const handleAddTask = () => {
		if (newTask) {
			addTask(newTask)
			setNewTask('')
		}
	}

	return (
		<div className='flex justify-between gap-3'>
			<input
				type='text'
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				className='w-full bg-container rounded-[10px] border-purple border py-2 px-3 focus:outline-none max-h-10'
				placeholder='Add task'
				onKeyDown={e => e.key === 'Enter' && handleAddTask()}
			/>
			<IconButton Icon={Plus} onClick={handleAddTask} />
		</div>
	)
}

export default AddNewTask
