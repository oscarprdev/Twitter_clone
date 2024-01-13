export const strCapitalize = (str: string) => {
	return str ? `${str[0].toUpperCase()}${str.substring(1, str.length)}` : '';
};
