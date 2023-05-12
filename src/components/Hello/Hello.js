import './Hello.css';

import Welcome from './Welcome/Welcome';

function Hello({ info, names } = {}) {
	return (
		<div className="hello">
			<h2 className="title">Hello, {info.age}</h2>

			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))}
			</ul>

			<Welcome isLoggedIn={true} />
		</div>
	);
}

export default Hello;