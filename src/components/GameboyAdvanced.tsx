import { Screen } from './Screen'
import { useCallback } from 'react'
import { ArrowKey } from './keys/ArrowKey'
import { ABKey } from './keys/ABKey'
import { ABKeyType, KeyMap, ShoulderKeyType } from './keys/enums'
import { ShoulderKey } from './keys/ShoulderKey'
import { StartSelectKey } from './keys/StartSelectKey'

export function GameboyAdvanced() {
	const renderShoulderKeys = useCallback(() => {
		return (
			<div className={`w-full flex justify-between absolute -top-4`}>
				<ShoulderKey type={ShoulderKeyType.LEFT_SHOULDER} />
				<ShoulderKey type={ShoulderKeyType.RIGHT_SHOULDER} />
			</div>
		)
	}, [])
	const renderDPad = useCallback(() => {
		return (
			<div className={`flex flex-col items-center`}>
				<div>
					<ArrowKey keybind={KeyMap.DPAD_UP_KEY} targetAngle={0} />
				</div>
				<div className={`flex items-center gap-1 h-8 rounded-sm`}>
					<ArrowKey
						keybind={KeyMap.DPAD_LEFT_KEY}
						targetAngle={270}
					/>
					<div className={`h-8 w-8 bg-gray-200 z-10`}></div>
					<ArrowKey
						keybind={KeyMap.DPAD_RIGHT_KEY}
						targetAngle={90}
					/>
				</div>
				<div>
					<ArrowKey
						keybind={KeyMap.DPAD_DOWN_KEY}
						targetAngle={180}
					/>
				</div>
			</div>
		)
	}, [])

	const renderStartSelect = useCallback(() => {
		return (
			<div className={`mt-12`}>
				<StartSelectKey isStart={true} />
				<StartSelectKey isStart={false} />
			</div>
		)
	}, [])

	const renderABKeys = useCallback(() => {
		return (
			<div className={`relative w-32 h-16`}>
				<ABKey type={ABKeyType.A} className={`ml-20 absolute top-0`} />
				<ABKey type={ABKeyType.B} className={`absolute top-4`} />
			</div>
		)
	}, [])

	const renderLines = useCallback(() => {
		return (
			<div className={`mt-20 mb-6`}>
				{Array.from(Array(5).keys()).map((elem) => {
					return (
						<div
							key={`vent-${elem}`}
							className={`w-24 h-2 bg-blue-900 border-[1px] border-black rounded-full mt-1 -rotate-12`}
						></div>
					)
				})}
			</div>
		)
	}, [])

	return (
		<div className="bg-blue-800 rounded-md w-[900px] h-[480px] flex items-center justify-center relative">
			{renderShoulderKeys()}
			<div
				className={`w-1/5 h-full flex flex-col items-center justify-end py-12`}
			>
				{renderDPad()}
				{renderStartSelect()}
			</div>
			<div
				className={`bg-gray-800 rounded-t-3xl rounded-es-[200px_90px] rounded-ee-[200px_90px] items-start justify-center flex pb-8 w-3/5 h-5/6`}
			>
				<Screen />
			</div>
			<div
				className={`w-1/5 h-full flex flex-col items-center justify-end py-12`}
			>
				{renderABKeys()}
				{renderLines()}
			</div>
		</div>
	)
}
