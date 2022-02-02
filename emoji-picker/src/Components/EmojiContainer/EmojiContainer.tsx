import { EmojiRow } from "../EmojiRow/EmojiRow";

interface IProps {
  emojies: [
    {
      title: string;
      symbol: string;
      keywords: string;
    }
  ];
}

export const EmojiContainer = ({ emojies }: IProps) => {
  return emojies.map((item) => {
    return <EmojiRow emoji={item} />;
  });
};
