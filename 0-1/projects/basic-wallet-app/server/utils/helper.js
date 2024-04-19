export const getAvatarName = name => {
  const words = name.split(' ');

  return words.length === 1
    ? words[0].slice(0, 2)
    : words[0][0] + words[words.length - 1][0];
};
