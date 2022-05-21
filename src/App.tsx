import { useState } from "react";
import "./App.css";
import { PeopleRenderer } from "./components/renderers/PeopleRenderer";
import { WidgetRenderer } from "./components/renderers/WidgetRenderer";
import { SearchInput } from "./components/SearchInput";
import { Sorters } from "./components/Sorters";
import IPerson from "./interfaces/IPerson";
import IProperty from "./interfaces/IProperty";
import IWidget from "./interfaces/IWidget";
import people from "./mock-data/people";
import widgets from "./mock-data/widgets";
import genericSearch from "./utils/genericSearch";
import genericSort from "./utils/genericSort";

function App() {
  const [query, setQuery] = useState<string>("");
  const [showPeople, setShowPeople] = useState<boolean>(false)
  const [widgetSortProperty, setWidgetSortProperty] = useState<IProperty<IWidget>>({ property: "title", isDescending: true })
  const [peopleSortProperty, setPeopleSortProperty] = useState<IProperty<IPerson>>({ property: "firstName", isDescending: true})
  const buttonText = showPeople ? "Show widgets" : "Show people"

  return (
    <div className="App">
      <button className="btn btn-primary" onClick={() => setShowPeople(!showPeople)}>{buttonText}</button>
      <SearchInput
        setSearchQuery={(query) => {
          console.log("I am firing");
          setQuery(query);
        }}
      />
      <h2>Widgets:</h2>
      <Sorters 
        setProperty={(propertyType) => {
        setWidgetSortProperty(propertyType)
      }} object={widgets[0]} />
      {widgets
        .filter((widget) =>
          genericSearch(widget, ["title", "description"], query, false)
        )
        // comparision function 
        .sort((a, b) => 
          genericSort(a, b, widgetSortProperty)
        )
        .map((widget) => {
          return <WidgetRenderer {...widget} />;
        })}
      <h2>People:</h2>
      <Sorters setProperty={(propertyType) => {
        setPeopleSortProperty(propertyType)
      }} object={people[0]} />
      {people
        .filter((person) =>
          genericSearch(person, ["firstName", "lastName"], query, false)
        )
        .sort((a, b) => genericSort(a, b, peopleSortProperty))
        .map((person) => {
          return (
            <h3>
              <PeopleRenderer {...person} />
            </h3>
          );
        })}
      </div>
  );
}

export default App;
