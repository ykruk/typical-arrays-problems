
exports.min = function min (array) {
    if(!array || array.length === 0) return 0;
 	return array.reduce((acc, el) => el < acc ? el : acc, 0);
}

exports.max = function max (array) {
    if(!array || array.length === 0) return 0;
    return array.reduce((acc, el) => el > acc ? el : acc, 0);
}

exports.avg = function avg (array) {
    if(!array || array.length === 0) return 0;
    return res = array.reduce((acc, el) => acc += el, 0) / array.length;
}
