export class Matches {
  id: number | undefined;
  winner: number | undefined;
  loser: number | undefined;
  matchDate: string | undefined;

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.wins) this.winner = initializer.winner;
    if (initializer.loses) this.loser = initializer.loser;
    if (initializer.matchDate) this.matchDate = initializer.matchDate;
  }
}
