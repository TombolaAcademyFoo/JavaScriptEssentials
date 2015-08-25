'use strict';
///Original function
var object1 = {
    leftSide: 5,
    topSide: 5,
    width: 50,
    height: 50,
};

var object2 =
{
    leftSide: 20,
    topSide: 10,
    width: 10,
    height: 10,
};

var collisionDetection = function(rect1, rect2){
    if(rect1.leftSide < rect2.leftSide + rect2.width &&
        rect1.leftSide + rect1.width > rect2.leftSide &&
        rect1.topSide < rect2.topSide + rect2.height &&
        rect1.height + rect1.topSide > rect2.topSide){
        console.log('Collided');
    }
}


//Refactored solution - improved object model leads to better logic + reusable.

//Object 3 and 4 are not full refactored - need proper constructor function, see objects
var object3 = {
    leftSide: 5,
    topSide: 5,
    width: 50,
    height: 50,
    rightSide: this.leftSide + this.width,
    bottomSide: this.topSide + this.height,
    collides: function(other){
        return this.rightSide > other.leftSide && this.bottomSide > other.topSide;
    }
};

var object4 =
{
    leftSide: 20,
    topSide: 10,
    width: 10,
    height: 10,
    rightSide: this.leftSide + this.width,
    bottomSide: this.topSide + this.height,
    collides: function(other){
        return  this.rightSide > other.leftSide && this.bottomSide > other.topSide;
    }
};

//Guard Clause
var collisionDetection3 = function(rect1, rect2){
    if(!rect.collides(rect2)){
        return;
    }
    if(!rect2.collides(rect1)){
        return;
    }
    console.log('Collided');
};

//Non guard clause
var collisionDetection2 = function(rect1, rect2){
    if(rect.collides(rect2) && rect2.collides(rect1)) {
        console.log('Collided');
    }
};