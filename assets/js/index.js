"use strict";

// MyArray class:

class MyArray {
  constructor(...rest) {
    this.length = 0;

    for (let i = 0; i < rest.length; i++) {
      this[this.length] = rest[i];
      this.length++;
    }
  }

  push(...rest) {
    for (let i = 0; i < rest.length; i++) {
      this[this.length++] = rest[i];
    }
    return this.length;
  }

  pop() {
    if (this.length > 0) {
      let delValue = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return delValue;
    }
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }

  concat(array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  }

  flat(depth = 1) {
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
  }

  shift() {
    if (this.length > 0) {
      let delValue = this[0];
      for (let i = 1; i <= this.length; i++) {
        this[i - 1] = this[i];
      }
      delete this[this.length - 1];
      this.length--;
      return delValue;
    }
  }

  unshift(...rest) {
    for (let i = rest.length - 1; i >= 0; i--) {
      for (let j = this.length - 1; j >= 0; j--) {
        this[j + 1] = this[j];
      }
      this.length++;
      this[0] = rest[i];
    }
    return this.length;
  }
}

// Range validator:

class RangeValidator {
  constructor(from, to) {

    if ( to <= from) {
      throw new RangeError("To must be more than From");
    }

    this._from = from;
    this._to = to;
  }

  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("From must be a number");
    }
    if ( from >= this.to) {
      throw new RangeError("To must be more than From");
    }
    this._from = from;
  }

  get from() {
    return this._from;
  }

  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("To must be a number");
    }
    if ( to <= this.from) {
      throw new RangeError("To must be more than From");
    }

    
    this._to = to;
  }

  get to() {
    return this._to;
  }

  get range() {
    return [this._from, this._to];
  }

  validate(num) {
    if (typeof num !== "number") {
      throw new TypeError("Num must be a number");
    }
    return (num >= this.from && num <= this.to);
  }
}

// Array tasks:

function isIncluded(arr, arg) {
  return arr.includes(arg);
}

function isSumLess(num) {
  let sum = 0;
  let arr = String(num).split("");
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
