var Diner = function(name, dishes){
	this.name = name;
	this.dishes = dishes;
}

var Bill = function (list){
	this.list = list;
}

Diner.prototype.total = function(){
	var total = 0;
	for (var i = 0; i < this.dishes.length; i++){
		total += this.dishes[i].cost  
	}
	return total;
};

Diner.prototype.tax =  function(){
	var tax = 4;
	var taxed = (this.total() * tax) / 100;
	return taxed;
}

Diner.prototype.tip = function(){
	var tip = 15;
	var tipped = (this.total() * tip) / 100;
	return tipped;
}

Bill.prototype.totalt =  function(){
	var sum = 0;
	for (var i = 0; i < this.list.length; i++) {
	var acc = this.list[i].total() + sum;
	var sum = acc;
}
	console.log('Total without tips or tax:', acc)
}

Bill.prototype.totaltax =  function(){
	var sum = 0;
	for (var i = 0; i < this.list.length; i++) {
	var acc = this.list[i].tax() + sum;
	var sum = acc;
}
	console.log('Total tax:', acc)
}

Bill.prototype.totaltip = function(){
	var sum = 0;
	for (var i = 0; i < this.list.length; i++) {
		var acc = this.list[i].tip() + sum;
		var sum = acc;
}
	console.log('Total tips:', acc)
}

Bill.prototype.break = function() {
	for (var i = 0; i < this.list.length; i++) {
	console.log(this.list[i].name + "'s" + ' ' + 'total:' + ' ' + this.list[i].total());
	console.log(this.list[i].name + "'s" + ' ' + 'tax:' + ' ' + this.list[i].tax());
	console.log(this.list[i].name + "'s" + ' ' + 'tip:' + ' ' + this.list[i].tip());
}
}

Bill.prototype.totalbill = function() {
	var sum = 0;
	for (var i = 0; i < this.list.length; i++) {
	var acc = this.list[i].total() + this.list[i].tax() + this.list[i].tip() + sum;
	var sum = acc;
}
	console.log('Total Bill:', acc)
}

var fish = {
	cost: 23,
	label: 'Salmon'
}

var salad =  {
	cost: 8,
	label: 'Caeser'
}

var steak = {
	cost: 19,
	label: 'Ribeye'
}

var mike = new Diner('mike', [salad, steak]);

var bob = new Diner('bob', [fish, steak]);

var jane = new Diner('jane', [salad, fish]);


var bill = [mike, bob, jane]
var billObject = new Bill(bill)

console.log('Dummy Bill:');
console.log(billObject.totalt());
console.log(billObject.totaltax());
console.log(billObject.totaltip());
console.log(billObject.totalbill());
console.log(billObject.break());