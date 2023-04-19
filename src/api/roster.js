import axios from "axios";
import { createErrorResponse, createSuccessResponse } from "./api-response";


export async function getUserRoster(token, leagueId, teamId) {
    try {
        const baseUrl = process.env.REACT_APP_API_URL;
        const config = { "x-access-token": token };
        const resp = await axios.get(`${baseUrl}/roster/getRoster/${leagueId}/${teamId}`, { headers: config });
        return createSuccessResponse(resp.data);
    } catch (err) {
        console.error(err);
        return createErrorResponse(err);
    }
}

const exampleData = [
    {
        "player_key": "422.p.11531",
        "player_id": "11531",
        "name": {
            "full": "Cal Raleigh",
            "first": "Cal",
            "last": "Raleigh",
            "ascii_first": "Cal",
            "ascii_last": "Raleigh"
        },
        "url": "https://sports.yahoo.com/mlb/players/11531",
        "editorial_player_key": "mlb.p.11531",
        "editorial_team_key": "mlb.t.12",
        "editorial_team_full_name": "Seattle Mariners",
        "editorial_team_abbr": "SEA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/seattle/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "29",
        "display_position": "C",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/jGH9xJc1AzaqC.Vt.2.tbg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11531.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/jGH9xJc1AzaqC.Vt.2.tbg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11531.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": "C"
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681880849",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "13",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "53",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "6",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "12",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "6",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "4",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "2",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "10",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "0",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "8",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "1",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "0",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "15",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "0",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "22",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "113",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "2",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "2",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": ".983",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".226",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".328",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".415",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".743",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "6",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "0",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "-",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "61",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "1",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "11.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "0.9"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".278"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".189"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".307"
                    },
                    {
                        "stat_id": "1015",
                        "value": "-0.7"
                    },
                    {
                        "stat_id": "1011",
                        "value": "6"
                    },
                    {
                        "stat_id": "1005",
                        "value": "21"
                    },
                    {
                        "stat_id": "1006",
                        "value": "14"
                    },
                    {
                        "stat_id": "1009",
                        "value": "58.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "12"
                    },
                    {
                        "stat_id": "1010",
                        "value": "31.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "4.54"
                    },
                    {
                        "stat_id": "1039",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "4"
                    },
                    {
                        "stat_id": "1040",
                        "value": "-0.2"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.0"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9605",
        "player_id": "9605",
        "name": {
            "full": "Matt Olson",
            "first": "Matt",
            "last": "Olson",
            "ascii_first": "Matt",
            "ascii_last": "Olson"
        },
        "url": "https://sports.yahoo.com/mlb/players/9605",
        "editorial_player_key": "mlb.p.9605",
        "editorial_team_key": "mlb.t.15",
        "editorial_team_full_name": "Atlanta Braves",
        "editorial_team_abbr": "ATL",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/atlanta/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "28",
        "display_position": "1B",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/JKgMitZUFvzRG5K1AwNgMw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/9605.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/JKgMitZUFvzRG5K1AwNgMw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/9605.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "1B",
                "CI",
                "IF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681538149",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "17",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "67",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "13",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "20",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "9",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "5",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "1",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "5",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "17",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "0",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "12",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "0",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "27",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "2",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "42",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "129",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "11",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".299",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".405",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".627",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": "1.032",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "11",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "0",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "-",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "79",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "16",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "21.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.8"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".429"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".328"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".454"
                    },
                    {
                        "stat_id": "1015",
                        "value": "7.6"
                    },
                    {
                        "stat_id": "1011",
                        "value": "17"
                    },
                    {
                        "stat_id": "1005",
                        "value": "33"
                    },
                    {
                        "stat_id": "1006",
                        "value": "15"
                    },
                    {
                        "stat_id": "1009",
                        "value": "60.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "13"
                    },
                    {
                        "stat_id": "1010",
                        "value": "43.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "4.39"
                    },
                    {
                        "stat_id": "1039",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "2"
                    },
                    {
                        "stat_id": "1040",
                        "value": "7.2"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.0"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11125",
        "player_id": "11125",
        "name": {
            "full": "Brandon Lowe",
            "first": "Brandon",
            "last": "Lowe",
            "ascii_first": "Brandon",
            "ascii_last": "Lowe"
        },
        "url": "https://sports.yahoo.com/mlb/players/11125",
        "editorial_player_key": "mlb.p.11125",
        "editorial_team_key": "mlb.t.30",
        "editorial_team_full_name": "Tampa Bay Rays",
        "editorial_team_abbr": "TB",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/tampa-bay/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "8",
        "display_position": "2B",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/G.RLQcsLeQf.mYPWq9CdjA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03202023/11125.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/G.RLQcsLeQf.mYPWq9CdjA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03202023/11125.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "2B",
                "DH",
                "IF",
                "MI"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681588127",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "12",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "46",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "14",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "13",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "7",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "1",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "5",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "12",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "1",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "10",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "0",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "13",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "0",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "29",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "21",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "21",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "2",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": ".955",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".283",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".411",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".630",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": "1.041",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "6",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "1",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "1.000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "56",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "1",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "7",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "21.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.0"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".286"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".347"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".495"
                    },
                    {
                        "stat_id": "1015",
                        "value": "6.6"
                    },
                    {
                        "stat_id": "1011",
                        "value": "11"
                    },
                    {
                        "stat_id": "1005",
                        "value": "23"
                    },
                    {
                        "stat_id": "1006",
                        "value": "12"
                    },
                    {
                        "stat_id": "1009",
                        "value": "57.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "14"
                    },
                    {
                        "stat_id": "1010",
                        "value": "57.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "4.04"
                    },
                    {
                        "stat_id": "1039",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "4"
                    },
                    {
                        "stat_id": "1040",
                        "value": "7.1"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.2"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11231",
        "player_id": "11231",
        "name": {
            "full": "Ty France",
            "first": "Ty",
            "last": "France",
            "ascii_first": "Ty",
            "ascii_last": "France"
        },
        "url": "https://sports.yahoo.com/mlb/players/11231",
        "editorial_player_key": "mlb.p.11231",
        "editorial_team_key": "mlb.t.12",
        "editorial_team_full_name": "Seattle Mariners",
        "editorial_team_abbr": "SEA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/seattle/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "23",
        "display_position": "1B,3B",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/R1VrO6t8sG7t.oc6OUH0XQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11231.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/R1VrO6t8sG7t.oc6OUH0XQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11231.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "1B",
                "3B",
                "CI",
                "DH",
                "IF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681697233",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "17",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "68",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "15",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "22",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "13",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "8",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "1",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "12",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "1",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "8",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "3",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "9",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "1",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "33",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "131",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "13",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".324",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".418",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".485",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".903",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "9",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "1",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "1.000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "79",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "7",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "4.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.1"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".362"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".161"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".405"
                    },
                    {
                        "stat_id": "1015",
                        "value": "5.0"
                    },
                    {
                        "stat_id": "1011",
                        "value": "13"
                    },
                    {
                        "stat_id": "1005",
                        "value": "35"
                    },
                    {
                        "stat_id": "1006",
                        "value": "25"
                    },
                    {
                        "stat_id": "1009",
                        "value": "74.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "17"
                    },
                    {
                        "stat_id": "1010",
                        "value": "26.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "3.57"
                    },
                    {
                        "stat_id": "1039",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "2"
                    },
                    {
                        "stat_id": "1040",
                        "value": "5.8"
                    },
                    {
                        "stat_id": "1041",
                        "value": "-0.2"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10766",
        "player_id": "10766",
        "name": {
            "full": "Bo Bichette",
            "first": "Bo",
            "last": "Bichette",
            "ascii_first": "Bo",
            "ascii_last": "Bichette"
        },
        "url": "https://sports.yahoo.com/mlb/players/10766",
        "editorial_player_key": "mlb.p.10766",
        "editorial_team_key": "mlb.t.14",
        "editorial_team_full_name": "Toronto Blue Jays",
        "editorial_team_abbr": "TOR",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/toronto/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "11",
        "display_position": "SS",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/36uI9glhoiy.KMwMUpGKQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/10766.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/36uI9glhoiy.KMwMUpGKQg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/10766.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "IF",
                "MI",
                "SS"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681574942",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "17",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "75",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "11",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "28",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "20",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "4",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "4",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "11",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "0",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "1",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "2",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "1",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "9",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "1",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "44",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "19",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "31",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "3",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": ".943",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".373",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".397",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".587",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".984",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "8",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "-1",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": ".000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "78",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "8",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "17.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.3"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".387"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".214"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".429"
                    },
                    {
                        "stat_id": "1015",
                        "value": "6.1"
                    },
                    {
                        "stat_id": "1011",
                        "value": "17"
                    },
                    {
                        "stat_id": "1005",
                        "value": "33"
                    },
                    {
                        "stat_id": "1006",
                        "value": "25"
                    },
                    {
                        "stat_id": "1009",
                        "value": "61.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "12"
                    },
                    {
                        "stat_id": "1010",
                        "value": "22.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "3.71"
                    },
                    {
                        "stat_id": "1039",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "1"
                    },
                    {
                        "stat_id": "1040",
                        "value": "6.5"
                    },
                    {
                        "stat_id": "1041",
                        "value": "-0.2"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10480",
        "player_id": "10480",
        "name": {
            "full": "Kyle Tucker",
            "first": "Kyle",
            "last": "Tucker",
            "ascii_first": "Kyle",
            "ascii_last": "Tucker"
        },
        "url": "https://sports.yahoo.com/mlb/players/10480",
        "editorial_player_key": "mlb.p.10480",
        "editorial_team_key": "mlb.t.18",
        "editorial_team_full_name": "Houston Astros",
        "editorial_team_abbr": "HOU",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/houston/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "30",
        "display_position": "OF",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/.9aZ7UIwZT.ztLh6OuYoAg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05262022/10480.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/.9aZ7UIwZT.ztLh6OuYoAg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05262022/10480.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "OF",
                "RF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681622372",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "17",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "56",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "6",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "17",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "10",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "3",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "4",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "13",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "1",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "4",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "15",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "1",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "0",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "10",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "1",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "32",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "28",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "1",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".304",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".444",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".571",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": "1.015",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "7",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "4",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "1.000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "73",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "1",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "0",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "1",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "13.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "0.7"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".302"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".267"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".434"
                    },
                    {
                        "stat_id": "1015",
                        "value": "5.9"
                    },
                    {
                        "stat_id": "1011",
                        "value": "14"
                    },
                    {
                        "stat_id": "1005",
                        "value": "34"
                    },
                    {
                        "stat_id": "1006",
                        "value": "17"
                    },
                    {
                        "stat_id": "1009",
                        "value": "57.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "17"
                    },
                    {
                        "stat_id": "1010",
                        "value": "47.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "4.03"
                    },
                    {
                        "stat_id": "1039",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "2"
                    },
                    {
                        "stat_id": "1040",
                        "value": "6.2"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.9"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9339",
        "player_id": "9339",
        "name": {
            "full": "George Springer",
            "first": "George",
            "last": "Springer",
            "ascii_first": "George",
            "ascii_last": "Springer"
        },
        "url": "https://sports.yahoo.com/mlb/players/9339",
        "editorial_player_key": "mlb.p.9339",
        "editorial_team_key": "mlb.t.14",
        "editorial_team_full_name": "Toronto Blue Jays",
        "editorial_team_abbr": "TOR",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/toronto/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "4",
        "display_position": "OF",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/Rj0M0TMgJmRyIlkfJGupdg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/9339.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/Rj0M0TMgJmRyIlkfJGupdg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/9339.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "CF",
                "DH",
                "OF",
                "RF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681599491",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "17",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "16",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "69",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "11",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "16",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "13",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "0",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "3",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "8",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "3",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "7",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "0",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "13",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "1",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "25",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "30",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "1",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".232",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".303",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".362",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".665",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "3",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "3",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "1.000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "76",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "1",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "1",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "8.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "0.6"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".245"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".130"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".318"
                    },
                    {
                        "stat_id": "1015",
                        "value": "-0.3"
                    },
                    {
                        "stat_id": "1011",
                        "value": "7"
                    },
                    {
                        "stat_id": "1005",
                        "value": "26"
                    },
                    {
                        "stat_id": "1006",
                        "value": "19"
                    },
                    {
                        "stat_id": "1009",
                        "value": "51.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "26"
                    },
                    {
                        "stat_id": "1010",
                        "value": "51.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "3.79"
                    },
                    {
                        "stat_id": "1039",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "5"
                    },
                    {
                        "stat_id": "1040",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.9"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11165",
        "player_id": "11165",
        "name": {
            "full": "Myles Straw",
            "first": "Myles",
            "last": "Straw",
            "ascii_first": "Myles",
            "ascii_last": "Straw"
        },
        "url": "https://sports.yahoo.com/mlb/players/11165",
        "editorial_player_key": "mlb.p.11165",
        "editorial_team_key": "mlb.t.5",
        "editorial_team_full_name": "Cleveland Guardians",
        "editorial_team_abbr": "CLE",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/cleveland/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "7",
        "display_position": "OF",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/zfjsylDbe.RvBsVmCtuXsg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03072023/11165.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/zfjsylDbe.RvBsVmCtuXsg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03072023/11165.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "CF",
                "OF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681611199",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "15",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "51",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "9",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "17",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "14",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "3",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "6",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "1",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "0",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "7",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "1",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "9",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "1",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "12",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "0",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "20",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "36",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "0",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".333",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".443",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".392",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".835",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "3",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "6",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": ".875",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "62",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "0",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.6"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".436"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".059"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".373"
                    },
                    {
                        "stat_id": "1015",
                        "value": "2.3"
                    },
                    {
                        "stat_id": "1011",
                        "value": "8"
                    },
                    {
                        "stat_id": "1005",
                        "value": "31"
                    },
                    {
                        "stat_id": "1006",
                        "value": "25"
                    },
                    {
                        "stat_id": "1009",
                        "value": "167.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "8"
                    },
                    {
                        "stat_id": "1010",
                        "value": "18.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "3.85"
                    },
                    {
                        "stat_id": "1039",
                        "value": "87.5"
                    },
                    {
                        "stat_id": "1003",
                        "value": "4"
                    },
                    {
                        "stat_id": "1040",
                        "value": "2.5"
                    },
                    {
                        "stat_id": "1041",
                        "value": "1.5"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.8868",
        "player_id": "8868",
        "name": {
            "full": "Anthony Rizzo",
            "first": "Anthony",
            "last": "Rizzo",
            "ascii_first": "Anthony",
            "ascii_last": "Rizzo"
        },
        "url": "https://sports.yahoo.com/mlb/players/8868",
        "editorial_player_key": "mlb.p.8868",
        "editorial_team_key": "mlb.t.10",
        "editorial_team_full_name": "New York Yankees",
        "editorial_team_abbr": "NYY",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/ny-yankees/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "48",
        "display_position": "1B",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/Ly34hdgW7wL7sxsJ1D9iPg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04032023/8868.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/Ly34hdgW7wL7sxsJ1D9iPg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04032023/8868.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "1B",
                "CI",
                "DH",
                "IF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681663594",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "15",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "15",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "54",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "8",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "17",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "11",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "2",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "4",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "9",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "1",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "0",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "1",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "6",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "3",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "11",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "2",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "31",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "98",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "22",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "1",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": ".992",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".315",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".406",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".574",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".980",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "6",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "-1",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": ".000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "64",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "13",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "13.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "0.7"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".325"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".259"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".421"
                    },
                    {
                        "stat_id": "1015",
                        "value": "5.1"
                    },
                    {
                        "stat_id": "1011",
                        "value": "11"
                    },
                    {
                        "stat_id": "1005",
                        "value": "26"
                    },
                    {
                        "stat_id": "1006",
                        "value": "12"
                    },
                    {
                        "stat_id": "1009",
                        "value": "38.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "18"
                    },
                    {
                        "stat_id": "1010",
                        "value": "52.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "3.88"
                    },
                    {
                        "stat_id": "1039",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "1"
                    },
                    {
                        "stat_id": "1040",
                        "value": "5.5"
                    },
                    {
                        "stat_id": "1041",
                        "value": "-0.6"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9876",
        "player_id": "9876",
        "name": {
            "full": "Brandon Nimmo",
            "first": "Brandon",
            "last": "Nimmo",
            "ascii_first": "Brandon",
            "ascii_last": "Nimmo"
        },
        "url": "https://sports.yahoo.com/mlb/players/9876",
        "editorial_player_key": "mlb.p.9876",
        "editorial_team_key": "mlb.t.21",
        "editorial_team_full_name": "New York Mets",
        "editorial_team_abbr": "NYM",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/ny-mets/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "9",
        "display_position": "OF",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/jrM9H.wY4v5_QTxhDUeYGQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04052023/9876.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/jrM9H.wY4v5_QTxhDUeYGQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04052023/9876.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "CF",
                "OF"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681190486",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "16",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "16",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "15",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "54",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "10",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "17",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "12",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "5",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "0",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "8",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "0",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "1",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "3",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "0",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "15",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "2",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "7",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "0",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "22",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "33",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "0",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "0",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "1.000",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": ".315",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": ".472",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": ".407",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": ".879",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "5",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "3",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "1.000",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "0",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "72",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "0",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "0",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "0",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "0",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "1.1"
                    },
                    {
                        "stat_id": "1013",
                        "value": ".354"
                    },
                    {
                        "stat_id": "1002",
                        "value": ".092"
                    },
                    {
                        "stat_id": "1014",
                        "value": ".395"
                    },
                    {
                        "stat_id": "1015",
                        "value": "3.6"
                    },
                    {
                        "stat_id": "1011",
                        "value": "10"
                    },
                    {
                        "stat_id": "1005",
                        "value": "37"
                    },
                    {
                        "stat_id": "1006",
                        "value": "24"
                    },
                    {
                        "stat_id": "1009",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "11"
                    },
                    {
                        "stat_id": "1010",
                        "value": "23.0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "4.08"
                    },
                    {
                        "stat_id": "1039",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "1"
                    },
                    {
                        "stat_id": "1040",
                        "value": "3.9"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0.6"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.12104",
        "player_id": "12104",
        "name": {
            "full": "Bailey Falter",
            "first": "Bailey",
            "last": "Falter",
            "ascii_first": "Bailey",
            "ascii_last": "Falter"
        },
        "url": "https://sports.yahoo.com/mlb/players/12104",
        "editorial_player_key": "mlb.p.12104",
        "editorial_team_key": "mlb.t.22",
        "editorial_team_full_name": "Philadelphia Phillies",
        "editorial_team_abbr": "PHI",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/philadelphia/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "70",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/wH7QR.r3LGvoOmQJDl0tsA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03282023/12104.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/wH7QR.r3LGvoOmQJDl0tsA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03282023/12104.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681881684",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "3",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "3",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "3",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "15.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "2",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "45",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "19",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "62",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "8",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "8",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "2",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "1",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "9",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "1",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "26",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "4.80",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.33",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "9.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "5.40",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "252",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "16",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "1",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "1",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".323",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "11.400",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": ".600",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-2",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "4.10"
                    },
                    {
                        "stat_id": "1021",
                        "value": "56.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "21.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".340"
                    },
                    {
                        "stat_id": "1036",
                        "value": "15.4"
                    },
                    {
                        "stat_id": "1037",
                        "value": "29"
                    },
                    {
                        "stat_id": "1038",
                        "value": "13"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.5"
                    },
                    {
                        "stat_id": "1018",
                        "value": "16.80"
                    },
                    {
                        "stat_id": "1034",
                        "value": "107"
                    },
                    {
                        "stat_id": "1019",
                        "value": "84.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".311"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".323"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".426"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.3"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9931",
        "player_id": "9931",
        "name": {
            "full": "José Ureña",
            "first": "José",
            "last": "Ureña",
            "ascii_first": "José",
            "ascii_last": "Ureña"
        },
        "url": "https://sports.yahoo.com/mlb/players/9931",
        "editorial_player_key": "mlb.p.9931",
        "editorial_team_key": "mlb.t.27",
        "editorial_team_full_name": "Colorado Rockies",
        "editorial_team_abbr": "COL",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/colorado/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "51",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/rF9g2Mwx2roMvrPtBJGv0g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/9931.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/rF9g2Mwx2roMvrPtBJGv0g--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182023/9931.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681346820",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "3",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "3",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "3",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "10.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "2",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "30",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "17",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "55",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "13",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "11",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "5",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "8",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "7",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "37",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "9.90",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "2.50",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "0.88",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "6.30",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "219",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "8",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "3",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "1",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".455",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "15.300",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "7.200",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-2",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "10.87"
                    },
                    {
                        "stat_id": "1021",
                        "value": "38.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "32.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".343"
                    },
                    {
                        "stat_id": "1036",
                        "value": "35.7"
                    },
                    {
                        "stat_id": "1037",
                        "value": "15"
                    },
                    {
                        "stat_id": "1038",
                        "value": "14"
                    },
                    {
                        "stat_id": "1020",
                        "value": "0.9"
                    },
                    {
                        "stat_id": "1018",
                        "value": "21.90"
                    },
                    {
                        "stat_id": "1034",
                        "value": "195"
                    },
                    {
                        "stat_id": "1019",
                        "value": "73.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".370"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".455"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".804"
                    },
                    {
                        "stat_id": "1033",
                        "value": "-0.3"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11597",
        "player_id": "11597",
        "name": {
            "full": "Pete Fairbanks",
            "first": "Pete",
            "last": "Fairbanks",
            "ascii_first": "Pete",
            "ascii_last": "Fairbanks"
        },
        "url": "https://sports.yahoo.com/mlb/players/11597",
        "editorial_player_key": "mlb.p.11597",
        "editorial_team_key": "mlb.t.30",
        "editorial_team_full_name": "Tampa Bay Rays",
        "editorial_team_abbr": "TB",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/tampa-bay/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "29",
        "display_position": "RP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/LaYjTjRamcZjjGJYhHMcoQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03202023/11597.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/LaYjTjRamcZjjGJYhHMcoQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03202023/11597.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "RP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681363433",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "4",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "4",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "0",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "4.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "2",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "12",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "2",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "14",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "0",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "0",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "0",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "1",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "2",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "2",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "0.00",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "0.50",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "-",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "2.25",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "38",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "2",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "0",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "0",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "0",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "4",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".143",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "-",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "4.500",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": ".000",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "1.000",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "2",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "2",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "2",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "0",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "2.87"
                    },
                    {
                        "stat_id": "1021",
                        "value": "69.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "15.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".154"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "9"
                    },
                    {
                        "stat_id": "1038",
                        "value": "4"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.8"
                    },
                    {
                        "stat_id": "1018",
                        "value": "9.50"
                    },
                    {
                        "stat_id": "1034",
                        "value": "0"
                    },
                    {
                        "stat_id": "1019",
                        "value": "0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".143"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".143"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".143"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.1"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10548",
        "player_id": "10548",
        "name": {
            "full": "A.J. Puk",
            "first": "A.J.",
            "last": "Puk",
            "ascii_first": "A.J.",
            "ascii_last": "Puk"
        },
        "url": "https://sports.yahoo.com/mlb/players/10548",
        "editorial_player_key": "mlb.p.10548",
        "editorial_team_key": "mlb.t.28",
        "editorial_team_full_name": "Miami Marlins",
        "editorial_team_abbr": "MIA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/miami/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "35",
        "display_position": "RP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/_9pf_xs.B1jt8gG3eQEZPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/10548.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/_9pf_xs.B1jt8gG3eQEZPQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/10548.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "RP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681881199",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "6",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "6",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "0",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "7.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "1",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "2",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "21",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "5",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "28",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "2",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "1",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "1",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "1",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "6",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "2",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "8",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "1.29",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "0.86",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "6.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "7.71",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "100",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "4",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "0",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "1",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "0",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "6",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".214",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "1.000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "6.429",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "1.286",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "1.000",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "2",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "2",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "2",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "4.03"
                    },
                    {
                        "stat_id": "1021",
                        "value": "52.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "29.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".211"
                    },
                    {
                        "stat_id": "1036",
                        "value": "11.1"
                    },
                    {
                        "stat_id": "1037",
                        "value": "11"
                    },
                    {
                        "stat_id": "1038",
                        "value": "9"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.0"
                    },
                    {
                        "stat_id": "1018",
                        "value": "14.29"
                    },
                    {
                        "stat_id": "1034",
                        "value": "35"
                    },
                    {
                        "stat_id": "1019",
                        "value": "0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".192"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".222"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".308"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.1"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10903",
        "player_id": "10903",
        "name": {
            "full": "Edward Cabrera",
            "first": "Edward",
            "last": "Cabrera",
            "ascii_first": "Edward",
            "ascii_last": "Cabrera"
        },
        "url": "https://sports.yahoo.com/mlb/players/10903",
        "editorial_player_key": "mlb.p.10903",
        "editorial_team_key": "mlb.t.28",
        "editorial_team_full_name": "Miami Marlins",
        "editorial_team_abbr": "MIA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/miami/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "27",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/Rs49UIkKWq3bNsJQjyWLlw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/10903.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/Rs49UIkKWq3bNsJQjyWLlw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04132023/10903.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681879046",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "3",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "3",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "3",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "11.2",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "1",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "35",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "9",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "57",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "6",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "6",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "14",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "10",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "3",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "13",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "4.63",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.97",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "0.71",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "7.71",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "252",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "5",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "4",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".404",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "6.943",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "10.800",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "5.21"
                    },
                    {
                        "stat_id": "1021",
                        "value": "58.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "24.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".273"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "19"
                    },
                    {
                        "stat_id": "1038",
                        "value": "9"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.7"
                    },
                    {
                        "stat_id": "1018",
                        "value": "21.60"
                    },
                    {
                        "stat_id": "1034",
                        "value": "110"
                    },
                    {
                        "stat_id": "1019",
                        "value": "84.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".214"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".404"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".310"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.0"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11709",
        "player_id": "11709",
        "name": {
            "full": "Kyle Finnegan",
            "first": "Kyle",
            "last": "Finnegan",
            "ascii_first": "Kyle",
            "ascii_last": "Finnegan"
        },
        "url": "https://sports.yahoo.com/mlb/players/11709",
        "editorial_player_key": "mlb.p.11709",
        "editorial_team_key": "mlb.t.20",
        "editorial_team_full_name": "Washington Nationals",
        "editorial_team_abbr": "WSH",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/washington/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "67",
        "display_position": "RP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/Ko44TE1HEQLjIPiH4AThEA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03102023/11709.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/Ko44TE1HEQLjIPiH4AThEA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03102023/11709.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "RP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681704251",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "7",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "7",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "0",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "6.1",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "1",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "3",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "19",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "8",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "29",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "8",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "7",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "3",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "4",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "4",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "2",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "4",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "19",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "9.95",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.89",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "1.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "5.68",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "120",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "3",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "2",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "0",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "1",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "1",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "7",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".414",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "11.368",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "5.684",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": ".750",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "1",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "2",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "3",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "2",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "11.80"
                    },
                    {
                        "stat_id": "1021",
                        "value": "29.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "43.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".278"
                    },
                    {
                        "stat_id": "1036",
                        "value": "30.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "6"
                    },
                    {
                        "stat_id": "1038",
                        "value": "10"
                    },
                    {
                        "stat_id": "1020",
                        "value": "0.6"
                    },
                    {
                        "stat_id": "1018",
                        "value": "18.95"
                    },
                    {
                        "stat_id": "1034",
                        "value": "264"
                    },
                    {
                        "stat_id": "1019",
                        "value": "0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".320"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".414"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".760"
                    },
                    {
                        "stat_id": "1033",
                        "value": "-0.3"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11608",
        "player_id": "11608",
        "name": {
            "full": "José Urquidy",
            "first": "José",
            "last": "Urquidy",
            "ascii_first": "José",
            "ascii_last": "Urquidy"
        },
        "url": "https://sports.yahoo.com/mlb/players/11608",
        "editorial_player_key": "mlb.p.11608",
        "editorial_team_key": "mlb.t.18",
        "editorial_team_full_name": "Houston Astros",
        "editorial_team_abbr": "HOU",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/houston/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "65",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/UGkkhrlrnAEveCXpQItIkQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05262022/11608.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/UGkkhrlrnAEveCXpQItIkQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05262022/11608.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681344239",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "3",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "3",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "3",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "15.1",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "1",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "46",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "16",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "65",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "4",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "4",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "2",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "5",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "13",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "4",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "24",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "2.35",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.37",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "2.60",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "7.63",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "270",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "12",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "2",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".323",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "1.000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "9.391",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "2.935",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "1",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "4.30"
                    },
                    {
                        "stat_id": "1021",
                        "value": "36.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "28.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".311"
                    },
                    {
                        "stat_id": "1036",
                        "value": "10.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "17"
                    },
                    {
                        "stat_id": "1038",
                        "value": "20"
                    },
                    {
                        "stat_id": "1020",
                        "value": "0.6"
                    },
                    {
                        "stat_id": "1018",
                        "value": "17.61"
                    },
                    {
                        "stat_id": "1034",
                        "value": "54"
                    },
                    {
                        "stat_id": "1019",
                        "value": "90.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".267"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".323"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".400"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.3"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10011",
        "player_id": "10011",
        "name": {
            "full": "Matthew Boyd",
            "first": "Matthew",
            "last": "Boyd",
            "ascii_first": "Matthew",
            "ascii_last": "Boyd"
        },
        "url": "https://sports.yahoo.com/mlb/players/10011",
        "editorial_player_key": "mlb.p.10011",
        "editorial_team_key": "mlb.t.6",
        "editorial_team_full_name": "Detroit Tigers",
        "editorial_team_abbr": "DET",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/detroit/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "48",
        "display_position": "RP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/w.ZndRmy_ZJTq2e_VR7cGg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04172023/10011.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/w.ZndRmy_ZJTq2e_VR7cGg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04172023/10011.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "RP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681860911",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "2",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "2",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "2",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "9.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "1",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "27",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "7",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "41",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "4",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "4",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "7",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "7",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "9",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "4.00",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.56",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "1.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "7.00",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "151",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "5",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "2",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".341",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "7.000",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "7.000",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "4.14"
                    },
                    {
                        "stat_id": "1021",
                        "value": "41.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "19.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".259"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "11"
                    },
                    {
                        "stat_id": "1038",
                        "value": "8"
                    },
                    {
                        "stat_id": "1020",
                        "value": "0.8"
                    },
                    {
                        "stat_id": "1018",
                        "value": "16.78"
                    },
                    {
                        "stat_id": "1034",
                        "value": "91"
                    },
                    {
                        "stat_id": "1019",
                        "value": "75.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".206"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".341"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".265"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.1"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9620",
        "player_id": "9620",
        "name": {
            "full": "Max Fried",
            "first": "Max",
            "last": "Fried",
            "ascii_first": "Max",
            "ascii_last": "Fried"
        },
        "url": "https://sports.yahoo.com/mlb/players/9620",
        "editorial_player_key": "mlb.p.9620",
        "editorial_team_key": "mlb.t.15",
        "editorial_team_full_name": "Atlanta Braves",
        "editorial_team_abbr": "ATL",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/atlanta/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "54",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/OHIjs0gT8wRVgKqEewOobQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/9620.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/OHIjs0gT8wRVgKqEewOobQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/9620.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681801911",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "2",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "2",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "2",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "8.1",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "1",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "25",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "8",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "32",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "1",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "1",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "0",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "6",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "1",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "9",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "1.08",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "0.96",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "-",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "6.48",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "122",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "7",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "1",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".250",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "1.000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "8.640",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": ".000",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "2.17"
                    },
                    {
                        "stat_id": "1021",
                        "value": "62.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "8.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".308"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "16"
                    },
                    {
                        "stat_id": "1038",
                        "value": "6"
                    },
                    {
                        "stat_id": "1020",
                        "value": "2.0"
                    },
                    {
                        "stat_id": "1018",
                        "value": "14.64"
                    },
                    {
                        "stat_id": "1034",
                        "value": "60"
                    },
                    {
                        "stat_id": "1019",
                        "value": "61.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".258"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".250"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".290"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.1"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9334",
        "player_id": "9334",
        "name": {
            "full": "Kevin Gausman",
            "first": "Kevin",
            "last": "Gausman",
            "ascii_first": "Kevin",
            "ascii_last": "Gausman"
        },
        "url": "https://sports.yahoo.com/mlb/players/9334",
        "editorial_player_key": "mlb.p.9334",
        "editorial_team_key": "mlb.t.14",
        "editorial_team_full_name": "Toronto Blue Jays",
        "editorial_team_abbr": "TOR",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/toronto/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "34",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/TNEb_1K.vt_29xajw5EkZw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/9334.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/TNEb_1K.vt_29xajw5EkZw--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03162023/9334.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681829267",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "4",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "4",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "4",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "24.2",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "1",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "2",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "74",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "24",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "103",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "14",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "10",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "4",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "5",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "30",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "41",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "3.65",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.18",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "6.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "10.95",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "372",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "15",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "5",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".282",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".333",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "8.757",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "1.824",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "3",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "2.62"
                    },
                    {
                        "stat_id": "1021",
                        "value": "46.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "28.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".317"
                    },
                    {
                        "stat_id": "1036",
                        "value": "16.7"
                    },
                    {
                        "stat_id": "1037",
                        "value": "31"
                    },
                    {
                        "stat_id": "1038",
                        "value": "24"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.0"
                    },
                    {
                        "stat_id": "1018",
                        "value": "15.08"
                    },
                    {
                        "stat_id": "1034",
                        "value": "30"
                    },
                    {
                        "stat_id": "1019",
                        "value": "93.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".247"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".284"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".423"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.7"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.10847",
        "player_id": "10847",
        "name": {
            "full": "Kyle Wright",
            "first": "Kyle",
            "last": "Wright",
            "ascii_first": "Kyle",
            "ascii_last": "Wright"
        },
        "url": "https://sports.yahoo.com/mlb/players/10847",
        "editorial_player_key": "mlb.p.10847",
        "editorial_team_key": "mlb.t.15",
        "editorial_team_full_name": "Atlanta Braves",
        "editorial_team_abbr": "ATL",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/atlanta/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "30",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/tZfRvEUUo8zompOcxA7UMg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/10847.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/tZfRvEUUo8zompOcxA7UMg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03172023/10847.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681696236",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "2",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "2",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "2",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "8.2",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "26",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "8",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "43",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "6",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "6",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "7",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "2",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "9",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "1",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "1",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "9",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "6.23",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.73",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "1.29",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "9.35",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "170",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "7",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "1",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".395",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "-",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "8.308",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "7.269",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "0",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "7.37"
                    },
                    {
                        "stat_id": "1021",
                        "value": "72.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "12.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".333"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "18"
                    },
                    {
                        "stat_id": "1038",
                        "value": "3"
                    },
                    {
                        "stat_id": "1020",
                        "value": "3.3"
                    },
                    {
                        "stat_id": "1018",
                        "value": "19.62"
                    },
                    {
                        "stat_id": "1034",
                        "value": "266"
                    },
                    {
                        "stat_id": "1019",
                        "value": "85.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".242"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".405"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".273"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.0"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11202",
        "player_id": "11202",
        "name": {
            "full": "Justin Steele",
            "first": "Justin",
            "last": "Steele",
            "ascii_first": "Justin",
            "ascii_last": "Steele"
        },
        "url": "https://sports.yahoo.com/mlb/players/11202",
        "editorial_player_key": "mlb.p.11202",
        "editorial_team_key": "mlb.t.16",
        "editorial_team_full_name": "Chicago Cubs",
        "editorial_team_abbr": "CHC",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/chi-cubs/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "35",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/F6Imj2c3ekMYs5_eEKw7xA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03242023/11202.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/F6Imj2c3ekMYs5_eEKw7xA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03242023/11202.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "player_notes_last_timestamp": "1681560430",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "3",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "3",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "3",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "19.0",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "2",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "57",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "10",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "72",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "3",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "3",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "2",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "6",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "19",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "2",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "18",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "1.42",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "0.84",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "3.17",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "9.00",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "281",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "6",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "2",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".222",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "1.000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "4.737",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "2.842",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "3",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "2",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "3.68"
                    },
                    {
                        "stat_id": "1021",
                        "value": "60.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "19.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".178"
                    },
                    {
                        "stat_id": "1036",
                        "value": "16.7"
                    },
                    {
                        "stat_id": "1037",
                        "value": "28"
                    },
                    {
                        "stat_id": "1038",
                        "value": "12"
                    },
                    {
                        "stat_id": "1020",
                        "value": "1.6"
                    },
                    {
                        "stat_id": "1018",
                        "value": "14.79"
                    },
                    {
                        "stat_id": "1034",
                        "value": "32"
                    },
                    {
                        "stat_id": "1019",
                        "value": "93.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".152"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".222"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".273"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.4"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.8875",
        "player_id": "8875",
        "name": {
            "full": "Bryce Harper",
            "first": "Bryce",
            "last": "Harper",
            "ascii_first": "Bryce",
            "ascii_last": "Harper"
        },
        "url": "https://sports.yahoo.com/mlb/players/8875",
        "status": "IL10",
        "status_full": "10-Day Injured List",
        "injury_note": "Elbow",
        "on_disabled_list": "1",
        "editorial_player_key": "mlb.p.8875",
        "editorial_team_key": "mlb.t.22",
        "editorial_team_full_name": "Philadelphia Phillies",
        "editorial_team_abbr": "PHI",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/philadelphia/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "3",
        "display_position": "OF",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/ljH1hITLqfKK_R2iabuKKg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05132022/8875.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/ljH1hITLqfKK_R2iabuKKg--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/05132022/8875.png",
        "is_undroppable": "0",
        "position_type": "B",
        "eligible_positions": {
            "position": [
                "DH",
                "OF",
                "RF"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681854756",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "-",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "1",
                        "value": "-",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "2",
                        "value": "-",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "6",
                        "value": "-",
                        "name": "At Bats",
                        "display_name": "AB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "7",
                        "value": "-",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "8",
                        "value": "-",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "9",
                        "value": "-",
                        "name": "Singles",
                        "display_name": "1B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "10",
                        "value": "-",
                        "name": "Doubles",
                        "display_name": "2B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "11",
                        "value": "-",
                        "name": "Triples",
                        "display_name": "3B",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "12",
                        "value": "-",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "13",
                        "value": "-",
                        "name": "Runs Batted In",
                        "display_name": "RBI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "14",
                        "value": "-",
                        "name": "Sacrifice Hits",
                        "display_name": "SH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "15",
                        "value": "-",
                        "name": "Sacrifice Flys",
                        "display_name": "SF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "16",
                        "value": "-",
                        "name": "Stolen Bases",
                        "display_name": "SB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "17",
                        "value": "-",
                        "name": "Caught Stealing",
                        "display_name": "CS",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "18",
                        "value": "-",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "19",
                        "value": "-",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "20",
                        "value": "-",
                        "name": "Hit By Pitch",
                        "display_name": "HBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "21",
                        "value": "-",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "22",
                        "value": "-",
                        "name": "Ground Into Double Play",
                        "display_name": "GIDP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "23",
                        "value": "-",
                        "name": "Total Bases",
                        "display_name": "TB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "51",
                        "value": "-",
                        "name": "Putouts",
                        "display_name": "PO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "52",
                        "value": "-",
                        "name": "Assists",
                        "display_name": "A",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "53",
                        "value": "-",
                        "name": "Errors",
                        "display_name": "E",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "54",
                        "value": "-",
                        "name": "Fielding Percentage",
                        "display_name": "FPCT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "3",
                        "value": "-",
                        "name": "Batting Average",
                        "display_name": "AVG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "4",
                        "value": "-",
                        "name": "On-base Percentage",
                        "display_name": "OBP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "5",
                        "value": "-",
                        "name": "Slugging Percentage",
                        "display_name": "SLG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "55",
                        "value": "-",
                        "name": "On-base + Slugging Percentage",
                        "display_name": "OPS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "61",
                        "value": "-",
                        "name": "Extra Base Hits",
                        "display_name": "XBH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "62",
                        "value": "-",
                        "name": "Net Stolen Bases",
                        "display_name": "NSB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "63",
                        "value": "-",
                        "name": "Stolen Base Percentage",
                        "display_name": "SB%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "64",
                        "value": "-",
                        "name": "Hitting for the Cycle",
                        "display_name": "CYC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "65",
                        "value": "-",
                        "name": "Plate Appearances",
                        "display_name": "PA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "66",
                        "value": "-",
                        "name": "Grand Slam Home Runs",
                        "display_name": "SLAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "86",
                        "value": "-",
                        "name": "Outfield Assists",
                        "display_name": "OFA",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "87",
                        "value": "-",
                        "name": "Double Plays Turned",
                        "display_name": "DPT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    },
                    {
                        "stat_id": "88",
                        "value": "-",
                        "name": "Catcher Interference",
                        "display_name": "CI",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "B"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1035",
                        "value": "0"
                    },
                    {
                        "stat_id": "1008",
                        "value": "0"
                    },
                    {
                        "stat_id": "1013",
                        "value": "0"
                    },
                    {
                        "stat_id": "1002",
                        "value": "0"
                    },
                    {
                        "stat_id": "1014",
                        "value": "0"
                    },
                    {
                        "stat_id": "1015",
                        "value": "0"
                    },
                    {
                        "stat_id": "1011",
                        "value": "0"
                    },
                    {
                        "stat_id": "1005",
                        "value": "0"
                    },
                    {
                        "stat_id": "1006",
                        "value": "0"
                    },
                    {
                        "stat_id": "1009",
                        "value": "0"
                    },
                    {
                        "stat_id": "1007",
                        "value": "0"
                    },
                    {
                        "stat_id": "1010",
                        "value": "0"
                    },
                    {
                        "stat_id": "1004",
                        "value": "0"
                    },
                    {
                        "stat_id": "1039",
                        "value": "0"
                    },
                    {
                        "stat_id": "1003",
                        "value": "0"
                    },
                    {
                        "stat_id": "1040",
                        "value": "0"
                    },
                    {
                        "stat_id": "1041",
                        "value": "0"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.11526",
        "player_id": "11526",
        "name": {
            "full": "Andrés Muñoz",
            "first": "Andrés",
            "last": "Muñoz",
            "ascii_first": "Andrés",
            "ascii_last": "Muñoz"
        },
        "url": "https://sports.yahoo.com/mlb/players/11526",
        "status": "IL15",
        "status_full": "15-Day Injured List",
        "injury_note": "Shoulder",
        "on_disabled_list": "1",
        "editorial_player_key": "mlb.p.11526",
        "editorial_team_key": "mlb.t.12",
        "editorial_team_full_name": "Seattle Mariners",
        "editorial_team_abbr": "SEA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/seattle/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "75",
        "display_position": "RP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/Ja3DEioM3JdK7AFToSOOYQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11526.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/Ja3DEioM3JdK7AFToSOOYQ--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/11526.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "RP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681874368",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "4",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "4",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "0",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "3.1",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "0",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "1",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "10",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "4",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "15",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "0",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "0",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "1",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "3",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "0",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "0",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "1",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "1",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "5",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "0.00",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "1.50",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "3.00",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "8.10",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "49",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "3",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "1",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "0",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "0",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "4",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".333",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": "-",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "10.800",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "2.700",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "1.000",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "2",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "1",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "2",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "2",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "0",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "2.42"
                    },
                    {
                        "stat_id": "1021",
                        "value": "73.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "18.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".364"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "8"
                    },
                    {
                        "stat_id": "1038",
                        "value": "2"
                    },
                    {
                        "stat_id": "1020",
                        "value": "2.5"
                    },
                    {
                        "stat_id": "1018",
                        "value": "14.70"
                    },
                    {
                        "stat_id": "1034",
                        "value": "0"
                    },
                    {
                        "stat_id": "1019",
                        "value": "0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "2"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "100.0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".286"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".333"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".357"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.1"
                    }
                ]
            }
        }
    },
    {
        "player_key": "422.p.9691",
        "player_id": "9691",
        "name": {
            "full": "Robbie Ray",
            "first": "Robbie",
            "last": "Ray",
            "ascii_first": "Robbie",
            "ascii_last": "Ray"
        },
        "url": "https://sports.yahoo.com/mlb/players/9691",
        "status": "IL15",
        "status_full": "15-Day Injured List",
        "injury_note": "Elbow",
        "on_disabled_list": "1",
        "editorial_player_key": "mlb.p.9691",
        "editorial_team_key": "mlb.t.12",
        "editorial_team_full_name": "Seattle Mariners",
        "editorial_team_abbr": "SEA",
        "editorial_team_url": "https://sports.yahoo.com/mlb/teams/seattle/",
        "is_keeper": {
            "status": {},
            "cost": {}
        },
        "uniform_number": "38",
        "display_position": "SP",
        "headshot": {
            "url": "https://s.yimg.com/iu/api/res/1.2/6nZnoRcLmPNQkd8kSYRJlA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/9691.png",
            "size": "small"
        },
        "image_url": "https://s.yimg.com/iu/api/res/1.2/6nZnoRcLmPNQkd8kSYRJlA--~C/YXBwaWQ9eXNwb3J0cztjaD0yMzM2O2NyPTE7Y3c9MTc5MDtkeD04NTc7ZHk9MDtmaT11bGNyb3A7aD02MDtxPTEwMDt3PTQ2/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222023/9691.png",
        "is_undroppable": "0",
        "position_type": "P",
        "eligible_positions": {
            "position": [
                "P",
                "SP"
            ]
        },
        "has_player_notes": "1",
        "has_recent_player_notes": "1",
        "player_notes_last_timestamp": "1681874232",
        "player_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "0",
                        "value": "1",
                        "name": "Games Played",
                        "display_name": "GP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "24",
                        "value": "1",
                        "name": "Pitching Appearances",
                        "display_name": "APP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "25",
                        "value": "1",
                        "name": "Games Started",
                        "display_name": "GS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "50",
                        "value": "3.1",
                        "name": "Innings Pitched",
                        "display_name": "IP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "28",
                        "value": "0",
                        "name": "Wins",
                        "display_name": "W",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "29",
                        "value": "1",
                        "name": "Losses",
                        "display_name": "L",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "30",
                        "value": "0",
                        "name": "Complete Games",
                        "display_name": "CG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "31",
                        "value": "0",
                        "name": "Shutouts",
                        "display_name": "SHO",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "32",
                        "value": "0",
                        "name": "Saves",
                        "display_name": "SV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "33",
                        "value": "10",
                        "name": "Outs",
                        "display_name": "OUT",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "34",
                        "value": "4",
                        "name": "Hits",
                        "display_name": "H",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "35",
                        "value": "19",
                        "name": "Total Batters Faced",
                        "display_name": "TBF",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "36",
                        "value": "5",
                        "name": "Runs",
                        "display_name": "R",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "37",
                        "value": "3",
                        "name": "Earned Runs",
                        "display_name": "ER",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "38",
                        "value": "0",
                        "name": "Home Runs",
                        "display_name": "HR",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "39",
                        "value": "5",
                        "name": "Walks",
                        "display_name": "BB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "40",
                        "value": "0",
                        "name": "Intentional Walks",
                        "display_name": "IBB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "41",
                        "value": "0",
                        "name": "Hit Batters",
                        "display_name": "HBP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "42",
                        "value": "3",
                        "name": "Strikeouts",
                        "display_name": "K",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "43",
                        "value": "1",
                        "name": "Wild Pitches",
                        "display_name": "WP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "44",
                        "value": "0",
                        "name": "Balks",
                        "display_name": "BLK",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "45",
                        "value": "2",
                        "name": "Stolen Bases Allowed",
                        "display_name": "SB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "46",
                        "value": "0",
                        "name": "Batters Grounded Into Double Plays",
                        "display_name": "GIDP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "47",
                        "value": "0",
                        "name": "Save Chances",
                        "display_name": "SVOP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "48",
                        "value": "0",
                        "name": "Holds",
                        "display_name": "HLD",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "49",
                        "value": "5",
                        "name": "Total Bases Allowed",
                        "display_name": "TB",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "26",
                        "value": "8.10",
                        "name": "Earned Run Average",
                        "display_name": "ERA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "27",
                        "value": "2.70",
                        "name": "(Walks + Hits)/ Innings Pitched",
                        "display_name": "WHIP",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "56",
                        "value": "0.60",
                        "name": "Strikeouts per Walk Ratio",
                        "display_name": "K/BB",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "57",
                        "value": "8.10",
                        "name": "Strikeouts per Nine Innings",
                        "display_name": "K/9",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "58",
                        "value": "-",
                        "name": "Team",
                        "display_name": "TEAM",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "59",
                        "value": "-",
                        "name": "League",
                        "display_name": "LEAGUE",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": [
                                "P",
                                "B"
                            ]
                        }
                    },
                    {
                        "stat_id": "67",
                        "value": "91",
                        "name": "Pitch Count",
                        "display_name": "PC",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "76",
                        "value": "3",
                        "name": "Singles Allowed",
                        "display_name": "1BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "68",
                        "value": "1",
                        "name": "Doubles Allowed",
                        "display_name": "2BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "69",
                        "value": "0",
                        "name": "Triples Allowed",
                        "display_name": "3BA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "70",
                        "value": "-",
                        "name": "Relief Wins",
                        "display_name": "RW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "71",
                        "value": "-",
                        "name": "Relief Losses",
                        "display_name": "RL",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "72",
                        "value": "0",
                        "name": "Pickoffs",
                        "display_name": "PICK",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "73",
                        "value": "0",
                        "name": "Relief Appearances",
                        "display_name": "RAPP",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "74",
                        "value": ".474",
                        "name": "On-base Percentage Against",
                        "display_name": "OBPA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "75",
                        "value": ".000",
                        "name": "Winning Percentage",
                        "display_name": "WIN%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "77",
                        "value": "10.800",
                        "name": "Hits Per Nine Innings",
                        "display_name": "H/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "78",
                        "value": "13.500",
                        "name": "Walks Per Nine Innings",
                        "display_name": "BB/9",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "79",
                        "value": "0",
                        "name": "No Hitters",
                        "display_name": "NH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "80",
                        "value": "-",
                        "name": "Perfect Games",
                        "display_name": "PG",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "81",
                        "value": "-",
                        "name": "Save Percentage",
                        "display_name": "SV%",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "82",
                        "value": "0",
                        "name": "Inherited Runners Scored",
                        "display_name": "IRA",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "83",
                        "value": "0",
                        "name": "Quality Starts",
                        "display_name": "QS",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "84",
                        "value": "0",
                        "name": "Blown Saves",
                        "display_name": "BSV",
                        "sort_order": "0",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "85",
                        "value": "0",
                        "name": "Net Saves",
                        "display_name": "NSV",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "89",
                        "value": "0",
                        "name": "Saves + Holds",
                        "display_name": "SV+H",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "90",
                        "value": "0",
                        "name": "Net Saves and Holds",
                        "display_name": "NSVH",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    },
                    {
                        "stat_id": "91",
                        "value": "-1",
                        "name": "Net Wins",
                        "display_name": "NW",
                        "sort_order": "1",
                        "position_types": {
                            "position_type": "P"
                        }
                    }
                ]
            }
        },
        "player_advanced_stats": {
            "coverage_type": "season",
            "season": "2023",
            "stats": {
                "stat": [
                    {
                        "stat_id": "1032",
                        "value": "6.07"
                    },
                    {
                        "stat_id": "1021",
                        "value": "64.0"
                    },
                    {
                        "stat_id": "1022",
                        "value": "18.0"
                    },
                    {
                        "stat_id": "1031",
                        "value": ".364"
                    },
                    {
                        "stat_id": "1036",
                        "value": "0.0"
                    },
                    {
                        "stat_id": "1037",
                        "value": "7"
                    },
                    {
                        "stat_id": "1038",
                        "value": "3"
                    },
                    {
                        "stat_id": "1020",
                        "value": "0.8"
                    },
                    {
                        "stat_id": "1018",
                        "value": "27.30"
                    },
                    {
                        "stat_id": "1034",
                        "value": "190"
                    },
                    {
                        "stat_id": "1019",
                        "value": "91.0"
                    },
                    {
                        "stat_id": "1023",
                        "value": "0"
                    },
                    {
                        "stat_id": "1024",
                        "value": "0"
                    },
                    {
                        "stat_id": "1025",
                        "value": "0"
                    },
                    {
                        "stat_id": "1028",
                        "value": ".308"
                    },
                    {
                        "stat_id": "1029",
                        "value": ".474"
                    },
                    {
                        "stat_id": "1030",
                        "value": ".385"
                    },
                    {
                        "stat_id": "1033",
                        "value": "0.0"
                    }
                ]
            }
        }
    }
]