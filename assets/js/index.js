"use strict";

// MyArray class:

class MyArray {
  
  constructor (){
    this.length = 0;

    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    };

  };

  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    };
    return this.length;
  };

  pop () {
    if (this.length > 0) {
      let delValue = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return delValue;
    }
  };

  forEach (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  concat (array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  };

  flat (depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) { 
      if (typeof this[i] === "object") {
          newArr = newArr.concat(this[i].flat(depth - 1));
      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }

    return newArr;

  };


  shift () {
    if (this.length > 0) {
      let delValue = this[0];
      for (let i = 1; i <= this.length; i++) {
        this[i - 1] = this[i];
      }
      delete this[this.length - 1];
      this.length--;
      return delValue;
    }
  };


  unshift() {
    for (let i = arguments.length - 1; i >= 0; i--) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
      }
      this.length++;
      this[0] = arguments[i];
    };
    return this.length;
  };


};

// Range validator:

class RangeValidator {

  constructor (from, to) {
    this._from = from;
    this._to = to;
  };

  set from (from) {
    if (typeof from !== "number") {
      throw new TypeError("From must be a number");
    }
    this._from = from;
  }

  get from () {
    return this._from;
  };


  set to (to) {
    if (typeof to !== "number") {
      throw new TypeError("To must be a number");
    }
    this._to = to;
  };

  get to () {
    return this._to;
  };

  get range () {
    return [this._from, this._to];
  }

  validate (number) {
      return number >= this.from && number <= this.to;
  }
}

// Array tasks:

function isIncluded(arr, arg) {
  for (const value of arr) {
    if (value === arg) {
      return true;
    }
  }
  return false;
}


function isSumLess(num) {
  let sum = 0;
  let arr = String(num).split('');
  for (const value of arr) {
      sum += parseInt(value, 10);
  }

  if (sum > 9) {
      return isSumLess(sum);
  } else {
      return sum;
  }
}

function getUnique(...rest) {
  let res = [];
    for (const value of rest) {
      for (const key of value) {
        if (!res.includes(key)) {
          res.push(key);
        }
      } 
    }
  return res;
}