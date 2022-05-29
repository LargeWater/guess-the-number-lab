const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  prevGuesses: [],
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      do {
        this.prevGuesses.push(this.getGuess());
        this.render();
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
  },
  getGuess: function () {
    let guess;
    do {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      );
    } while (
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )
    return guess
  },
    
}

game.play();