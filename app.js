function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  console.log(this.name + " run, speed " + this.speed);
};

Animal.prototype.stop = function() {
  this.speed = 0;
  console.log(this.name + " stop");
};

Rabbit.prototype.__proto__ = Animal.prototype;

function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

Rabbit.prototype.jump = function() {
  this.speed++;
  console.log(this.name + " jump");
};

var rabbit = new Rabbit("Rabbit");

rabbit.jump(20);
rabbit.run(20);
rabbit.stop(20);
