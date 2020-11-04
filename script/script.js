const sounds = [
    {
        key: 'Q',
        audio: './audio/bonang_gamelan_hit_soft.mp3',
    },
    {   key: 'W',
        audio: './audio/gong_gamelan_hit_soft.mp3',
    },
    {
        key: 'E',
        audio: './audio/gong_small_gamelan_hit_soft.mp3',
    },
    {   key: 'A',
        audio: './audio/drum_tom_plastic.mp3',
    },
    {
        key: 'S',
        audio: './audio/cymbal_crash_tap.mp3',
    },
    {   key: 'D',
        audio: './audio/waterphone_hit_condenser.mp3',
    },
    {
        key: 'Z',
        audio: './audio/toy_drum_hit.mp3',
    },
    {   key: 'X',
        audio: './audio/plastic_hit_single_strike.mp3',
    },
    {
        key: 'C',
        audio: './audio/open_hi_hat.mp3'
    }    
// “Sound effects obtained from https://www.zapsplat.com “
]

const App = () => (
    <div id="drum-machine">
        <h1>Drum Machine v2 By Demo</h1>
        <h5 id="display">Click on any Button or Press to any appropriate Key on your Keyboard to play</h5>
        <div className="drum">
            {sounds.map((sound, idx) => (
                <Drum key={idx} id={sound.key} audio={sound.audio} />
            )
            )}
        </div>
    </div>
)

class Drum extends React.Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyPlay);
    }
    componentDidUnMount() {
        window.removeEventListener('keydown', this.keyPlay);
    }

    keyPlay = (e) => {
        if(e.key.toUpperCase() == this.props.id) {
            this.play();
        }
    }

    play = () => {
        let audio = this.audio.current;
        audio.currentTime = 0;
        audio.play();
        audio.parentNode.classList.add('drum-play');
        setTimeout(() => {audio.parentNode.classList.remove('drum-play')}, 300);
        document.getElementById('display').innerText = this.props.id;
    }
    
    render() {
        const {id, audio} = this.props;

        return (
            <div className="drum-pad" id={`drum-${id}`}  onClick={this.play}>
                {id}
                <audio ref={this.audio} className="clip" src={audio} id={id}></audio>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
