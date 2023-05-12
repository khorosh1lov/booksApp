import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [boolean, setBoolean] = useState(true);

    useEffect(() => {
		document.title = `Clicked ${count} times, boolean is ${boolean} `;
        
	}, [count, boolean]);

    return (
		<div className="counter">
			<p>Clicked {count} times</p>

			<button onClick={() => setBoolean(!boolean)}>Change boolean</button>

			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

export default Counter;