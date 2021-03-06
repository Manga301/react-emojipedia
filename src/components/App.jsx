import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function emojiDetail(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(emojiDetail)}</dl>
    </div>
  );
}

export default App;
