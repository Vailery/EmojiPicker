import { IEmoji } from "../EmojiContainer/EmojiContainer";
export interface IProps {
  emoji: IEmoji;
}

export const EmojiRow = ({ emoji }: IProps) => {
  return (
    <p>
      {emoji.symbol} {emoji.title}
    </p>
  );
};
