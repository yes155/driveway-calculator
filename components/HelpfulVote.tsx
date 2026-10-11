'use client';
import { useState } from 'react';
export default function HelpfulVote() {
  const [vote, setVote] = useState<string | null>(null);
  return (
    <div className="helpful">
      <span>Was this page helpful?</span>
      {vote ? (
        <span role="status">Feedback saved on this device.</span>
      ) : (
        <>
          <button
            onClick={() => {
              setVote('yes');
              try {
                localStorage.setItem('helpful:' + location.pathname, 'yes');
              } catch {}
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setVote('no');
              try {
                localStorage.setItem('helpful:' + location.pathname, 'no');
              } catch {}
            }}
          >
            No
          </button>
        </>
      )}
    </div>
  );
}
