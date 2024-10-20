import React, { useEffect, useState } from 'react';

// Hero Section Component
function HeroSection() {
    return (
      <section className="text-center py-20 bg-background text-offWhite">
        <img 
          src="/logo.png" 
          alt="AIJokeCoin Logo" 
          className="h-20 mx-auto mb-4 spinning-logo" // Added the spinning class here
        />
        <h1 className="text-5xl font-heading font-bold text-primary mb-4">AIJoke Coin 😂</h1>
        <p className="text-lg mb-6">The coin that brings humor to the blockchain!</p>
        <a href="https://example.com/buy-aijokecoin" target="_blank" rel="noopener noreferrer">
          <button className="bg-accent hover:bg-primary text-background font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Buy AIJoke Coin
          </button>
        </a>
      </section>
    );
  }  
  

// Features Section Component
function FeaturesSection() {
  return (
    <section className="py-16 bg-background text-offWhite">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-primary text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background border border-primary rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">AI-Generated Jokes</h3>
            <p>Each transaction mints a unique joke that adds laughter to your wallet.</p>
          </div>
          <div className="bg-background border border-primary rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Joke Vault</h3>
            <p>Access a collection of hilarious jokes, rated by users.</p>
          </div>
          <div className="bg-background border border-primary rounded-lg p-6 shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Feedback and Suggestions</h3>
            <p>Help us improve! Share your ideas to make AIJokeCoin even better.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Joke of the Day Section Component
function JokeOfTheDaySection() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
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

    fetchJoke();
  }, []);

  return (
    <section className="py-16 bg-background text-offWhite text-center">
      <h2 className="text-4xl font-heading font-bold text-primary mb-8">Joke of the Day</h2>
      <div className="bg-background border border-primary rounded-lg p-6 shadow-lg inline-block">
        <p className="mb-6">{joke || 'Loading...'}</p>
      </div>
    </section>
  );
}

// Get Involved Section Component
function GetInvolvedSection() {
  return (
    <section className="py-16 bg-background text-offWhite">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold text-primary mb-8">Get Involved</h2>
        <p className="text-lg mb-8">Discover the features of AIJokeCoin and contribute your thoughts to help us enhance the experience!</p>
        <a href="https://example.com/buy-aijokecoin" target="_blank" rel="noopener noreferrer">
          <button className="bg-accent hover:bg-primary text-background font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Buy AIJoke Coin Now
          </button>
        </a>
      </div>
    </section>
  );
}

// Home Page Component
function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <JokeOfTheDaySection />
      <GetInvolvedSection /> {/* Updated section focused on exploration and feedback */}
    </div>
  );
}

export default Home;
