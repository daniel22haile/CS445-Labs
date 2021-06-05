function Subject() {
    this.observer = [];
}

Subject.prototype = {
    subscribe: function(event, fn) { //register an observer
        if (!this.observer[event]) {
            this.observer[event] = []
        }
        this.observer[event].push(fn)
    },
    unsubscribe: function(fn) {
        this.observer.forEach(filter(f => f != fn));
    },
    emit: function(event) { //invoke an observer
        this.observer[event].forEach(f => f())
    }
}

const subject = new Subject();
subject.subscribe('study', () => console.log("Hello world"));
subject.emit('study');
subject.subscribe('eat', () => console.log("Good morning usa"));
subject.emit('eat');