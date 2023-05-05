const parkData =
    [
    { TeamAbbr: "COL", Team: "Rockies", Venue: "Coors Field", Year: "2021-2023", ParkFactor: 112, wOBACon: 109, BACON: 108, R: 125, OBP: 109, H: 115, Singles: 111, Doubles: 119, Triples: 172, HR: 119, BB: 94, SO: 83, PA: 13981 },
    { TeamAbbr: "CIN", Team: "Reds", Venue: "Great American Ball Park", Year: "2021-2023", ParkFactor: 111, wOBACon: 114, BACON: 110, R: 123, OBP: 107, H: 110, Singles: 104, Doubles: 109, Triples: 74, HR: 144, BB: 105, SO: 102, PA: 15029 },
    { TeamAbbr: "BOS", Team: "Red Sox", Venue: "Fenway Park", Year: "2021-2023", ParkFactor: 109, wOBACon: 109, BACON: 108, R: 119, OBP: 107, H: 111, Singles: 108, Doubles: 122, Triples: 142, HR: 107, BB: 100, SO: 94, PA: 15014 },
    { TeamAbbr: "PHI", Team: "Phillies", Venue: "Citizens Bank Park", Year: "2021-2023", ParkFactor: 103, wOBACon: 104, BACON: 102, R: 106, OBP: 101, H: 101, Singles: 98, Doubles: 100, Triples: 130, HR: 112, BB: 100, SO: 102, PA: 14996 },
    { TeamAbbr: "LAA", Team: "Angels", Venue: "Angel Stadium", Year: "2021-2023", ParkFactor: 102, wOBACon: 103, BACON: 101, R: 104, OBP: 101, H: 101, Singles: 100, Doubles: 92, Triples: 95, HR: 120, BB: 107, SO: 101, PA: 14025 },
    { TeamAbbr: "BAL", Team: "Orioles", Venue: "Oriole Park at Camden Yards", Year: "2021-2023", ParkFactor: 102, wOBACon: 102, BACON: 102, R: 104, OBP: 102, H: 104, Singles: 107, Doubles: 94, Triples: 79, HR: 109, BB: 98, SO: 96, PA: 13681 },
    { TeamAbbr: "CHW", Team: "White Sox", Venue: "Guaranteed Rate Field", Year: "2021-2023", ParkFactor: 102, wOBACon: 101, BACON: 98, R: 104, OBP: 101, H: 98, Singles: 96, Doubles: 92, Triples: 77, HR: 127, BB: 106, SO: 95, PA: 14179 },
    { TeamAbbr: "KC", Team: "Royals", Venue: "Kauffman Stadium", Year: "2021-2023", ParkFactor: 102, wOBACon: 99, BACON: 103, R: 104, OBP: 103, H: 107, Singles: 111, Doubles: 114, Triples: 136, HR: 76, BB: 93, SO: 89, PA: 14003 },
    { TeamAbbr: "PIT", Team: "Pirates", Venue: "PNC Park", Year: "2021-2023", ParkFactor: 102, wOBACon: 98, BACON: 100, R: 104, OBP: 104, H: 103, Singles: 105, Doubles: 106, Triples: 115, HR: 88, BB: 106, SO: 89, PA: 14394 },
    { TeamAbbr: "LAD", Team: "Dodgers", Venue: "Dodger Stadium", Year: "2021-2023", ParkFactor: 101, wOBACon: 105, BACON: 102, R: 102, OBP: 99, H: 100, Singles: 95, Doubles: 102, Triples: 79, HR: 122, BB: 92, SO: 108, PA: 15194 },
    { TeamAbbr: "ARI", Team: "D-backs", Venue: "Chase Field", Year: "2021-2023", ParkFactor: 101, wOBACon: 101, BACON: 103, R: 102, OBP: 101, H: 105, Singles: 106, Doubles: 116, Triples: 121, HR: 83, BB: 96, SO: 97, PA: 13802 },
    { TeamAbbr: "ATL", Team: "Braves", Venue: "Truist Park", Year: "2021-2023", ParkFactor: 100, wOBACon: 103, BACON: 103, R: 100, OBP: 101, H: 100, Singles: 101, Doubles: 96, Triples: 86, HR: 100, BB: 102, SO: 107, PA: 14759 },
    { TeamAbbr: "HOU", Team: "Astros", Venue: "Minute Maid Park", Year: "2021-2023", ParkFactor: 100, wOBACon: 102, BACON: 101, R: 100, OBP: 99, H: 100, Singles: 98, Doubles: 98, Triples: 151, HR: 107, BB: 101, SO: 104, PA: 14881 },
    { TeamAbbr: "CHC", Team: "Cubs", Venue: "Wrigley Field", Year: "2021-2023", ParkFactor: 100, wOBACon: 100, BACON: 101, R: 100, OBP: 100, H: 100, Singles: 102, Doubles: 91, Triples: 144, HR: 99, BB: 103, SO: 103, PA: 15165 },
    { TeamAbbr: "MIL", Team: "Brewers", Venue: "American Family Field", Year: "2021-2023", ParkFactor: 100, wOBACon: 100, BACON: 98, R: 100, OBP: 99, H: 97, Singles: 94, Doubles: 93, Triples: 108, HR: 113, BB: 109, SO: 103, PA: 14172 },
    { TeamAbbr: "SF", Team: "Giants", Venue: "Oracle Park", Year: "2021-2023", ParkFactor: 100, wOBACon: 100, BACON: 102, R: 100, OBP: 102, H: 100, Singles: 101, Doubles: 109, Triples: 148, HR: 81, BB: 104, SO: 101, PA: 14355 },
    { TeamAbbr: "WSH", Team: "Nationals", Venue: "Nationals Park", Year: "2021-2023", ParkFactor: 100, wOBACon: 100, BACON: 99, R: 100, OBP: 99, H: 100, Singles: 97, Doubles: 103, Triples: 80, HR: 108, BB: 94, SO: 98, PA: 14611 },
    { TeamAbbr: "NYY", Team: "Yankees", Venue: "Yankee Stadium", Year: "2021-2023", ParkFactor: 99, wOBACon: 100, BACON: 98, R: 98, OBP: 98, H: 95, Singles: 93, Doubles: 90, Triples: 57, HR: 113, BB: 104, SO: 107, PA: 14867 },
    { TeamAbbr: "CLE", Team: "Guardians", Venue: "Progressive Field", Year: "2021-2023", ParkFactor: 99, wOBACon: 99, BACON: 99, R: 98, OBP: 99, H: 98, Singles: 97, Doubles: 97, Triples: 70, HR: 105, BB: 103, SO: 102, PA: 13624 },
    { TeamAbbr: "TOR", Team: "Blue Jays", Venue: "Rogers Centre", Year: "2021-2023", ParkFactor: 99, wOBACon: 99, BACON: 98, R: 98, OBP: 97, H: 100, Singles: 97, Doubles: 112, Triples: 54, HR: 106, BB: 88, SO: 99, PA: 12046 },
    { TeamAbbr: "TEX", Team: "Rangers", Venue: "Globe Life Field", Year: "2021-2023", ParkFactor: 99, wOBACon: 98, BACON: 98, R: 98, OBP: 99, H: 99, Singles: 100, Doubles: 96, Triples: 92, HR: 101, BB: 98, SO: 99, PA: 14555 },
    { TeamAbbr: "MIN", Team: "Twins", Venue: "Target Field", Year: "2021-2023", ParkFactor: 98, wOBACon: 97, BACON: 98, R: 96, OBP: 99, H: 98, Singles: 99, Doubles: 104, Triples: 64, HR: 92, BB: 104, SO: 100, PA: 14843 },
    { TeamAbbr: "MIA", Team: "Marlins", Venue: "loanDepot park", Year: "2021-2023", ParkFactor: 97, wOBACon: 97, BACON: 99, R: 94, OBP: 99, H: 98, Singles: 100, Doubles: 96, Triples: 137, HR: 86, BB: 97, SO: 101, PA: 14047 },
    { TeamAbbr: "DET", Team: "Tigers", Venue: "Comerica Park", Year: "2021-2023", ParkFactor: 97, wOBACon: 94, BACON: 96, R: 94, OBP: 100, H: 98, Singles: 100, Doubles: 100, Triples: 206, HR: 73, BB: 104, SO: 93, PA: 13668 },
    { TeamAbbr: "TB", Team: "Rays", Venue: "Tropicana Field", Year: "2021-2023", ParkFactor: 96, wOBACon: 98, BACON: 98, R: 92, OBP: 97, H: 94, Singles: 93, Doubles: 98, Triples: 75, HR: 95, BB: 99, SO: 109, PA: 14370 },
    { TeamAbbr: "NYM", Team: "Mets", Venue: "Citi Field", Year: "2021-2023", ParkFactor: 95, wOBACon: 94, BACON: 96, R: 90, OBP: 97, H: 94, Singles: 99, Doubles: 84, Triples: 69, HR: 88, BB: 104, SO: 105, PA: 14542 },
    { TeamAbbr: "OAK", Team: "Athletics", Venue: "Oakland Coliseum", Year: "2021-2023", ParkFactor: 95, wOBACon: 93, BACON: 96, R: 90, OBP: 97, H: 96, Singles: 99, Doubles: 99, Triples: 96, HR: 78, BB: 97, SO: 100, PA: 14653 },
    { TeamAbbr: "STL", Team: "Cardinals", Venue: "Busch Stadium", Year: "2021-2023", ParkFactor: 95, wOBACon: 93, BACON: 95, R: 90, OBP: 96, H: 97, Singles: 100, Doubles: 100, Triples: 83, HR: 81, BB: 93, SO: 96, PA: 13793 },
    { TeamAbbr: "SD", Team: "Padres", Venue: "Petco Park", Year: "2021-2023", ParkFactor: 94, wOBACon: 94, BACON: 95, R: 88, OBP: 95, H: 93, Singles: 96, Doubles: 87, Triples: 57, HR: 96, BB: 99, SO: 105, PA: 14919 },
    { TeamAbbr: "SEA", Team: "Mariners", Venue: "T-Mobile Park", Year: "2021-2023", ParkFactor: 91, wOBACon: 91, BACON: 92, R: 83, OBP: 91, H: 90, Singles: 92, Doubles: 84, Triples: 49, HR: 94, BB: 95, SO: 108, PA: 14573 }
    ]

export const getParkFactor = (teamAbbr) => {
    return parkData.find(pd => pd.TeamAbbr === teamAbbr);
}

export const getTeamName = (teamAbbr) => {
    return parkData.find(pd => pd.TeamAbbr === teamAbbr)?.Team;
}