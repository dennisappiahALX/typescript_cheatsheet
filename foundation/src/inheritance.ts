class Person {
    constructor (public firstName: string, public lastName: string) {
    }

    getfullName () : string {
        return this.firstName + this.lastName
    }

    walk() : void {
        console.log('walk')
    }
}

class Student extends Person {
    constructor (public studentId : number, firstName : string, lastName: string) {
        super(firstName, lastName)
    }

    takeTest () : void {
        console.log('take test')
    }
}

// Method overriding - changing implementation of a method

class Teacher extends Person {

   override getfullName () : string {
        return "professor" + super.getfullName
    }

}

let teacher = new Teacher("Abena", "Oforiwaa")
console.log(teacher.getfullName)
