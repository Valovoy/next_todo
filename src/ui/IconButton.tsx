import Image from 'next/image'

interface IconButtonProps {
	src: string
	alt: string
	className?: string
	onClick?: () => void
}

const IconButton = ({
	src,
	className,
	alt = '',
	onClick = () => null,
}: IconButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`w-10 h-10 bg-purple rounded-[10px] flex items-center justify-center cursor-pointer ${
				className || ''
			}`}
		>
			<Image src={src} width={24} height={24} alt={alt} />
		</button>
	)
}

export default IconButton
