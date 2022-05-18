import { useState } from 'react';
import './App.css';
import { SearchInput } from './components/SearchInput';
import people from './mock-data/people';
import widgets from './mock-data/widgets';
import genericSearch from './utils/genericSearch';

function App() {
  const [query, setQuery] = useState<string>("")

  return (
    <div className="App">
      <SearchInput setSearchQuery={setQuery} />
      <h2>Widgets:</h2>
      {widgets.filter((widget) => genericSearch(widget, ["title", "description"], query, false)).map(widget => {
        return (
          <h3>{widget.title}</h3>
        )
      })}
      <h2>People:</h2>
      {people.filter((person) => genericSearch(person, ["firstName", "lastName"], query, false)).map(person => {
        return (
          <h3>{person.firstName} {person.lastName}</h3>
        )
      })}
    </div>
  );
}

export default App;
