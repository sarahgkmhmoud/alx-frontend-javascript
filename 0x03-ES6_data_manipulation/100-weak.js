export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
    if (count >= 5) {
      throw Error('Endpoint load is high');
    }
  } else {
    weakMap.set(endpoint, 1);
  }
}
