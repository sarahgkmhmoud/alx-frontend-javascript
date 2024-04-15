export default function getListStudentIds(newArray) {
  if (!Array.isArray(newArray)) {
    return [];
  }
  const idArray = newArray.map((element) => element.id);
  return idArray;
}
