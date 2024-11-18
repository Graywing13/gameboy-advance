import { ReactNode } from 'react'

interface ButtonProps {
	children: ReactNode
	className?: string
}

export function Button({ children, className }: ButtonProps) {
	return (
		<div
			className={`${className} flex items-center justify-center cursor-pointer bg-gray-200 hover:bg-gray-300 transition-colors`}
		>
			{children}
		</div>
	)
}
