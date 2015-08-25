'use strict';
///Original function - take from control-flow example
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


//Fully Refactored solution - improved object model leads to better logic + reusable.

var GameObject = function (topSide, bottomSide, leftSide, rightSide){
    this.topSide: topSide;
    this.bottomSide: bottomSide;
    this.leftSide: leftSide;
    this.rightSide: rightSide;

    //Note these functions allow re-sizing, unlike previous version.
    this.width = function (){
        return rightSide - leftSide;
    };

    this.height = function(){
      return bottomSide - topSide;
    };

    this.collides: function(otherObject){
        return this.rightSide > otherObject.leftSide && this.bottomSide > otherObject.topSide;
    }

}

var object3 = new GameObject(5, 55, 5, 55);
var object4 = new GameObject(10, 20, 20, 30);

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