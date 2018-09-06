const allowedBearings = ["north", "east", "south", "west"]

class Robot {

  constructor() {
    this.bearing = "north"
    this.coordinates = [0,0]
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y]
  }

  setBearing(direction) {
    if (allowedBearings.includes(direction)) {
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    for (const index in allowedBearings) {
        if (this.bearing === allowedBearings[index]) {
            if (this.bearing === "west") {
              this.bearing = "north"
              break;
            } else {
              this.bearing = allowedBearings[parseInt(index)+1]
              break;
            }
        }
    }
  }

  turnLeft() {
    for (const index in allowedBearings) {
        if (this.bearing === allowedBearings[index]) {
            if (this.bearing === "north") {
              this.bearing = "west"
              break;
            } else {
              this.bearing = allowedBearings[parseInt(index)-1]
              break;
            }
        }
    }
  }

  advance() {
    switch (this.bearing) {
      case "north": {
        return ++this.coordinates[1]
        break;
      }
      case "east": {
        return ++this.coordinates[0]
        break;
      }
      case "south": {
        return --this.coordinates[1]
        break;
      }
      case "west": {
        return --this.coordinates[0]
        break;
      }
    }
  }

  translateInstructions(text) {
    const currRobot = this
    const array = text.split('');
      array.forEach(function(element) {
          switch (element) {
            case "R":
              currRobot.turnRight()
              break;
            case "L":
              currRobot.turnLeft()
              break;
            case "A":
              currRobot.advance()
              break;
          }
      })
    }


}
