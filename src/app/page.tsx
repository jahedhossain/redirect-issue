'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userAgent, setUserAgent] = useState<string | null>(null);

  useEffect(() => {
    setUserAgent(navigator.userAgent);
  }, []);

  const redirectUrl = () => {
    try {
      window.location.assign('https://www.google.com');
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  const redirectUrl2 = () => {
    try {
      window.location.href = 'https://www.google.com';
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  const redirectUrl3 = () => {
    try {
      window.open('https://www.google.com', '_blank');
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <h1>
        <button onClick={redirectUrl}>On Click 1</button> <br />
        <br />
        <button onClick={redirectUrl2}>On Click 2</button>
        <br /> <br />
        <button onClick={redirectUrl3}>On Click 3</button>
        <br /> <br />
        {errorMessage && <p>{JSON.stringify(errorMessage, null, 2)}</p>}
        {userAgent && (
          <p
            onClick={() => {
              navigator.clipboard.writeText(userAgent);
              alert('User Agent copied to clipboard');
            }}
          >
            User Agent: <code>{userAgent}</code>
          </p>
        )}
      </h1>
    </div>
  );
}
