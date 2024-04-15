export default function getStudentsByLocation(newArray, city) {
  const location = newArray.filter((newArray) => newArray.location === city);
  return location;
}
