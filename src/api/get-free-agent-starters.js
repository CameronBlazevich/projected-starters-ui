import axios from "axios"
import { createErrorResponse, createSuccessResponse } from "./api-response";

export default async function getData(token, leagueId) {
    if (!token && leagueId) {
        return createSuccessResponse(mockData);
    }
    try {
        // return createSuccessResponse(mockData)

        const baseUrl = process.env.REACT_APP_API_URL;
        // console.log(`calling getData with token: ${token}`)
        const config = {"x-access-token": token};
        const resp = await axios.get(
            `${baseUrl}/getfreeagents/${leagueId}`,
            {headers: config});
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err)
        return createErrorResponse(err);
    }
}


const mockData = [
    {
        "gameDate": "April 20",
        "games": [
            {
                "awayTeam": {
                    "teamAbbr": "COL",
                    "runsScored": 69,
                    "strikeouts": 162,
                    "onBasePercent": ".311",
                    "runsRank": 24,
                    "strikeoutsRank": 10,
                    "wins": 5,
                    "losses": 13
                },
                "homeTeam": {
                    "teamAbbr": "PHI",
                    "runsScored": 82,
                    "strikeouts": 174,
                    "onBasePercent": ".343",
                    "runsRank": 16,
                    "strikeoutsRank": 2,
                    "wins": 7,
                    "losses": 11
                },
                "awayPitcher": {
                    "name": {
                        "full": "Ryan Feltner",
                        "first": "Ryan",
                        "last": "Feltner",
                        "ascii_first": "Ryan",
                        "ascii_last": "Feltner"
                    },
                    "team": "COL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12265",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/W5hFIvqwWwZp6exDzU1jGQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/12265.png",
                    "playerId": "12265",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.1",
                        "era": 8.775,
                        "strikeouts": 15,
                        "whip": 1.95
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "LAD",
                    "runsScored": 96,
                    "strikeouts": 172,
                    "onBasePercent": ".337",
                    "runsRank": 5,
                    "strikeoutsRank": 3,
                    "wins": 9,
                    "losses": 9
                },
                "homeTeam": {
                    "teamAbbr": "CHC",
                    "runsScored": 87,
                    "strikeouts": 134,
                    "onBasePercent": ".346",
                    "runsRank": 9,
                    "strikeoutsRank": 26,
                    "wins": 10,
                    "losses": 6
                },
                "awayPitcher": {
                    "name": {
                        "full": "Michael Grove",
                        "first": "Michael",
                        "last": "Grove",
                        "ascii_first": "Michael",
                        "ascii_last": "Grove"
                    },
                    "team": "LAD",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11332",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/1GTXCK786cS0uTgBSUZ49g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05042022/11332.png",
                    "playerId": "11332",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.0",
                        "era": 9,
                        "strikeouts": 14,
                        "whip": 1.615
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Jameson Taillon",
                        "first": "Jameson",
                        "last": "Taillon",
                        "ascii_first": "Jameson",
                        "ascii_last": "Taillon"
                    },
                    "team": "CHC",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9123",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/pke3odyuWh5z7xwZ3oCvvA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03072023/9123.1.png",
                    "playerId": "9123",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.0",
                        "era": 4.5,
                        "strikeouts": 16,
                        "whip": 1.357
                    }
                }
            }
        ]
    },
    {
        "gameDate": "April 21",
        "games": [
            {
                "awayTeam": {
                    "teamAbbr": "DET",
                    "runsScored": 55,
                    "strikeouts": 154,
                    "onBasePercent": ".279",
                    "runsRank": 30,
                    "strikeoutsRank": 14,
                    "wins": 7,
                    "losses": 9
                },
                "homeTeam": {
                    "teamAbbr": "BAL",
                    "runsScored": 95,
                    "strikeouts": 153,
                    "onBasePercent": ".352",
                    "runsRank": 6,
                    "strikeoutsRank": 15,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Joey Wentz",
                        "first": "Joey",
                        "last": "Wentz",
                        "ascii_first": "Joey",
                        "ascii_last": "Wentz"
                    },
                    "team": "DET",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10426",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/4Bcgmh0MP6epSNwRmpBCyg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04172023/10426.png",
                    "playerId": "10426",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "12.2",
                        "era": 6.395,
                        "strikeouts": 10,
                        "whip": 1.342
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Tyler Wells",
                        "first": "Tyler",
                        "last": "Wells",
                        "ascii_first": "Tyler",
                        "ascii_last": "Wells"
                    },
                    "team": "BAL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12114",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/Bl2zyktqhSkOFO3t_j78zg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03232023/12114.png",
                    "playerId": "12114",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "16.1",
                        "era": 3.857,
                        "strikeouts": 11,
                        "whip": 0.735
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "TOR",
                    "runsScored": 86,
                    "strikeouts": 143,
                    "onBasePercent": ".337",
                    "runsRank": 11,
                    "strikeoutsRank": 22,
                    "wins": 11,
                    "losses": 7
                },
                "homeTeam": {
                    "teamAbbr": "NYY",
                    "runsScored": 76,
                    "strikeouts": 153,
                    "onBasePercent": ".307",
                    "runsRank": 21,
                    "strikeoutsRank": 16,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Yusei Kikuchi",
                        "first": "Yusei",
                        "last": "Kikuchi",
                        "ascii_first": "Yusei",
                        "ascii_last": "Kikuchi"
                    },
                    "team": "TOR",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11263",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/Ha8lW3md75Nyezto3Zh3sQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/11263.png",
                    "playerId": "11263",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "15.1",
                        "era": 4.696,
                        "strikeouts": 17,
                        "whip": 1.239
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "MIA",
                    "runsScored": 57,
                    "strikeouts": 153,
                    "onBasePercent": ".304",
                    "runsRank": 28,
                    "strikeoutsRank": 17,
                    "wins": 10,
                    "losses": 8
                },
                "homeTeam": {
                    "teamAbbr": "CLE",
                    "runsScored": 77,
                    "strikeouts": 134,
                    "onBasePercent": ".320",
                    "runsRank": 19,
                    "strikeoutsRank": 27,
                    "wins": 9,
                    "losses": 9
                },
                "awayPitcher": {
                    "name": {
                        "full": "Braxton Garrett",
                        "first": "Braxton",
                        "last": "Garrett",
                        "ascii_first": "Braxton",
                        "ascii_last": "Garrett"
                    },
                    "team": "MIA",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10513",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/lJy35C5Jg9dp49BV7eDFzA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/10513.png",
                    "playerId": "10513",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.1",
                        "era": 3.375,
                        "strikeouts": 13,
                        "whip": 1.575
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Zach Plesac",
                        "first": "Zach",
                        "last": "Plesac",
                        "ascii_first": "Zach",
                        "ascii_last": "Plesac"
                    },
                    "team": "CLE",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11590",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/L2xbYp7X3pnyZnUl2qA_7A--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/11590.png",
                    "playerId": "11590",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.0",
                        "era": 6.923,
                        "strikeouts": 8,
                        "whip": 1.615
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "OAK",
                    "runsScored": 63,
                    "strikeouts": 160,
                    "onBasePercent": ".304",
                    "runsRank": 26,
                    "strikeoutsRank": 11,
                    "wins": 3,
                    "losses": 15
                },
                "homeTeam": {
                    "teamAbbr": "TEX",
                    "runsScored": 100,
                    "strikeouts": 139,
                    "onBasePercent": ".319",
                    "runsRank": 2,
                    "strikeoutsRank": 25,
                    "wins": 11,
                    "losses": 6
                },
                "awayPitcher": {
                    "name": {
                        "full": "James Kaprielian",
                        "first": "James",
                        "last": "Kaprielian",
                        "ascii_first": "James",
                        "ascii_last": "Kaprielian"
                    },
                    "team": "OAK",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10200",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/Xa9EWiVwW6KU8bUuNrxSIA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03312023/10200.png",
                    "playerId": "10200",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.1",
                        "era": 11.302,
                        "strikeouts": 15,
                        "whip": 2.093
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "WSH",
                    "runsScored": 62,
                    "strikeouts": 110,
                    "onBasePercent": ".318",
                    "runsRank": 27,
                    "strikeoutsRank": 30,
                    "wins": 5,
                    "losses": 12
                },
                "homeTeam": {
                    "teamAbbr": "MIN",
                    "runsScored": 67,
                    "strikeouts": 169,
                    "onBasePercent": ".292",
                    "runsRank": 25,
                    "strikeoutsRank": 6,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Trevor Williams",
                        "first": "Trevor",
                        "last": "Williams",
                        "ascii_first": "Trevor",
                        "ascii_last": "Williams"
                    },
                    "team": "WSH",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10144",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/0_VDE9Ro3aFowXTWn4EWTg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03102023/10144.png",
                    "playerId": "10144",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "15.1",
                        "era": 3.522,
                        "strikeouts": 9,
                        "whip": 1.174
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "STL",
                    "runsScored": 77,
                    "strikeouts": 148,
                    "onBasePercent": ".345",
                    "runsRank": 20,
                    "strikeoutsRank": 21,
                    "wins": 7,
                    "losses": 11
                },
                "homeTeam": {
                    "teamAbbr": "SEA",
                    "runsScored": 82,
                    "strikeouts": 165,
                    "onBasePercent": ".305",
                    "runsRank": 17,
                    "strikeoutsRank": 9,
                    "wins": 8,
                    "losses": 10
                },
                "awayPitcher": {
                    "name": {
                        "full": "Steven Matz",
                        "first": "Steven",
                        "last": "Matz",
                        "ascii_first": "Steven",
                        "ascii_last": "Matz"
                    },
                    "team": "STL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9599",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/YuGhc6ZAhrh14ZXpnvcH4Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03212023/9599.png",
                    "playerId": "9599",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "16.2",
                        "era": 6.48,
                        "strikeouts": 17,
                        "whip": 1.8
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "NYM",
                    "runsScored": 83,
                    "strikeouts": 125,
                    "onBasePercent": ".336",
                    "runsRank": 14,
                    "strikeoutsRank": 29,
                    "wins": 11,
                    "losses": 7
                },
                "homeTeam": {
                    "teamAbbr": "SF",
                    "runsScored": 74,
                    "strikeouts": 177,
                    "onBasePercent": ".325",
                    "runsRank": 22,
                    "strikeoutsRank": 1,
                    "wins": 5,
                    "losses": 11
                },
                "awayPitcher": {
                    "name": {
                        "full": "Carlos Carrasco",
                        "first": "Carlos",
                        "last": "Carrasco",
                        "ascii_first": "Carlos",
                        "ascii_last": "Carrasco"
                    },
                    "team": "NYM",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/8185",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/AnZdijXmY_l3qFQrS8BULA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04052023/8185.png",
                    "playerId": "8185",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P",
                            "IL"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.2",
                        "era": 8.561,
                        "strikeouts": 8,
                        "whip": 1.61
                    }
                },
                "homePitcher": null
            }
        ]
    },
    {
        "gameDate": "April 22",
        "games": [
            {
                "awayTeam": {
                    "teamAbbr": "WSH",
                    "runsScored": 62,
                    "strikeouts": 110,
                    "onBasePercent": ".318",
                    "runsRank": 27,
                    "strikeoutsRank": 30,
                    "wins": 5,
                    "losses": 12
                },
                "homeTeam": {
                    "teamAbbr": "MIN",
                    "runsScored": 67,
                    "strikeouts": 169,
                    "onBasePercent": ".292",
                    "runsRank": 25,
                    "strikeoutsRank": 6,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Chad Kuhl",
                        "first": "Chad",
                        "last": "Kuhl",
                        "ascii_first": "Chad",
                        "ascii_last": "Kuhl"
                    },
                    "team": "WSH",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10143",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/eCLWAsJxhZuCHXjOrIHpsQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03102023/10143.png",
                    "playerId": "10143",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.2",
                        "era": 8.591,
                        "strikeouts": 9,
                        "whip": 1.705
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "LAD",
                    "runsScored": 96,
                    "strikeouts": 172,
                    "onBasePercent": ".337",
                    "runsRank": 5,
                    "strikeoutsRank": 3,
                    "wins": 9,
                    "losses": 9
                },
                "homeTeam": {
                    "teamAbbr": "CHC",
                    "runsScored": 87,
                    "strikeouts": 134,
                    "onBasePercent": ".346",
                    "runsRank": 9,
                    "strikeoutsRank": 26,
                    "wins": 10,
                    "losses": 6
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Hayden Wesneski",
                        "first": "Hayden",
                        "last": "Wesneski",
                        "ascii_first": "Hayden",
                        "ascii_last": "Wesneski"
                    },
                    "team": "CHC",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12497",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/Bn9pRslxI65d16p.yjVCmQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03242023/12497.png",
                    "playerId": "12497",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.0",
                        "era": 4.154,
                        "strikeouts": 11,
                        "whip": 1.692
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "CIN",
                    "runsScored": 82,
                    "strikeouts": 159,
                    "onBasePercent": ".329",
                    "runsRank": 15,
                    "strikeoutsRank": 12,
                    "wins": 7,
                    "losses": 10
                },
                "homeTeam": {
                    "teamAbbr": "PIT",
                    "runsScored": 85,
                    "strikeouts": 142,
                    "onBasePercent": ".325",
                    "runsRank": 12,
                    "strikeoutsRank": 23,
                    "wins": 11,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Luis Cessa",
                        "first": "Luis",
                        "last": "Cessa",
                        "ascii_first": "Luis",
                        "ascii_last": "Cessa"
                    },
                    "team": "CIN",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10256",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/kMJdz5IK24KxODbOy.yFMg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04112023/10256.png",
                    "playerId": "10256",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "12.0",
                        "era": 13.5,
                        "strikeouts": 3,
                        "whip": 2.75
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Rich Hill",
                        "first": "Rich",
                        "last": "Hill",
                        "ascii_first": "Rich",
                        "ascii_last": "Hill"
                    },
                    "team": "PIT",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/7578",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/Nogsdc2t.THmUphSc65P5Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03272023/7578.png",
                    "playerId": "7578",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "21.0",
                        "era": 5.571,
                        "strikeouts": 15,
                        "whip": 1.333
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "OAK",
                    "runsScored": 63,
                    "strikeouts": 160,
                    "onBasePercent": ".304",
                    "runsRank": 26,
                    "strikeoutsRank": 11,
                    "wins": 3,
                    "losses": 15
                },
                "homeTeam": {
                    "teamAbbr": "TEX",
                    "runsScored": 100,
                    "strikeouts": 139,
                    "onBasePercent": ".319",
                    "runsRank": 2,
                    "strikeoutsRank": 25,
                    "wins": 11,
                    "losses": 6
                },
                "awayPitcher": {
                    "name": {
                        "full": "Shintaro Fujinami",
                        "first": "Shintaro",
                        "last": "Fujinami",
                        "ascii_first": "Shintaro",
                        "ascii_last": "Fujinami"
                    },
                    "team": "OAK",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/60002",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/r4cP5E5ZSObLplx2XDW7IA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03312023/60002.png",
                    "playerId": "60002",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "12.2",
                        "era": 11.368,
                        "strikeouts": 10,
                        "whip": 1.658
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Andrew Heaney",
                        "first": "Andrew",
                        "last": "Heaney",
                        "ascii_first": "Andrew",
                        "ascii_last": "Heaney"
                    },
                    "team": "TEX",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9586",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/oH._XBYr1NZIHvmGydWJxQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/9586.png",
                    "playerId": "9586",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "12.2",
                        "era": 4.974,
                        "strikeouts": 16,
                        "whip": 1.421
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "KC",
                    "runsScored": 56,
                    "strikeouts": 170,
                    "onBasePercent": ".264",
                    "runsRank": 29,
                    "strikeoutsRank": 4,
                    "wins": 4,
                    "losses": 14
                },
                "homeTeam": {
                    "teamAbbr": "LAA",
                    "runsScored": 86,
                    "strikeouts": 151,
                    "onBasePercent": ".330",
                    "runsRank": 10,
                    "strikeoutsRank": 18,
                    "wins": 9,
                    "losses": 8
                },
                "awayPitcher": {
                    "name": {
                        "full": "Zack Greinke",
                        "first": "Zack",
                        "last": "Greinke",
                        "ascii_first": "Zack",
                        "ascii_last": "Greinke"
                    },
                    "team": "KC",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/7257",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/fyTh0nS6r8Nxlppfsm3IZg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/7257.png",
                    "playerId": "7257",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "22.1",
                        "era": 4.03,
                        "strikeouts": 17,
                        "whip": 1.209
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "STL",
                    "runsScored": 77,
                    "strikeouts": 148,
                    "onBasePercent": ".345",
                    "runsRank": 20,
                    "strikeoutsRank": 21,
                    "wins": 7,
                    "losses": 11
                },
                "homeTeam": {
                    "teamAbbr": "SEA",
                    "runsScored": 82,
                    "strikeouts": 165,
                    "onBasePercent": ".305",
                    "runsRank": 17,
                    "strikeoutsRank": 9,
                    "wins": 8,
                    "losses": 10
                },
                "awayPitcher": {
                    "name": {
                        "full": "Miles Mikolas",
                        "first": "Miles",
                        "last": "Mikolas",
                        "ascii_first": "Miles",
                        "ascii_last": "Mikolas"
                    },
                    "team": "STL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9173",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/5ubN5lVVjdEklSjsLnUOQA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03212023/9173.png",
                    "playerId": "9173",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "20.0",
                        "era": 8.1,
                        "strikeouts": 19,
                        "whip": 2.05
                    }
                },
                "homePitcher": null
            }
        ]
    },
    {
        "gameDate": "April 23",
        "games": [
            {
                "awayTeam": {
                    "teamAbbr": "COL",
                    "runsScored": 69,
                    "strikeouts": 162,
                    "onBasePercent": ".311",
                    "runsRank": 24,
                    "strikeoutsRank": 10,
                    "wins": 5,
                    "losses": 13
                },
                "homeTeam": {
                    "teamAbbr": "PHI",
                    "runsScored": 82,
                    "strikeouts": 174,
                    "onBasePercent": ".343",
                    "runsRank": 16,
                    "strikeoutsRank": 2,
                    "wins": 7,
                    "losses": 11
                },
                "awayPitcher": {
                    "name": {
                        "full": "José Ureña",
                        "first": "José",
                        "last": "Ureña",
                        "ascii_first": "José",
                        "ascii_last": "Ureña"
                    },
                    "team": "COL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9931",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/rF9g2Mwx2roMvrPtBJGv0g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/9931.png",
                    "playerId": "9931",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.2",
                        "era": 9.818,
                        "strikeouts": 9,
                        "whip": 2.318
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "CIN",
                    "runsScored": 82,
                    "strikeouts": 159,
                    "onBasePercent": ".329",
                    "runsRank": 15,
                    "strikeoutsRank": 12,
                    "wins": 7,
                    "losses": 10
                },
                "homeTeam": {
                    "teamAbbr": "PIT",
                    "runsScored": 85,
                    "strikeouts": 142,
                    "onBasePercent": ".325",
                    "runsRank": 12,
                    "strikeoutsRank": 23,
                    "wins": 11,
                    "losses": 7
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Vince Velasquez",
                        "first": "Vince",
                        "last": "Velasquez",
                        "ascii_first": "Vince",
                        "ascii_last": "Velasquez"
                    },
                    "team": "PIT",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9992",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/qPedZIIiBZ2c_tka.SnGeA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03272023/9992.png",
                    "playerId": "9992",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "19.1",
                        "era": 5.121,
                        "strikeouts": 17,
                        "whip": 1.5
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "MIA",
                    "runsScored": 57,
                    "strikeouts": 153,
                    "onBasePercent": ".304",
                    "runsRank": 28,
                    "strikeoutsRank": 17,
                    "wins": 10,
                    "losses": 8
                },
                "homeTeam": {
                    "teamAbbr": "CLE",
                    "runsScored": 77,
                    "strikeouts": 134,
                    "onBasePercent": ".320",
                    "runsRank": 19,
                    "strikeoutsRank": 27,
                    "wins": 9,
                    "losses": 9
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Hunter Gaddis",
                        "first": "Hunter",
                        "last": "Gaddis",
                        "ascii_first": "Hunter",
                        "ascii_last": "Gaddis"
                    },
                    "team": "CLE",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12665",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/bsv1vccCNSr2zruVIiqaAA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/12665.png",
                    "playerId": "12665",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "17.2",
                        "era": 7.642,
                        "strikeouts": 12,
                        "whip": 1.585
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "WSH",
                    "runsScored": 62,
                    "strikeouts": 110,
                    "onBasePercent": ".318",
                    "runsRank": 27,
                    "strikeoutsRank": 30,
                    "wins": 5,
                    "losses": 12
                },
                "homeTeam": {
                    "teamAbbr": "MIN",
                    "runsScored": 67,
                    "strikeouts": 169,
                    "onBasePercent": ".292",
                    "runsRank": 25,
                    "strikeoutsRank": 6,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": {
                    "name": {
                        "full": "Patrick Corbin",
                        "first": "Patrick",
                        "last": "Corbin",
                        "ascii_first": "Patrick",
                        "ascii_last": "Corbin"
                    },
                    "team": "WSH",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9168",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/E1wkaM00s_atMXHY5SuWeQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03102023/9168.png",
                    "playerId": "9168",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "20.0",
                        "era": 6.3,
                        "strikeouts": 13,
                        "whip": 1.75
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "OAK",
                    "runsScored": 63,
                    "strikeouts": 160,
                    "onBasePercent": ".304",
                    "runsRank": 26,
                    "strikeoutsRank": 11,
                    "wins": 3,
                    "losses": 15
                },
                "homeTeam": {
                    "teamAbbr": "TEX",
                    "runsScored": 100,
                    "strikeouts": 139,
                    "onBasePercent": ".319",
                    "runsRank": 2,
                    "strikeoutsRank": 25,
                    "wins": 11,
                    "losses": 6
                },
                "awayPitcher": {
                    "name": {
                        "full": "JP Sears",
                        "first": "JP",
                        "last": "Sears",
                        "ascii_first": "JP",
                        "ascii_last": "Sears"
                    },
                    "team": "OAK",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12333",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/nFujoJ5qQY0uQEUdIaaYxQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03312023/12333.png",
                    "playerId": "12333",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "15.2",
                        "era": 4.596,
                        "strikeouts": 12,
                        "whip": 1.085
                    }
                },
                "homePitcher": null
            },
            {
                "awayTeam": {
                    "teamAbbr": "KC",
                    "runsScored": 56,
                    "strikeouts": 170,
                    "onBasePercent": ".264",
                    "runsRank": 29,
                    "strikeoutsRank": 4,
                    "wins": 4,
                    "losses": 14
                },
                "homeTeam": {
                    "teamAbbr": "LAA",
                    "runsScored": 86,
                    "strikeouts": 151,
                    "onBasePercent": ".330",
                    "runsRank": 10,
                    "strikeoutsRank": 18,
                    "wins": 9,
                    "losses": 8
                },
                "awayPitcher": {
                    "name": {
                        "full": "Jordan Lyles",
                        "first": "Jordan",
                        "last": "Lyles",
                        "ascii_first": "Jordan",
                        "ascii_last": "Lyles"
                    },
                    "team": "KC",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/8856",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/UFE02NLAaG0pnhsoi_f_yw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/8856.png",
                    "playerId": "8856",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "25.1",
                        "era": 3.908,
                        "strikeouts": 18,
                        "whip": 1.224
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Tyler Anderson",
                        "first": "Tyler",
                        "last": "Anderson",
                        "ascii_first": "Tyler",
                        "ascii_last": "Anderson"
                    },
                    "team": "LAA",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10031",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/GEAXNhFxM9YwO.44XWJi5g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04172023/10031.png",
                    "playerId": "10031",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.2",
                        "era": 6.75,
                        "strikeouts": 10,
                        "whip": 1.841
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "STL",
                    "runsScored": 77,
                    "strikeouts": 148,
                    "onBasePercent": ".345",
                    "runsRank": 20,
                    "strikeoutsRank": 21,
                    "wins": 7,
                    "losses": 11
                },
                "homeTeam": {
                    "teamAbbr": "SEA",
                    "runsScored": 82,
                    "strikeouts": 165,
                    "onBasePercent": ".305",
                    "runsRank": 17,
                    "strikeoutsRank": 9,
                    "wins": 8,
                    "losses": 10
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Chris Flexen",
                        "first": "Chris",
                        "last": "Flexen",
                        "ascii_first": "Chris",
                        "ascii_last": "Flexen"
                    },
                    "team": "SEA",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/10769",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/k4AYulSo1DU9wqyLBFg8uw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/10769.png",
                    "playerId": "10769",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "17.1",
                        "era": 7.788,
                        "strikeouts": 11,
                        "whip": 1.731
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "NYM",
                    "runsScored": 83,
                    "strikeouts": 125,
                    "onBasePercent": ".336",
                    "runsRank": 14,
                    "strikeoutsRank": 29,
                    "wins": 11,
                    "losses": 7
                },
                "homeTeam": {
                    "teamAbbr": "SF",
                    "runsScored": 74,
                    "strikeouts": 177,
                    "onBasePercent": ".325",
                    "runsRank": 22,
                    "strikeoutsRank": 1,
                    "wins": 5,
                    "losses": 11
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Alex Wood",
                        "first": "Alex",
                        "last": "Wood",
                        "ascii_first": "Alex",
                        "ascii_last": "Wood"
                    },
                    "team": "SF",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/9415",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/PNnE9ZEe5TBgWaexq3WCSg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03232023/9415.png",
                    "playerId": "9415",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "10.0",
                        "era": 1.8,
                        "strikeouts": 11,
                        "whip": 1.4
                    }
                }
            }
        ]
    },
    {
        "gameDate": "April 24",
        "games": [
            {
                "awayTeam": {
                    "teamAbbr": "COL",
                    "runsScored": 69,
                    "strikeouts": 162,
                    "onBasePercent": ".311",
                    "runsRank": 24,
                    "strikeoutsRank": 10,
                    "wins": 5,
                    "losses": 13
                },
                "homeTeam": {
                    "teamAbbr": "CLE",
                    "runsScored": 77,
                    "strikeouts": 134,
                    "onBasePercent": ".320",
                    "runsRank": 19,
                    "strikeoutsRank": 27,
                    "wins": 9,
                    "losses": 9
                },
                "awayPitcher": {
                    "name": {
                        "full": "Austin Gomber",
                        "first": "Austin",
                        "last": "Gomber",
                        "ascii_first": "Austin",
                        "ascii_last": "Gomber"
                    },
                    "team": "COL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11006",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/sB1X09FRbsQmzbz6E9uIwA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/11006.png",
                    "playerId": "11006",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "RP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "14.1",
                        "era": 8.163,
                        "strikeouts": 11,
                        "whip": 1.605
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "Peyton Battenfield",
                        "first": "Peyton",
                        "last": "Battenfield",
                        "ascii_first": "Peyton",
                        "ascii_last": "Battenfield"
                    },
                    "team": "CLE",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/12402",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/cmEgW6r0VVjfqW8pt2DqGQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/12402.png",
                    "playerId": "12402",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "16.2",
                        "era": 1.08,
                        "strikeouts": 8,
                        "whip": 0.6
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "BOS",
                    "runsScored": 96,
                    "strikeouts": 150,
                    "onBasePercent": ".324",
                    "runsRank": 4,
                    "strikeoutsRank": 20,
                    "wins": 9,
                    "losses": 9
                },
                "homeTeam": {
                    "teamAbbr": "BAL",
                    "runsScored": 95,
                    "strikeouts": 153,
                    "onBasePercent": ".352",
                    "runsRank": 6,
                    "strikeoutsRank": 15,
                    "wins": 10,
                    "losses": 7
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Dean Kremer",
                        "first": "Dean",
                        "last": "Kremer",
                        "ascii_first": "Dean",
                        "ascii_last": "Kremer"
                    },
                    "team": "BAL",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11428",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/U97HFUeHoI.wucYT4F2T2w--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03232023/11428.png",
                    "playerId": "11428",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "19.0",
                        "era": 6.158,
                        "strikeouts": 14,
                        "whip": 1.368
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "OAK",
                    "runsScored": 63,
                    "strikeouts": 160,
                    "onBasePercent": ".304",
                    "runsRank": 26,
                    "strikeoutsRank": 11,
                    "wins": 3,
                    "losses": 15
                },
                "homeTeam": {
                    "teamAbbr": "LAA",
                    "runsScored": 86,
                    "strikeouts": 151,
                    "onBasePercent": ".330",
                    "runsRank": 10,
                    "strikeoutsRank": 18,
                    "wins": 9,
                    "losses": 8
                },
                "awayPitcher": {
                    "name": {
                        "full": "Kyle Muller",
                        "first": "Kyle",
                        "last": "Muller",
                        "ascii_first": "Kyle",
                        "ascii_last": "Muller"
                    },
                    "team": "OAK",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11270",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/kzrOJVVptYDMDUhj2UwkWw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03312023/11270.png",
                    "playerId": "11270",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "18.2",
                        "era": 7.232,
                        "strikeouts": 14,
                        "whip": 1.982
                    }
                },
                "homePitcher": {
                    "name": {
                        "full": "José Suarez",
                        "first": "José",
                        "last": "Suarez",
                        "ascii_first": "José",
                        "ascii_last": "Suarez"
                    },
                    "team": "LAA",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/11211",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/d64XvqEiZpDPa0ZS90jWuQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04172023/11211.png",
                    "playerId": "11211",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "11.2",
                        "era": 9.257,
                        "strikeouts": 7,
                        "whip": 2.4
                    }
                }
            },
            {
                "awayTeam": {
                    "teamAbbr": "KC",
                    "runsScored": 56,
                    "strikeouts": 170,
                    "onBasePercent": ".264",
                    "runsRank": 29,
                    "strikeoutsRank": 4,
                    "wins": 4,
                    "losses": 14
                },
                "homeTeam": {
                    "teamAbbr": "ARI",
                    "runsScored": 83,
                    "strikeouts": 131,
                    "onBasePercent": ".302",
                    "runsRank": 13,
                    "strikeoutsRank": 28,
                    "wins": 11,
                    "losses": 7
                },
                "awayPitcher": null,
                "homePitcher": {
                    "name": {
                        "full": "Madison Bumgarner",
                        "first": "Madison",
                        "last": "Bumgarner",
                        "ascii_first": "Madison",
                        "ascii_last": "Bumgarner"
                    },
                    "team": "ARI",
                    "playerUrl": "https://sports.yahoo.com/mlb/players/8590",
                    "imageUrl": "https://s.yimg.com/iu/api/res/1.2/6v9.F3pFgKjAA42CSUEm4Q--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03142023/8590.png",
                    "playerId": "8590",
                    "eligiblePositions": {
                        "position": [
                            "SP",
                            "P"
                        ]
                    },
                    "stats": {
                        "innings_pitched": "13.2",
                        "era": 7.902,
                        "strikeouts": 8,
                        "whip": 2.122
                    }
                }
            }
        ]
    }
];