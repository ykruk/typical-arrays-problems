
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;
 	return array.reduce((acc, el) => {
        return el < acc ? el : acc;
    }, 0);
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;
    return array.reduce((acc, el) => {
        return el > acc ? el : acc;
    }, 0);
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;
    const res = array.reduce((acc, el) => {
		acc.sum += el;
		acc.count++;
		return acc;
	}, {sum: 0, count: 0});
	return res.sum / res.count;
}
