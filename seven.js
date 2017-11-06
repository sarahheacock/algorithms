// write class tempTracker that inserts temp and gets min, max, median, and mode
// optimize space and time but favor speed for get methods
// temperatures will only range 0 to 110

function TempTracker(){
  this.temps = new Array(111);
  this.record = 0;

  this.max = null;
  this.min = null;
  this.mean = null;
  this.mode = null;

  for(let i = 0; i < this.temps.length; i++){
    this.temps[i] = 0;
  }
}

TempTracker.prototype.insert = function(temp){
  this.temps[temp] += 1;
  this.record += 1;

  if(this.record > 1){
    this.max = (temp > this.max) ? temp : this.max;
    this.min = (temp < this.min) ? temp : this.min;
    this.mean = (this.mean * (this.record - 1) + temp) / this.record;
    this.mode = (this.temps[temp] >= this.temps[this.mode]) ? temp : this.mode;
  }
  else {
    this.max = temp;
    this.min = temp;
    this.mean = temp;
    this.mode = temp;
  }
}

TempTracker.prototype.getMax = function(){
  return this.max;
}

TempTracker.prototype.getMin = function(){
  return this.min;
}

TempTracker.prototype.getMode = function(){
  return this.mode;
}

TempTracker.prototype.getMean = function(){
  return this.mean;
}

let tracker = new TempTracker();
tracker.insert(90);
tracker.insert(100);
tracker.insert(90);
tracker.insert(77);

console.log(tracker.getMax());
console.log(tracker.getMin());
console.log(tracker.getMode());
console.log(tracker.getMean());
