import {useState} from "react";

export default function SignUpForm({token, setToken})
{

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {username: username, password: password}
      const options = {method: 'POST', headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)}
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", options).then(res => res.json());
      console.log(response);
      setToken(response.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          Password: <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}