/**
 * Rotate a div, or un-rotate the text within the rotated div.
 * @param targetAngle
 * @param isTextRotationCorrection
 */
export function getRotation(
	targetAngle: number,
	isTextRotationCorrection: boolean,
) {
	const desiredAngle = isTextRotationCorrection
		? 360 - targetAngle
		: targetAngle

	if (desiredAngle % 90 !== 0) {
		return `rotate-[${desiredAngle}deg]`
	}

	return desiredAngle <= 180
		? `rotate-${desiredAngle}`
		: `-rotate-${desiredAngle - 180}`
}
