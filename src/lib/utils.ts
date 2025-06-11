export function combine(...inputs: string[]): string {
	return inputs.filter(Boolean).join(' ')
}
