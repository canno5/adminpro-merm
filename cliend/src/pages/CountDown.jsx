import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const UrgeWithPleasureComponent = () => (
    <div className="countdown">
        <CountdownCircleTimer
            isPlaying
            duration={7}
            colors={['#202020', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    </div>
);
export default UrgeWithPleasureComponent