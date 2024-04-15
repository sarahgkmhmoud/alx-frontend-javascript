export default function getStudentIdsSum(newArray) {
  const sum = newArray.reduce((acc, curr) => acc + curr.id, 0);
  return sum;
}
