var minhaVar = 'minha variavel';
function minhaFunction(x, y) { return x + y; }
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (n) { return n * 2; });
numeros.map(function (n) { n * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) { return x + y; };
    return Matematica;
}());
