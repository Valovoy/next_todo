'use client'
import { useState } from 'react'
import IconButton from '~/ui/IconButton'
import TaskItem from '~/ui/TaskItem'

interface Task {
	value: string
	isDone: boolean
}

type TaskStatus = 'done' | 'notDone'

export default function Home() {
	const [tasks, setTasks] = useState<Task[]>([])
	const [task, setTask] = useState<string>('')

	const handleAddTask = () => {
		setTasks(prev => [...prev, { value: task, isDone: false }])
		setTask('')
	}

	const handleDeleteTask = (task: string) => {
		setTasks(prev => prev.filter(item => item.value !== task))
	}

	const handleToggleTask = (task: string) => {
		setTasks(prev =>
			prev.map(item =>
				item.value === task ? { ...item, isDone: !item.isDone } : item
			)
		)
	}

	const groupedTasks = tasks?.reduce(
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
			<div className='flex justify-between gap-3'>
				<input
					type='text'
					value={task}
					onChange={e => setTask(e.target.value)}
					className='w-full bg-container rounded-[10px] border-purple border py-2 px-3 focus:outline-none max-h-10'
					placeholder='Add task'
				/>
				<IconButton
					src='/plus.svg'
					alt='Add new task'
					onClick={handleAddTask}
				/>
			</div>
			<section className='mt-12'>
				<h4 className='text-white'>
					Tasks to do - {groupedTasks.notDone.length}
				</h4>
				{groupedTasks.notDone?.map(task => (
					<TaskItem
						key={task.value}
						value={task.value}
						isDone={task.isDone}
						handleToggleTask={handleToggleTask}
						handleDeleteTask={handleDeleteTask}
					/>
					// <div
					// 	key={task.value}
					// 	className='bg-midnight rounded-[10px] px-5 py-4 text-purple flex justify-between items-center mt-3'
					// >
					// 	{task.value}
					// 	<div className='flex gap-1'>
					// 		<IconButton
					// 			src='/check.svg'
					// 			alt='Check'
					// 			className='bg-transparent'
					// 			onClick={() => handleToggleTask(task.value)}
					// 		/>
					// 		<IconButton
					// 			src='/trash.svg'
					// 			alt='Delete task'
					// 			className='bg-transparent'
					// 			onClick={() => handleDeleteTask(task.value)}
					// 		/>
					// 	</div>
					// </div>
				))}
			</section>
			<section className='mt-12'>
				<h4 className='text-white'>Done - {groupedTasks.done.length}</h4>
				{groupedTasks.done?.map(task => (
					<TaskItem
						key={task.value}
						value={task.value}
						isDone={task.isDone}
						handleToggleTask={handleToggleTask}
						handleDeleteTask={handleDeleteTask}
					/>
				))}
			</section>
		</div>
	)
}
