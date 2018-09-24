import { Component } from 'react'
import InputField from '../components/InputField'
import ActionButton from '../components/ActionButton'

export default class UploadVideoCard extends Component {
  state = {
    url: ''
  }

  _handleOnchangeInputValue = (e) => this.setState({ url: e.target.value })

  _checkIfInputIsFilled = () => {
    const { url } = this.state
    if (!url) return true
    return false
  }

  render () {
    const { url } = this.state
    return (
      <div className="container">
        <div className="form">
          <InputField
            placeholder="Enter your video url"
            value={url}
            onChange={this._handleOnchangeInputValue}
          />
          <ActionButton
            text="Next"
            backgroundColor="#1abc9c"
            textColor="white"
            onClick={() => console.log('preesed')}
            disabled={this._checkIfInputIsFilled()}
          />
        </div>
        <style jsx>
          {`
            .container {
              height: 280px;
              width: 560px;
              background-color: white;
              margin-top: 50px;
              border-radius: 8px;
              box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.19);
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .form {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    )
  }
}