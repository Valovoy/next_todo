'use client'
import Todo from '~/components/Todo'
import { TasksListProvider } from '~/context/TasksListProvider'

export default function Home() {
	return (
		<TasksListProvider>
			<Todo />
		</TasksListProvider>
	)
}
