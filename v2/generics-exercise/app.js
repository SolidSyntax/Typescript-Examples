// Generic map
// ES 5 solution
class MyMap {
    constructor() {
        this.internalMap = {};
    }
    setItem(key, item) {
        this.internalMap[key] = item;
    }
    getItem(key) {
        return this.internalMap[key];
    }
    clear() {
        this.internalMap = {};
    }
    printMap() {
        for (let key in this.internalMap) {
            console.log(key, this.internalMap[key]);
        }
    }
}
// ES 6 solution
class MyMapES6 {
    constructor() {
        this.internalMap = new Map();
    }
    setItem(key, item) {
        this.internalMap.set(key, item);
    }
    getItem(key) {
        return this.internalMap.get(key);
    }
    clear() {
        this.internalMap.clear();
    }
    printMap() {
        console.log(this.internalMap);
    }
}
/*
Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair

getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
*/
// The map should be usable like shown below:
const numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
console.log(numberMap.getItem('apples'));
numberMap.clear();
numberMap.printMap();
const stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
console.log(stringMap.getItem('name'));
stringMap.clear();
stringMap.printMap();
// ES6
const numberMapES6 = new MyMapES6();
numberMapES6.setItem('apples', 5);
numberMapES6.setItem('bananas', 10);
numberMapES6.printMap();
console.log(numberMapES6.getItem('apples'));
numberMapES6.clear();
numberMapES6.printMap();
const stringMapES6 = new MyMapES6();
stringMapES6.setItem('name', "Max");
stringMapES6.setItem('age', "27");
stringMapES6.printMap();
console.log(stringMapES6.getItem('name'));
stringMapES6.clear();
stringMapES6.printMap();
//# sourceMappingURL=app.js.map