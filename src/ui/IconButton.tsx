import React from 'react'

interface IconButtonProps {
	Icon: React.FC<React.SVGProps<SVGSVGElement>>
	className?: string
	iconClassName?: string
	onClick?: () => void
}

const IconButton = ({
	Icon,
	className,
	iconClassName,
	onClick = () => null,
}: IconButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`w-10 h-10 bg-purple rounded-[10px] flex items-center justify-center cursor-pointer ${
				className || ''
			}`}
		>
			<Icon width={24} height={24} className={iconClassName || ''} />
		</button>
	)
}

export default IconButton
