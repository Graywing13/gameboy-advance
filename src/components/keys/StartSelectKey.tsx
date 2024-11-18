import { Keybind } from '../reusable/Keybind'
import { Button } from '../reusable/Button'
import { KeyMap } from './enums'

interface StartSelectProps {
	isStart: boolean
}

export function StartSelectKey({ isStart }: StartSelectProps) {
	return (
		<div
			className={`border-[1px] m-2 border-black w-24 h-8 rounded-full bg-blue-900 flex justify-end rotate-12`}
		>
			<Button className={`w-8 h-8 rounded-full`}>
				<Keybind
					letter={isStart ? KeyMap.START_KEY : KeyMap.SELECT_KEY}
					parentTargetAngle={12 /* tw rotate-[348deg] */}
				/>
			</Button>
		</div>
	)
}
