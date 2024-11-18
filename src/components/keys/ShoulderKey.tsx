import { KeyMap, ShoulderKeyType } from './enums'
import { Keybind } from '../reusable/Keybind'
import { Button } from '../reusable/Button'

interface ShoulderKeyProps {
	type: ShoulderKeyType
	className?: string
}

export function ShoulderKey({ type, className }: ShoulderKeyProps) {
	return (
		<Button
			className={`${className} -mx-2 w-52 h-12 rounded-full bg-gray-100`}
		>
			<Keybind
				letter={
					type === ShoulderKeyType.LEFT_SHOULDER
						? KeyMap.LEFT_SHOULDER_KEY
						: KeyMap.RIGHT_SHOULDER_KEY
				}
			/>
		</Button>
	)
}
