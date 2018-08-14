(function () {
    class CalcModel extends Subject {
        constructor () {
            super()
            this.data = {
                leftNum: 0,
                rightNum: 0
            }
        }

        setLeftNum (num) {
            this.data.leftNum = num
            this.nortify();
        }

        setRightNum (num) {
            this.data.rightNum = num
            this.nortify();
        }

        multiplication () {
            return this.data.leftNum * this.data.rightNum
        }

        division () {
            return this.data.leftNum / this.data.rightNum
        }

    }

    var calcModel = new CalcModel();

    class calcView extends Observer {
        constructor ($output, calcType) {
            super();
            this.calcType = calcType
            this.$output = $output
            this.model = calcModel
            this.model.observerList.add(this)
        }

        update () {
            this.$output.innerHTML = this.model[this.calcType]()
        }
    }

    new calcView(document.getElementById('outputMultiplication'), 'multiplication')
    new calcView(document.getElementById('outputDivision'), 'division')

    $leftNum = document.getElementById('leftNum')
    $leftNum.addEventListener('change', function(e){
        calcModel.setLeftNum(e.currentTarget.value)
    });
    
    $rightNum = document.getElementById('rightNum')
    $rightNum.addEventListener('change', function(e){
        calcModel.setRightNum(e.currentTarget.value)
    });
})()
