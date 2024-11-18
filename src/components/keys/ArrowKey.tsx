import { Keybind } from '../reusable/Keybind'
import { Button } from '../reusable/Button'
import { getRotation } from '../reusable/util'

interface ArrowKeyProps {
	keybind: string
	targetAngle: number
}

export function ArrowKey({ keybind, targetAngle }: ArrowKeyProps) {
	return (
		<Button
			className={`${getRotation(targetAngle, false)} flex-col relative w-8 h-10 -m-[1px] rounded-t-sm`}
		>
			<Keybind letter={keybind} parentTargetAngle={targetAngle} />
		</Button>
	)
}
