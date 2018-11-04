class Calculator {
    constructor() {
        this.mul = null;
        this.plus = null;
    }

    perform(a, b, operation) {
        let result = 0;

        switch (operation) {
            case 'plus':
                result = this.plus.do(a, b);
                break;

            case 'mul':
                result = this.mul.do(a, b);
                break;
        } 
        
        return result;
    }  
}

module.exports = Calculator;