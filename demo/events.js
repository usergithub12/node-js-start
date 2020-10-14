const EventEmitter = require("events");

const emitter = new EventEmitter();

// emitter.on("anything", (data) => {
//   console.log("On ANYthing", data);
// });

// emitter.emit("anything", { a: 1 });
// emitter.emit("anything", { b: 2 });

// setTimeout(() => {
//   emitter.emit("anything", { c: 3 });
// }, 500);

class Dispathcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log("Subscribe...");
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("Dispatching");
    this.emit(eventName, data);
  }
}

const dis = new Dispathcher();

dis.subscribe("aa", (data) => {
  console.log("ON: aa", data);
});
dis.dispatch("aa", { aa: 22 });
