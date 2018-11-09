import gameLogic from "../services/game-logic";
import pokemonList from "../constants/game-constants";

describe("Game logic - ", () => {
  describe("When a game starts / At initial state - ", () => {
    it("Should choose a random name within the list of first generation pokemon names", () => {
      const chosenName = gameLogic.choseRandomPokemonName();
      expect(pokemonList).toEqual(expect.arrayContaining([chosenName]));
    });

    it("Should start with an initial number of 6 lives", () => {
      expect(gameLogic.lives).toEqual(6);
    });

    it("Should start with an empty array of given letters", () => {
      expect(gameLogic.givenLetters).toEqual([]);
    });

    it("Should know the state representation of the guessed word with underscores for each letter", () => {
      const chosenName = gameLogic.choseRandomPokemonName();
      const mockChosenNameGuess = chosenName.replace(/\D/g, '_');

      expect(gameLogic.guess(chosenName)).toEqual(mockChosenNameGuess);
    });
  });

  describe("During a game - ", () => {
    let chosenName;
    beforeAll(() => {
      chosenName = 'GUILLAUMECHU';
    });

    describe("On a correct letter selection - ", () => {
      let isCorrectSpy;
      beforeAll(() => {
        isCorrectSpy = jest.spyOn(gameLogic, 'isCorrect');
        gameLogic.choseLetter(chosenName, 'L');
      });

      it("Should know that the chosen letter is correct", () => {
        expect(isCorrectSpy).toHaveBeenCalled();
      });

      it("Should not update the number of lives left", () => {
        expect(gameLogic.lives).toEqual(6);
      });

      it("Should add the letter to the array of given letters", () => {
        expect(gameLogic.givenLetters).toEqual(['L']);
      });

      it("Should know the new state representation of the guessed word with correct replacements", () => {
        expect(gameLogic.guess(chosenName)).toEqual('___LL_______');
      });
    });

    describe("On an incorrect letter selection - ", () => {
      let isIncorrectSpy;
      beforeAll(() => {
        isIncorrectSpy = jest.spyOn(gameLogic, 'isIncorrect');
        gameLogic.choseLetter(chosenName, 'Z');
      });

      it("Should know that the chosen letter is incorrect", () => {
        expect(isIncorrectSpy).toHaveBeenCalled();
      });

      it("Should update the number of lives left by removing one", () => {
        expect(gameLogic.lives).toEqual(5);
      });

      it("Should add the letter to the array of given letters", () => {
        expect(gameLogic.givenLetters).toEqual(['L', 'Z']);
      });

      xit("Should not update the state representation of the guessed word", () => { });
    });

    xit("Should not allow to select a letter twice", () => { });
  });

  describe("When a game finishes - ", () => {
    describe("When the player won the game - ", () => {
      xit("Should still has life/lives left", () => { });

      xit("Should have all the letters from the chosen name in the array of given letters", () => { });

      xit("Should have a state representation of the guessed word equal to the chosen Pokemon name", () => { });

      xit("Should know that the player won", () => { });
    });

    describe("When the player lost the game - ", () => {
      xit("Should have no life left", () => { });

      xit("Should not have all the letters from the chosen name in the array of given letters", () => { });

      xit("Should have a state representation of the guessed word that differs from the chosen Pokemon name", () => { });

      xit("Should know that the player lost", () => { });
    });
  });

  describe("When a brand new game starts - ", () => {
    xit("Should choose a new random name within the list of first generation pokemon names", () => { });

    xit("Should re-initialize the number of lives to 6", () => { });

    xit("Should re-initialize the array of given letters to an empty array", () => { });

    xit("Should re-initialize the state representation of the guessed word with underscores for each letter", () => { });

    xit("Should know that the game is not finished anymore (that the player has not won or lost anymore)", () => { });
  });
});
