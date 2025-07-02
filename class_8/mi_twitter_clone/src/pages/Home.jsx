import { useEffect } from "react";
import { useState } from "react";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { Header } from "../components/Header";


export default function Home() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    const storedTweets = JSON.parse(localStorage.getItem("tweets")) || [];

    setTweets(storedTweets);
  }, []);
  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };
  const likeTweet = (id) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
      )
    );
  };
  return (
    <>
      <Header />
    <div>
      <TweetForm onAddTweet={addTweet} />

      <TweetList tweets={tweets} onLike={likeTweet} />
    </div>
    </>
  );
}
