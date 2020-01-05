class Golfer {
  constructor({name, handicap}) {
    this.name = name;
    this.handicap = handicap;
    this.frustration = 0;
    this.confidence = 0;
  }
  calculateAvg() {
    return `I usually shoot a ${72 + this.handicap} on average.`
  }
  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration = 500;
    } else if (golfCourse.difficulty === 'moderate') {
      this.frustration = 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  }
  whatYaShoot(shot) {
    if (shot > 0) {
      this.frustration += 20;
      return 'Doh!';
    } else if (shot < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else {
      this.frustration = 10;
      return 'Booyah!'
    }
  }
}

module.exports = Golfer;
