import gameLogic from "../services/game-logic";
import pokemonList from "../constants/game-constants";

describe("Game logic - ", () => {
  let chosenName;
  describe("When a game starts / At initial state - ", () => {
    it("Should choose a random name within the list of first generation pokemon names", () => {
      chosenName = gameLogic.choseRandomPokemonName();
      expect(pokemonList).toEqual(expect.arrayContaining([chosenName]));
    });

    it("Should start with an initial number of 6 lives", () => {
      expect(gameLogic.lives).toEqual(6);
    });

    it("Should start with an empty array of choices", () => {
      expect(gameLogic.choices).toEqual([]);
    });

    it("Should know the state representation of the guessed word with underscores for each letter", () => {
      chosenName = gameLogic.choseRandomPokemonName();
      const mockChosenNameGuess = chosenName.replace(/\D/g, '_');

      expect(gameLogic.guess(chosenName)).toEqual(mockChosenNameGuess);
    });
  });

  describe("During a game - ", () => {
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

      it("Should add the letter to the array of choices", () => {
        expect(gameLogic.choices).toEqual(['L']);
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

      it("Should add the letter to the array of choices", () => {
        expect(gameLogic.choices).toEqual(['L', 'Z']);
      });

      it("Should not update the state representation of the guessed word", () => {
        expect(gameLogic.guess(chosenName)).toEqual('___LL_______');
      });
    });

    it("Should not allow to select a letter twice", () => {
      expect(() => gameLogic.choseLetter(chosenName, 'L')).toThrow(new Error('This letter was already chosen!'));
    });
  });

  describe("When a game finishes - ", () => {
    describe("When the player won the game - ", () => {
      beforeAll(() => {
        gameLogic.reStart();
        ['G', 'U', 'I', 'L', 'A', 'M', 'E', 'C', 'X', 'Y', 'Z', 'H'].forEach(letter => gameLogic.choseLetter(chosenName, letter));
      });

      it("Should still has life/lives left", () => {
        expect(gameLogic.lives).toBeGreaterThan(0);
      });

      it("Should have all the letters from the chosen name in the array of choices", () => {
        expect(gameLogic.choices).toEqual(expect.arrayContaining(['G', 'U', 'I', 'L', 'A', 'M', 'E', 'C', 'H']));
      });

      xit("Should have a state representation of the guessed word equal to the chosen Pokemon name", () => { });

      xit("Should know that the player won", () => { });
    });

    describe("When the player lost the game - ", () => {
      xit("Should have no life left", () => { });

      xit("Should not have all the letters from the chosen name in the array of choices", () => { });

      xit("Should have a state representation of the guessed word that differs from the chosen Pokemon name", () => { });

      xit("Should know that the player lost", () => { });
    });
  });

  describe("When a brand new game starts - ", () => {
    beforeAll(() => {
      gameLogic.reStart();
    });

    xit("Should choose a new random name within the list of first generation pokemon names", () => { });

    it("Should re-initialize the number of lives to 6", () => {
      expect(gameLogic.lives).toEqual(6);
    });

    it("Should re-initialize the array of choices to an empty array", () => {
      expect(gameLogic.choices).toEqual([]);
    });

    xit("Should re-initialize the state representation of the guessed word with underscores for each letter", () => { });

    xit("Should know that the game is not finished anymore (that the player has not won or lost anymore)", () => { });
  });
});
