function isAN(value){
    return (value instanceof Number || typeof value === 'number') && !isNaN(value);
}

module.exports.isAN = isAN;
