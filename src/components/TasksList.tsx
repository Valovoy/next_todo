import { useTasksListContext } from '~/context/TasksListProvider'
import { Task } from '~/types/task'
import TaskItem from '~/ui/TaskItem'

interface TaskList {
	list: Task[]
	title: string
}

const TasksList = ({ list, title }: TaskList) => {
	const { deleteTask, toggleTask } = useTasksListContext()

	return (
		<section className='mt-12'>
			<h4 className='text-white'>
				{title} - {list.length}
			</h4>
			{list.map(task => (
				<TaskItem
					key={task.value}
					value={task.value}
					isDone={task.isDone}
					handleToggleTask={toggleTask}
					handleDeleteTask={deleteTask}
				/>
			))}
		</section>
	)
}

export default TasksList
