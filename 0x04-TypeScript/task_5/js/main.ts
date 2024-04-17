interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}


function sumMajorCredits(subject1:MajorCredits,subject2:MinorCredits ){
    return subject1.credits + subject2.credits;
}
function sumMinorCredits(subject1:MajorCredits,subject2:MinorCredits ){
    return subject1.credits + subject2.credits;
}