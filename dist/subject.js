class Subject {
  constructor () {
      this.observerList = new ObserverList()
  }

  nortify () {
      var observers, num, i

      observers = this.observerList.all()
      num = observers.length

      for(i = 0; i < num; i++) {
          observers[i].update()
      }
  }
}

class ObserverList {
  constructor () {
      this.observers = []
  }

  all () {
      return this.observers
  }

  add (observer) {
      this.observers.push(observer)
  }
}