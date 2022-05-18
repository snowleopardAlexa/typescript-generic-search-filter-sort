import './App.css';
import people from './mock-data/people';
import widgets from './mock-data/widgets';

function App() {
  const query = ""
  return (
    <div className="App">
      <h2>Widgets:</h2>
      {widgets.filter((widegt) => genericSearch(widget, ["title", "description"], query)).map(widget => {
        return (
          <h3>{widget.title}</h3>
        )
      })}
      <h2>People:</h2>
      {people.map(person => {
        return (
          <h3>{person.firstName} {person.lastName}</h3>
        )
      })}
    </div>
  );
}

export default App;
