function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Sounds = [
{ letter: 'Q',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  id: 'Heater-1' },
{ letter: 'W',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  id: 'Heater-2' },

{ letter: 'E',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  id: 'Heater-3' },
{ letter: 'A',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  id: 'Heater-4' },
{ letter: 'S',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  id: 'Clap' },
{ letter: 'D',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  id: 'Open-HH' },
{ letter: 'Z',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  id: "Kick-n'-Hat" },
{ letter: 'X',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  id: 'Kick' },
{ letter: 'C',
  src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', id: 'Closed-HH' }];

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handelDisplay",



    display => {
      this.setState({
        display });

    });this.state = { display: "" };}
  render() {

    return (

      React.createElement("div", { id: "drum-machine", className: "drum" },

      React.createElement("div", { id: "display", className: "display" },
      React.createElement("p", null, this.state.display)),


      Sounds.map((sound, idx) =>
      React.createElement(LetterBox, { id: sound.id, letter: sound.letter, num: sound.idx, src: sound.src,
        handelDisplay: this.handelDisplay }))));






  }}

;


class LetterBox extends React.Component {

  constructor(props) {
    super(props);_defineProperty(this, "handleKey",











    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        console.log(e.keyCode);
        this.plaudio.current.play();
        this.props.handelDisplay(this.props.id);
      }
    });_defineProperty(this, "handleClick",

    () => {

      this.plaudio.current.play();
      this.props.handelDisplay(this.props.id);

    });this.plaudio = React.createRef();}componentDidMount() {document.addEventListener("keydown", this.handleKey);}componentWillUnmount() {document.removeEventListener("keydown", this.handleKey);}

  render() {

    return (

      React.createElement("div", { id: this.props.id, className: "drum-pad mg", onClick: this.handleClick, handelDisplay: this.props.handelDisplay },
      React.createElement("p", null, " ", this.props.letter, " "),
      React.createElement("audio", { ref: this.plaudio, id: this.props.letter, className: "clip", src: this.props.src })));


  }}
;


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));