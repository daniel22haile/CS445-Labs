
//todo - using typescript class 
class BaseObject {
    width: number;
    length: number;
    constructor(width: number, length: number){
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super(width, length)
       
    }
    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(4, 5);
console.log(rectangle.calcSize())

