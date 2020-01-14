module.exports = function(arrayAsSAtring){
    return arrayAsSAtring.split(',').map(tech => tech.trim());
}