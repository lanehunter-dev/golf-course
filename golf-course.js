class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if (this.openings >= group.length) {
      for (var i = 0; i < group.length; i++) {
        this.openings -= 1;
        this.currentlyPlaying.unshift(group[i].name);
      }
    }
  }
  recommendTees(golfer) {
    if (golfer.handicap <= 10) {
      return 'You should play from the Difficult Tees.'
    } else if (golfer.handicap >= 15) {
      return 'You should play from the Forward Tees.'
    } else {
      return 'You should play from the Middle Tees.'
    }
  }
}

module.exports = GolfCourse;
