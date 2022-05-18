// react pure function component
import { useState, useEffect} from "react";
import useDebounce from "../hooks/useDebounce";

export interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

export function SearchInput(props: ISearchInputProps) {
  const { setSearchQuery } = props;
  const [query, setQuery] = useState<string>("")
  const debouncedQuery = useDebounce(query, 250)

  useEffect(() => {
    if (debouncedQuery !== "") {
        setSearchQuery(debouncedQuery)
    }
  }, [debouncedQuery, setSearchQuery])

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
            setSearchQuery(event.target.value)
        }}
      />
    </>
  );
}
