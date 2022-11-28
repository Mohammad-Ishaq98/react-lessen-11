
import Emoji from "./Inheritence/Emoji";

export default class Text extends Emoji {
  constructor(props) {
    super(props)
  }

  render() {
    const decoredtedText = this.addEmoji(`I'm a react boy`, `😜`);
    return super.render(decoredtedText)
  }
}