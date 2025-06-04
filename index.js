function myMap(cbFn) {
    return function (array) {
        const result = [];
        array.forEach((element, index) => {
            result.push(cbFn(element,index));
        });
        return result;
    };
}

module.exports = myMap;