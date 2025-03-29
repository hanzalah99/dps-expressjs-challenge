export const countWordOccurrences = (text: string, word: string): number => {
	const regex = new RegExp(`\\b${word}\\b`, 'gi');
	const matches = text.match(regex);
	return matches ? matches.length : 0;
};
