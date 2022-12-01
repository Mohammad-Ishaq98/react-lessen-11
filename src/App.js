import Bracket from "./Components/Bracket";
import Emoji from "./Components/Composition/Emoji";
import Text from "./Components/Composition/Text";

function App() {
  return (
    <Emoji>
      {({ addEmoji }) => (
          <Bracket>
              {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
          </Bracket>
      )}
    </Emoji>
  );
}

export default App;

