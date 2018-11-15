import React from 'react';
import Media from 'react-media';
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

      const button =
        <Media query="(max-width: 640px)">
          {isMobile =>
            <Button
              className={`App__alphabet-letter-button ${isMobile ? "App__alphabet-letter-button--mobile" : null}`}
              key={letter}
              children={letter}
              onClick={() => this.clickLetter(letter)} />
          }
        </Media>;

      const hiddenButton = (letter) =>
        <Media query="(max-width: 640px)">
          {isMobile =>
            <div
              className={`App__alphabet-letter-hidden-button ${isMobile ? "App__alphabet-letter-hidden-button--mobile" : null}`}
              key={letter}>
              {letter}
            </div>
          }
        </Media>;

      return isButtonHidden ? hiddenButton(letter) : button;
    })
  };
}

Buttons.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Buttons;