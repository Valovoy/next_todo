import { createContext, useContext, useState } from 'react'
import { Task } from '~/types/task'

interface TasksListProviderProps {
	tasksList: Task[]
	addTask: (task: string) => void
	deleteTask: (task: string) => void
	toggleTask: (task: string) => void
}

const TasksListContext = createContext<TasksListProviderProps>(null!)

export const useTasksListContext = () => {
	const context = useContext(TasksListContext)

	if (!context) {
		throw new Error("Tasks List Context didn't find")
	}

	return context
}

export const TasksListProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [tasksList, setTasksList] = useState<Task[]>([])

	const addTask = (task: string) => {
		setTasksList(prev => [...prev, { value: task, isDone: false }])
	}

	const deleteTask = (task: string) => {
		setTasksList(prev => prev.filter(item => item.value !== task))
	}

	const toggleTask = (task: string) => {
		setTasksList(prev =>
			prev.map(item =>
				item.value === task ? { ...item, isDone: !item.isDone } : item
			)
		)
	}

	return (
		<TasksListContext.Provider
			value={{
				tasksList,
				addTask,
				deleteTask,
				toggleTask,
			}}
		>
			{children}
		</TasksListContext.Provider>
	)
}
