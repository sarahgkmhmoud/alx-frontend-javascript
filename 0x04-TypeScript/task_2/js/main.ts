interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() : string{
        return `Working from home`;
    }
    getCoffeeBreak() : string{
        return `Getting a coffee break`;
    }
    workDirectorTasks() : string {
        return `Getting to director tasks`;
    }

}

class Teacher implements TeacherInterface {
    workFromHome() : string{
        return `Working from home`;
    }
    getCoffeeBreak() : string{
        return `Getting a coffee break`;
    }
    workTeacherTasks() : string {
        return `Getting to director tasks`;
    }

}

function createEmployee(salary :number| string ): Director | Teacher {
    if (typeof salary === 'number' && salary < 500){
        return new Teacher();
    }else {
        return new Director();
    }
}

function isDirector(employee : Teacher| Director): boolean{
    return employee instanceof Director;
}

function executeWork(employee : Teacher| Director): string{
    if (employee instanceof Director){
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher){
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass : Subjects): string{
    if (todayClass === "Math"){
       return  `Teaching Math`;
    } else {
        return `Teaching History`;
    }

}