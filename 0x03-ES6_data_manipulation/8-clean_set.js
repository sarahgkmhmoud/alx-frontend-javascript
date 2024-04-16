export default function cleanSet(Set, String) {
  const filtervalue = [];
  if (
    typeof Set !== 'object'
        || typeof String !== 'string'
        || String.length === 0
  ) {
    return '';
  }
  for (const item of Set) {
    if (item.startsWith(String)) {
      filtervalue.push(item.slice(String.length));
    }
  }
  return filtervalue.join('-');
}
