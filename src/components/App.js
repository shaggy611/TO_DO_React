import './App.css';
import './normalize.css';
import AppHeader from './header';
import Note from './note'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
              <AppHeader />
          </div>
        </div>
      </div>

      <div className="container-fluid notes-block-margin">
        <div className="row">
            <Note />

        </div>
      </div>
    </div>
  );
}

export default App;
