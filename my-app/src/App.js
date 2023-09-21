import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className={css.App}>
      {<Sidebar />}

      <StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Alex"/>
    </div>
  );
}

export default App;