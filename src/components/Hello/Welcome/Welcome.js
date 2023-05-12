
function Welcome({ isLoggedIn }) {
	if (isLoggedIn) {
        return (
            <h1>Welcome Back!</h1>
        )
    } else {
        return <h1>Please, SignUp!</h1>;
    }
}

export default Welcome;
