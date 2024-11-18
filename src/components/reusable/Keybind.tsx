import { getRotation } from './util'

const SHOW_KEYBINDS = true

interface KeybindProps {
	letter: string
	parentTargetAngle?: number
}

export function Keybind({ letter, parentTargetAngle = 0 }: KeybindProps) {
	if (SHOW_KEYBINDS) {
		const shouldRotate = parentTargetAngle !== 0
		return (
			<div
				className={`w-min ${getRotation(parentTargetAngle, shouldRotate)}`}
			>
				{letter}
			</div>
		)
	}
	return <></>
}
