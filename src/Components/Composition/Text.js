import Bracket from "../Bracket";

export default function Text ({addEmoji, addBracket}) {

  let text = `I'm a prgoramming Boy.`;
  if (addEmoji) {
    text = addEmoji(text, '😜')
  }
  if(addBracket) {
    text = addBracket(text)
  }
  return <div className="">{text}</div>
} 