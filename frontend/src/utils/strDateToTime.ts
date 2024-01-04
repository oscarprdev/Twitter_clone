export const strDateToTime = (strDate: string) => {
	const inputDate = new Date(strDate);

	if (isNaN(inputDate.getTime())) {
		return 'Invalid Date';
	}

	const now = new Date();
	const timeDifference = now.getTime() - inputDate.getTime();

	const seconds = Math.floor(timeDifference / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) {
		return years === 1 ? '1 year' : `${years} years`;
	} else if (months > 0) {
		return months === 1 ? '1 month' : `${months} months`;
	} else if (days > 0) {
		return days === 1 ? '1 day' : `${days} days`;
	} else if (hours > 0) {
		return hours === 1 ? '1 hour' : `${hours} hours`;
	} else if (minutes > 0) {
		return minutes === 1 ? '1 minute' : `${minutes} minutes`;
	} else {
		return 'Just now';
	}
};
