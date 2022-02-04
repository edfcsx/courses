const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

contadorC.inc()
contadorC.inc()

console.log(`Contador A:${contadorA.valor}, Contador B: ${contadorB.valor} ---- Contador C:${contadorC.valor}, Contador D: ${contadorD.valor}`)