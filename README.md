# ObserverJs

## Example

```
class Model extends Subject {
    constructor () {
        this.data = null
    }

    setData () {
        this.data = 'hoge'
        this.nortify()
    }
}

class View extends Observer {
    constructor () {
        this.model = new Model()
        this.model.observerList.add(this)
    }

    update () {
        console.log('update data!')
    }
}
```
