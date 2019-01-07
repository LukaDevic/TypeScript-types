//boolean
var isCool = true;
//number
var age = 56;
//string
var eyeColor = 'brown';
var favouriteQuote = "Im not old, im only " + age;
//Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
//Object
var wizard = {
    a: 'John'
};
//null and undefined
var meh = undefined;
var noo = null;
//Tuple
var basket;
basket = ['basketball', 5];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size.Small;
//Any- !!!!!!! BE CAREFUL
var whatever = 'aghhhhhh nooo!!!';
whatever = basket;
//void
var sing = function () {
    console.log('lalalalalala');
};
//never
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var dog = {};
dog.count;
//Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
//Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'alalalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAAWWWR');
lion.sing;
//Union
var confused = true;
