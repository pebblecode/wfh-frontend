/* @flow */

import { EventEmitter } from 'events';

export default class BaseStore extends EventEmitter {

  name: string;

  constructor(name) {
    super();
    this.name = name;
  }

  emitChange() {
    this.emit(this.name);
  }

  addChangeListener(callback) {
    this.on(this.name, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(this.name, callback);
  }

}
