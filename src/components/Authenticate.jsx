import {useState} from "react";

export default function Authenticate({token, setToken})
{
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const handleClick = async() => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }   
           }
        ).then(res => res.json());
        setSuccessMessage(response.message);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Authenticate!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}