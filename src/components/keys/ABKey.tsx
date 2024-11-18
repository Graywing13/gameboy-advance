import { ABKeyType, KeyMap } from './enums'
import { Keybind } from '../reusable/Keybind'
import { Button } from '../reusable/Button'

interface ABKeyProps {
	type: ABKeyType
	className?: string
}

export function ABKey({ type, className }: ABKeyProps) {
	return (
		<Button className={`${className} w-12 h-12 rounded-full bg-gray-100`}>
			<Keybind
				letter={type === ABKeyType.A ? KeyMap.A_KEY : KeyMap.B_KEY}
			/>
		</Button>
	)
}
