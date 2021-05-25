

// function University(name, dept) {
//     this.name = name;
//     this.dept = dept;
//     this.graduation = function(year) {
//         console.log(`Graduating ${this.dept} ${year} students`);
//     }
// }
// var miu = new Univeristy("MIU", "Computer Science");
// miu.graduation(2019);
class Univeristy{
    name;
    dept;
    constructor(name: string, dept: string, ){
        this.name = name;
        this.dept = dept;
    }
        graduation(year: number){
            console.log(`Graduation ${this.dept} ${year} students`);
        }  
    
};
let miu = new Univeristy("MIU", "Computer science");
miu.graduation(2019);


//TODO - method 2
class Univeristy2{
   
    constructor(public name: string, private dept: string, ){
     
    }
        graduation(year: number){
            console.log(`Graduation ${this.dept} ${year} students`);
        }  
    
};
let miu2 = new Univeristy2("MIU", "Computer science");
miu.graduation(2019);