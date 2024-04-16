export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const specificArray = getListStudents.filter((student) => student.location === city);
  const updateStudent = specificArray.map((student) => {
    const newgrad = newGrades.find((grade) => grade.id === student.id);
    if (newgrad) {
      return { ...student, grade: newgrad.grade };
    }
    return student;
  });
  return updateStudent;
}
