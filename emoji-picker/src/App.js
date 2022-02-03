import { useState } from "react";
import "./App.css";
import { Form } from "./Components/Form/Form";
import { EmojiContainer } from "./Components/EmojiContainer/EmojiContainer";
import emojies from "./emoji.json";

function App() {
  const [emojiesList, setEmojiesList] = useState(emojies);

  const onChangeText = (value) => {
    const filteredEmojies = emojies.filter((item) => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      if (item.keywords.toLowerCase().includes(value.toLowerCase())) {
        return true;
      }

      return false;
    });

    setEmojiesList(filteredEmojies);
  };

  return (
    <div className="App">
      <Form onChangeText={onChangeText} />

      {emojiesList.length !== 0 ? (
        <EmojiContainer emojies={emojiesList} />
      ) : (
        <p>there are no such emojies</p>
      )}
    </div>
  );
}

export default App;
