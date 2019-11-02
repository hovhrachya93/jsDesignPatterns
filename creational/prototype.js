const car = {
  wheels: 4,

  init() {
    console.log(`i have ${this.wheels} wheels, my owner ${this.owner}`)
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Hrach'
  }
})

console.log(carWithOwner.__proto__ === car)

carWithOwner.init()
