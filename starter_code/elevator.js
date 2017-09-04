class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.idInterval;
    this.direction = "down";
    this.destinations = []
  }

  start() { this.idInterval = setInterval(()=>{
      this.update();
    }, 3000);
  }

  stop() { clearInterval(this.idInterval); }

  update() {this.log();}

  _passengersEnter() {
    if(this.waitingList.length > 0) {
      this.waitingList.forEach((elem, index) => {
      if (this.floor == elem.originFloor){
        this.passengers.push(elem);
        this.waitingList.splice(index, 1);
      }
    }

  _passengersLeave() {
    if(this.passengers.length > 0 ){
     this.passengers.forEach((elem, index)=>{
      if(elem.destinationFloor == this.floor){
      this.passengers.splice(index, 1);
    }  
   }

  floorUp() {
    if(this.floor < this.MAXFLOOR  || this.waitingList.length > 0 || this.passengers.length > 0){
      this.floor+=1;
    }
    console.log ("PISO: " + this.floor)
  }

  floorDown() {
    if(this.floor > 0 || this.waitingList.length > 0 || this.passengers.length > 0){
      this.floor--;
    }
    console.log ("PISO: " + this.floor)
  }

  call(Person) {
    this.waitingList.push(Person);
    this.requests.push(Person.originFloor);
  }

  log() {console.log(`Direction : ${this.direction} | Floor: ${this.floor}`);}
}

module.exports = Elevator;
