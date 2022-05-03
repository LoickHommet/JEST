module.exports = function absolue(a) {
    // vérifier que l'agument est un nombre
    // retourne la valeur absolue

        if (a === 0) return 0;
        else if (a < 0) return -a;
        else return a;
  
};