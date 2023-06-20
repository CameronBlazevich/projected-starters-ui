

export const getCurrentPlayEvents = (gameData) => {
    const currentPlayEvents = gameData?.liveData?.plays?.currentPlay?.playEvents;
    if (!currentPlayEvents) {
        console.log('no current play events')
        return [];
    }

    return currentPlayEvents;
}

export const getCurrentMatchup = (gameData) => {
    const matchup = gameData?.liveData?.plays?.currentPlay?.matchup;
    if (!matchup) {
        console.log('no current matchup data')
        return;
    }

    return matchup;
}