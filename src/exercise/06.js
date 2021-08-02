// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const firstNameEle = React.useRef()
  const usernameEle = React.useRef()

  const [error, setError] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    {
      const firstName = firstNameEle.current.value
      const username = usernameEle.current.value

      onSubmitUsername(firstName, username)
    }
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()

    setError(isLowerCase ? null : 'Username must be lower case!')
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input id="firstName" ref={firstNameEle} type="text" maxLength="10" />
      </div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={usernameEle}
          onChange={handleChange}
          name="username"
          type="text"
          maxLength="10"
        />
      </div>
      <p style={{color: 'red', fontSize: '20'}}>{error}</p>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = (firstName, username) =>
    alert(`
  Welcome dear ${firstName}
  Your username is : ${username}
  
  `)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
