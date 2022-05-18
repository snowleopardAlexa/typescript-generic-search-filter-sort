// react pure function component
import * as React from "react";

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>("")
  const debounceQuery = useDebounce(query, 250)

  useEffect(() => {
    if (debounceQuery !== "") {
        setSearchQuery(debounceQuery)
    }
  })

  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search! Try me!
      </label>
      <input
        id="search"
        className="form-control full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => {
            console.log('firing!')
            setSearchQuery(event.target.value)
        }}
      />
    </>
  );
}
