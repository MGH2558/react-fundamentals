// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {

  const firstNameRef = React.useRef();

  const [result, setResult] = React.useState('');
  const [username, setUsername] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault()

    const firstName = firstNameRef.current.value;
    onSubmitUsername(firstName, username);
  }

  function handleChange(event) {
    const { value } = event.target;
    const inpValue = value.toLowerCase();
    setUsername(inpValue);
    setResult(inpValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" ref={firstNameRef} type="text" />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" onChange={handleChange} name="username" type="text" value={username} />
      </div>
      <h3>{result}</h3>
      <button type="submit"> Submit </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (firstName, username) => alert(`Welcome dear ${firstName} Your username is : ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
