module.exports = function absolue(a) {
    // vérifier que l'agument est un nombre
    // retourne la valeur absolue
    if(typeof a === 'number') // !isNaN(a)
    {
        if (a === 0) return 0;
        else if (a < 0) return -a;
        else return a;
    }else{
        throw new Error('Sa doit etre un nombre')
    }
};