/** @format */

export const initialData = {
  players: {
    "player-1": { id: "player-1", name: "Crisiano Ronaldo" },
    "player-2": { id: "player-2", name: "Leonardo Bonucci" },

    "player-3": { id: "player-3", name: "Gianluigi Buffon" },
    "player-4": { id: "player-4", name: "Krzistof Piastek" },

    "player-5": { id: "player-5", name: "Mohamed Salah" },
    "player-6": { id: "player-6", name: "Roberto Firmino" },

    "player-7": { id: "player-7", name: " Son Heung-min" },
    "player-8": { id: "player-8", name: "Dele Alli" },
  },
  clubs: {
    "club-1": {
      id: "club-1",
      leagueId: "league-1",
      title: "FC Juventus",
      playerIds: ["player-1", "player-2"],
    },
    "club-2": {
      id: "club-2",
      leagueId: "league-1",
      title: "AC Milan",
      playerIds: ["player-3", "player-4"],
    },
    "club-3": {
      id: "club-3",
      leagueId: "league-2",
      title: "FC Liverpool",
      playerIds: ["player-5", "player-6"],
    },
    "club-4": {
      id: "club-4",
      leagueId: "league-2",
      title: "Tottenhem Hotspur",
      playerIds: ["player-7", "player-8"],
    },
  },
  leagues: [
    {
      id: "league-1",
      title: "Seria A",
      clubIds: ["club-1", "club-2"],
    },
    {
      id: "league-2",
      title: "Premier Ligaue",
      clubIds: ["club-3", "club-4"],
    },
  ],
  clubOrder: ["club-1", "club-2", "club-3", "club-4"],
};
