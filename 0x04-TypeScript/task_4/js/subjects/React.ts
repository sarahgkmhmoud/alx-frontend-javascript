/// <reference path="Teacher.ts" />

namespace Subjects {
    export interface  Teacher{
        experienceTeachingReact?: number;
    }
    export class React extends Subject {
        getRequirements(): string{
            return `Here is the list of requirements for React`;
        }
        getAvailableTeacher(): string{
            const xp = this.teacher.experienceTeachingReact;
        if (xp > 0){
            return `Available Teacher: ${this.teacher.firstName}`;
        } else {
            return `No available teacher`;
        }
    }

}