import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text, emoji) =>  `${emoji} ${text} ${emoji}`

  render (override) {
    let text = `I'm the emoji component!!`;

    if(override) text = override;

    return (
      
        <div className="">{text}</div>
      
    )
  }
}