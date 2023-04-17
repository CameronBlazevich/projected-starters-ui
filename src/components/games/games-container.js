
import Games from './games'

const GamesContainer = (props) => {
    const {playerData, leagueId, title} = props;

    if (playerData?.length === 0) {
        return <div></div>
    }

    return (
        <div>
            <h2>{`${title}`} {leagueId ? `(League ${leagueId})`: ""}</h2>
            <Games playerData={playerData}></Games>
        </div>
    )
}

export default GamesContainer;