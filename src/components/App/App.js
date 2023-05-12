import './App.css';

import Counter from '../Counter/Counter';
import Hello from '../Hello/Hello';

function App() {
  const infoObj = { title: 'Developer', age: 33 };
  const namesArr = ['Alexander', 'Sergey', 'Maria'];

  return (
		<div className="app">
			<h1>Application</h1>

			<Hello info={infoObj} names={namesArr} />

      <Counter />
		</div>
  );
}

export default App;
