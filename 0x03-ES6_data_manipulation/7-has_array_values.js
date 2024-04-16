export default function hasValuesFromArray(Set, Array) {
  return Array.every((element) => Set.has(element));
}
