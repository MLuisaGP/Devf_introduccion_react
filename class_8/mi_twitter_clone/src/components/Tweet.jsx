import React from 'react'

export default function Tweet({tweet,onLike}) {
  return (
    <div className="tweet">
      <p>{tweet.text}</p>

      <button onClick={() => onLike(tweet.id)}>❤ {tweet.likes}</button>
    </div>
  );
}
