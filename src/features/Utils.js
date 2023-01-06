export const Capitalize = (text) => {
	return text.replace(/[_-]/g, " ").replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase())
};
