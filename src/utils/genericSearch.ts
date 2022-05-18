// generic search function will be used throughout the entire app
export default function genericSearch<T>(object: T, properties: Array<keyof T>, query: string): boolean {
  const value = object[property]

  if (typeof value === "string" || typeof value === "number") {
      return value.toString().includes(query)
  }
  return false
}

