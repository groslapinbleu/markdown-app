import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { sampleText } from './sampleText'
import marked from 'marked'

class App extends Component {
  state = {
    text: sampleText
  }

  componentDidMount() {
    const text = localStorage.getItem('text')
    if (text) {
      this.setState({text})
    }
  }

  componentDidUpdate() {
    const text = this.state.text
    localStorage.setItem('text', text)
  }

  renderText = (text) => {
    const __html = marked(text, { sanitize: true })
    return {__html}
  }

  handleChange = (event) => {
    //console.log(event.target.value)
    const text = event.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea
              className="form-control"
              rows="35"
              value={this.state.text}
              onChange={this.handleChange}>

            </textarea>
          </div>
          <div className="col-sm-6">
            <div 
            dangerouslySetInnerHTML={this.renderText(this.state.text)}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


