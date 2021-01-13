'use strict'

class RangeValidator {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }

  set from (newFrom) {
    if (typeof newFrom !== 'number') {
      throw new TypeError('Take a number');
    }

    if (newFrom > this._to) {
      throw new RangeError ('From cannot be bigger than To')
    }

    this._from = newFrom;
  }

  set to (newTo) {
    if (typeof newTo !== 'number') {
      throw new TypeError('Take a number');
    }

    if (newTo < this._from) {
      throw new RangeError ('To cannot be smaller than From')
    }

    this._to = newTo;
  }

  get from () {
    return this._from;
  }

  get to () {
    return this._to
  }

  get range () {
    return [this._from, this._to];
  }

  validate (numb) {
    if (numb >= this._from && numb <= this._to) {
      return numb;
    }
    throw new RangeError ('Number is not in the Range')
  }
}