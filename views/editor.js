import React from "react";
import {useParams} from 'react-router-dom';

class SpeakerBox extends React.Component {
  constructor(props) {
    super(props);
    if (window.localStorage.getItem(this.props.id + this.props.speaker)!==null) {
      this.state = {
        'text': window.localStorage.getItem(this.props.id + this.props.speaker)
      }
    }
    else {
      this.state = {
        'text': ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput (event) {
    let text = event.target.value;
    this.setState({'text': event.target.value})
    window.localStorage.setItem(this.props.id + this.props.speaker, text)
  }
  render() {
    return (
      <form>
        <p className='menu-label'>{this.props.speaker}</p>
        <textarea value={this.state.text} className="textarea" onChange={this.handleInput}/>
      </form>
    );
  }
}

class DebateTeam extends React.Component {
  render() {
    return (
      <div className="column">
        <SpeakerBox speaker={this.props.speaker1} id={this.props.id}/>
        <SpeakerBox speaker={this.props.speaker2} id={this.props.id}/>
      </div>
    );
  }
}

class DebateHalf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: "both"
    };
  }
  handleFocus(i) {
    this.setState({
      shown: i
    });
  }
  render() {
    return (
      <div className="columns">
        <DebateTeam speaker1={this.props.speaker1} speaker2={this.props.speaker2} id={this.props.id}/>
        <DebateTeam speaker1={this.props.speaker3} speaker2={this.props.speaker4} id={this.props.id}/>
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section">
        <form>
        <input type='text' placeholder='Motion title' className='input'/>
        </form>
        <DebateHalf
          speaker1={'pm'}
          speaker2={'dpm'}
          speaker3={'lo'}
          speaker4={'dlo'}
          id={this.props.match.params.id}
        />
        <DebateHalf
          speaker1={'mg'}
          speaker2={'gw'}
          speaker3={'mo'}
          speaker4={'ow'}
          id={this.props.match.params.id}
        />
      </div>
    );
  }
}

export { Editor };
