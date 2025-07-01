import React from 'react'
import Tweet from './Tweet';

export default function TweetList({tweets, onLike}) {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
    </div>
  );
}
