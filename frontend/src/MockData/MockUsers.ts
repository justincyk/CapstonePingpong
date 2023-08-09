import { User } from "../User/User.ts";

export const MockUsers = [
  new User({
    id: 1,
    firstName: "Justin",
    lastName: "K",
    nickname: "one",
    password: "1",
    wins: 20,
    loses: 1,
    rank: 1,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 21,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "three",
        matchId: 24,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 2,
    firstName: "BJ",
    lastName: "K",
    nickname: "two",
    password: "1",
    wins: 19,
    loses: 2,
    rank: 2,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "two",
        loser: "three",
        matchId: 51,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "two",
        loser: "four",
        matchId: 81,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 3,
    firstName: "Alan",
    lastName: "K",
    nickname: "three",
    password: "1",
    wins: 18,
    loses: 3,
    rank: 3,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 91,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "three",
        matchId: 65,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 4,
    firstName: "Andrew",
    lastName: "K",
    nickname: "four",
    password: "1",
    wins: 17,
    loses: 4,
    rank: 4,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 55,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "three",
        matchId: 44,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 5,
    firstName: "Tim X",
    lastName: "K",
    nickname: "five",
    password: "1",
    wins: 16,
    loses: 5,
    rank: 5,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 33,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 22,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 6,
    firstName: "Tim O",
    lastName: "K",
    nickname: "six",
    password: "1",
    wins: 15,
    loses: 6,
    rank: 6,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 88,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 99,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 7,
    firstName: "Aanand",
    lastName: "K",
    nickname: "sev",
    password: "1",
    wins: 14,
    loses: 7,
    rank: 7,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 27,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 39,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 8,
    firstName: "Marcus",
    lastName: "K",
    nickname: "eight",
    password: "1",
    wins: 13,
    loses: 8,
    rank: 8,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 48,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 49,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 9,
    firstName: "Seth",
    lastName: "K",
    nickname: "nine",
    password: "1",
    wins: 12,
    loses: 9,
    rank: 9,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 32,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 4,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 10,
    firstName: "Ed",
    lastName: "K",
    nickname: "ten",
    password: "1",
    wins: 11,
    loses: 10,
    rank: 10,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 5,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 6,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 11,
    firstName: "Jason",
    lastName: "K",
    nickname: "el",
    password: "1",
    wins: 10,
    loses: 11,
    rank: 11,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 7,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 18,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 12,
    firstName: "Shelby",
    lastName: "K",
    nickname: "twelve",
    password: "1",
    wins: 9,
    loses: 12,
    rank: 12,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 19,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 11,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 13,
    firstName: "Bob",
    lastName: "Burger",
    nickname: "thirteen",
    password: "1",
    wins: 0,
    loses: 0,
    rank: 13,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 12,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 13,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 14,
    firstName: "Gandalf",
    lastName: "G",
    nickname: "fourteen",
    password: "1",
    wins: 2,
    loses: 0,
    rank: 14,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 14,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 15,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
  new User({
    id: 15,
    firstName: "Owala",
    lastName: "P",
    nickname: "fifteen",
    password: "1",
    wins: 9,
    loses: 12,
    rank: 12,
    history: [
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 61,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
      {
        matchDate: new Date().toDateString(),
        winner: "one",
        loser: "two",
        matchId: 71,
        winnerEloChange: 10,
        loserEloChange: -10,
      },
    ],
  }),
];