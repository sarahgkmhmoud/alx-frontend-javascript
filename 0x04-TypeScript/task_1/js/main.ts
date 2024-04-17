interface Teacher {
    readonly firstName : string;
    readonly lastName : string;
    fullTimeEmployee : number;
    yearsOfExperience ?: number;
    location : string;
    contract: boolean;
    [propName : string]: any;
}

interface Directors extends Teacher {
    numberOfReports : number;
}

function printTeacher (firstName: string, lastName:string){
    return `${firstName[0]}. ${lastName}`
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface constructorClass {
    new (firstName : string,  lastName: string): StudentClassinterface;
}

interface StudentClassinterface {
    workOnHomework():string;
    displayName(): string 
}

const StudentClass : constructorClass = class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName : string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    };
    workOnHomework():string {
        return `Currently working`;
    }
    displayName(): string {
        return this.firstName;
    }
};

export { printTeacher, StudentClass };