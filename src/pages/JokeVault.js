import React, { useState } from 'react';

function JokeVault() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any');
      const data = await response.json();
      if (data.type === 'single') {
        setJoke(data.joke);
      } else {
        setJoke(`${data.setup} ... ${data.delivery}`);
      }
    } catch (error) {
      setJoke('Oops! Could not fetch a joke at the moment.');
    }
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-4xl font-heading font-bold text-primary mb-4">Joke Vault</h2>
      <div className="bg-background border border-primary rounded-lg p-6 shadow-lg mx-4 sm:mx-auto">
        <p className="mb-6">{joke || 'Click the button to get a joke!'}</p>
        <button
          type="button"
          className="bg-accent hover:bg-primary text-background font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          onClick={fetchJoke}
        >
          Generate New Joke
        </button>
      </div>
    </div>
  );
}

export default JokeVault;
