import { EmojiRow } from "../EmojiRow/EmojiRow";

export interface IEmoji {
  title: string;
  symbol: string;
  keywords: string;
}
interface IProps {
  emojies: [IEmoji];
}

export const EmojiContainer = ({ emojies }: IProps) => {
  return emojies.map((item) => {
    return <EmojiRow emoji={item} />;
  });
};
