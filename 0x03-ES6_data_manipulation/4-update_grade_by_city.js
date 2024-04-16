export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const specificArray = getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newgrad = newGrades.find((grade) => grade.studentId === student.id);
      if (newgrad) {
        return { ...student, grade: newgrad.grade };
      }
      return { ...student, grade: 'N/A' };
    });
  return specificArray;
}
