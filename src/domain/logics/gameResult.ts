export const gameResult = (player: number, dealer: number) => {
  const playerScore = player <= 21 ? 21 - player : 100;
  const dealerScore = dealer <= 21 ? 21 - dealer : 100;

  if (playerScore < dealerScore) return 'WIN';
  if (playerScore > dealerScore) return 'LOSE';
  return 'LOSE';
};
