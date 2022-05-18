// generic search function will be used throughout the entire app
export default function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean {

  // return search results when the user did not type anything yet
  if (query === "") {
      return true;
  }

  return properties.some((property) => {
      const value = object[property]

      if (typeof value === "string" || typeof value === "number") {
          if (shouldBeCaseSensitive) {
            return value.toString().includes(query)
          } else {
            return value.toString().toLowerCase().includes(query.toLowerCase())
          }
      }
  })

}
