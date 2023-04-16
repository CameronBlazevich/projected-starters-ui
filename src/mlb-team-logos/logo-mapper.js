const logoMap = {
"TB":  139 ,
"BAL": 110 ,
"BOS": 111 ,
"LAD":  119,
"TOR":  141,
"ATL":  144,
"MIL":  158,
"LAA":  108,
"TEX":  140,
"NYY":  147,
"CIN":  113,
"NYM":  121,
"SD":   135,
"CHW":  145,
"CHC":  112,
"SF":   137,
"HOU":  117,
"CLE":  114,
"ARI":  109,
"SEA":  136,
"MIN":  142,
"PIT":  134,
"STL":  138,
"COL":  115,
"PHI":  143,
"OAK":  133,
"WSH":  120,
"DET":  116,
"MIA":  146,
"KC":   118
};

export const getLogoId = (teamAbbr) => {
    const logoId = logoMap[teamAbbr];
    if (!logoId) {
        console.log(`No logoId mapping found for ${teamAbbr}`)
        return 1;
    }
    return logoId;
}