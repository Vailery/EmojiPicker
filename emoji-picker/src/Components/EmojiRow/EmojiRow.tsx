export interface IEmoji {
  emoji: {
    title: string;
    symbol: string;
    keywords: string;
  };
}

export const EmojiRow = ({ emoji }: IEmoji) => {
  return (
    <p>
      {emoji.symbol} {emoji.title}
    </p>
  );
};
