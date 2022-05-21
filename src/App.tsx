import { useState } from "react";
import "./App.css";
import { SearchInput } from "./components/SearchInput";
import IProperty from "./interfaces/IProperty";
import IWidget from "./interfaces/IWidget";
import people from "./mock-data/people";
import widgets from "./mock-data/widgets";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";

function App() {
  const [query, setQuery] = useState<string>("");
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: "title" })
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({ property: "firstName"})

  return (
    <div className="App">
      <SearchInput
        setSearchQuery={(query) => {
          console.log("I am firing");
          setQuery(query);
        }}
      />
      <h2>Widgets:</h2>
      {widgets
        .filter((widget) =>
          genericSearch(widget, ["title", "description"], query, false)
        )
        // comparision function 
        .sort((a, b) => 
          genericSort(a, b, widgetSortProperty.property)
        )
        .map((widget) => {
          return <h3>{widget.title}</h3>;
        })}
      <h2>People:</h2>
      {people
        .filter((person) =>
          genericSearch(person, ["firstName", "lastName"], query, false)
        )
        .sort((a, b) => genericSort(a, b, peopleSortProperty.property))
        .map((person) => {
          return (
            <h3>
              {person.firstName} {person.lastName}
            </h3>
          );
        })}
    </div>
  );
}

export default App;
