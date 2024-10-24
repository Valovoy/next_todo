'use client'
import AddNewTask from '~/components/AddNewTask'
import TasksList from '~/components/TasksList'
import { useTasksListContext } from '~/context/TasksListProvider'
import { Task, TaskStatus } from '~/types/task'

const Todo = ({}) => {
	const { tasksList } = useTasksListContext()

	const groupedTasks = tasksList?.reduce(
		(acc: Record<TaskStatus, Task[]>, task) => {
			const key = task?.isDone ? 'done' : 'notDone'

			acc[key].push(task)

			return acc
		},
		{
			done: [],
			notDone: [],
		}
	)

	return (
		<div className='max-w-screen-sm sm:mt-24 mx-auto px-16 py-12 bg-container sm:rounded-[20px]'>
			<AddNewTask />
			<TasksList list={groupedTasks.notDone} title='Tasks to do' />
			<TasksList list={groupedTasks.done} title='Done' />
		</div>
	)
}

export default Todo
