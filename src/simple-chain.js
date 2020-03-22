const storage = Symbol('storage');
const chainMaker = {
  [storage]: [],

  getLength() {
    return this[storage].length;
  },

  addLink(value) {
    this[storage].push(String(value));

    return this;
  },

  removeLink(position) {
    this._validatePosition(position);
    this[storage].splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this[storage].reverse();

    return this;
  },

  finishChain() {
    const result = this[storage]
      .map(el => `~( ${el} )~`)
      .join('')
      .slice(1, -1);

    this[storage] = [];

    return result;

  },

  _validatePosition(position) {
    if (!Number.isInteger(position)) {
      this._clearStorage();
      throw new Error('validation error');
    }

    if (position < 1) {
      this._clearStorage();
      throw new Error('validation error');
    }

    if (position >= this[storage].length) {
      this._clearStorage();
      throw new Error('validation error')
    }

    return true;
  },

  _clearStorage() {
    this[storage] = [];
  }
};

module.exports = chainMaker;