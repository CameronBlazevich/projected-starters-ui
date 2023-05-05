import { useEffect, useState } from 'react';
import {Row, Col, Table} from 'reactstrap'
import { getPitcherGameLog } from '../../api/pitcher-stats';
import GameLog from './game-log';
import PitcherSplits from './pitcher-splits';
import PitcherSeasons from './season-stats';
import { useAuthContext } from '../../context/auth-context';
import { handleUnauthorized } from '../errors/handle-unauthorized';


const PitcherInfo = (props) => {
    const [gameLog, setGameLog] = useState();
    const {logout} = useAuthContext();

    const { pitcher, token } = props;

    useEffect(() =>{
        const getGameLog = async (token, pitcherId) => {
            const resp = await getPitcherGameLog(token, pitcherId);
            if (resp.success) {
                setGameLog(resp.data)
            } else {
                handleUnauthorized(resp.error, logout)
                console.error(resp.error)
            }
        }

        getGameLog(token, pitcher.playerId);

    }, [pitcher])


    
    return (
        <div className="watchlist-pitcher-info">
            <Row>
                <Col>
                    <img src={pitcher.imageUrl}></img>
                    {pitcher.name.full}
                </Col>
                <Col>
                    {/* <h6>Also available in: </h6>
                    League 1
                    League 3  */}
                </Col>
            </Row>
            <Row>
            <div className='solid-border margin-5'>
                <div className='text-align-center'>Since 2020</div>
                <PitcherSeasons playerId={pitcher.playerId}></PitcherSeasons>
                </div>
            </Row>
            <Row>
                <div className='solid-border margin-5'>
                <div className='text-align-center'>Basic Splits (Career)</div>
                <PitcherSplits playerId={pitcher.playerId}></PitcherSplits>
                </div>
            </Row>
            <Row>
                <div className='solid-border margin-5'>
                    <div className='text-align-center'>Game Log (Current Season)</div>
                    <GameLog gameLog={gameLog}></GameLog>
               </div>
            </Row>
        </div>
    )

}

export default PitcherInfo; 