module.exports = function absolue(a) {
    // retourne la valeur absolue
    if(typeof a !== 'number')  throw new Error('Sa doit etre un nombre')// !isNaN(a)
    return Math.abs(a)
    
};