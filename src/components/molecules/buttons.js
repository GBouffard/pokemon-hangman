import React from 'react';
import PropTypes from 'prop-types';
import { alphabetLetters } from "../../constants/game-constants";
import Button from '../atoms/button';

class Buttons extends React.Component {
  constructor(props) {
    super();
    this.clickLetter = this.clickLetter.bind(this);
    this.state = {
      choices: []
    };
  }

  clickLetter(letter) {
    const newChoices = this.state.choices;
    newChoices.push(letter);
    this.setState({
      choices: newChoices
    });
    this.props.onClick(letter)
  }

  render() {
    return alphabetLetters.map(letter => {
      const isButtonHidden = this.state.choices.includes(letter);

      const button = (
        <Button
          className="App__alphabet-letter-button"
          key={letter}
          children={letter}
          onClick={() => this.clickLetter(letter)} />
      );

      const hiddenButton = (letter) => (
        <div
          className="App__alphabet-letter-hidden-button"
          key={letter}>
          {letter}
        </div>
      );

      return isButtonHidden ? hiddenButton(letter) : button;
    })
  };
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Buttons;