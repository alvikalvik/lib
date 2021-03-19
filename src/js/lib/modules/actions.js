import $ from '../core';

$.prototype.html = function(content) {    
    for (let i = 0; i < this.length; i++) {        
        if (!this[i].tagName) {            
            continue;
        }        
        

        if (content) {            
            this[i].innerHTML = content;
        } else {            
            return this[i].innerHTML;
        }
        
        this[i].innetHTML = content;
    }

    return this;
}

$.prototype.eq = function(i) {    
    const neededElem = this[i];
    for (let i = 0; i < this.length; i++) {        
        delete this[i];
    }

    this[0] = neededElem;
    this.length = 1;

    return this;
}

$.prototype.index = function() {    
    const parent = this[0].parentNode;
    const children = [...parent.children];
    
    const findMyIndex = (item) => {
        return item == this[0];
    };

    return children.findIndex(findMyIndex);
}

$.prototype.find = function(selector) {  
    let counter = 0;    

    const objCopy = Object.assign({}, this);

    for (let i = 0; i < objCopy.length; i++) {
        const arr = objCopy[i].querySelectorAll(selector);

        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;           
        }
    }

    for (let i = counter; i < this.length; i++) {
        delete this[i];
    } 

    this.length = counter;  

    return this;
}

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        this[counter] = this[i].closest(selector);        

        if (this[counter] !== null) {
            counter++; 
        }
    }    

    for (let i = counter; i < this.length; i++) {
        delete this[i];
    } 

    this.length = counter;

    return this;
};

$.prototype.siblings = function() {  
    let counter = 0;    

    const objCopy = Object.assign({}, this);

    for (let i = 0; i < objCopy.length; i++) {
        const arr = objCopy[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (objCopy[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter++;           
        }
    }

    for (let i = counter; i < this.length; i++) {
        delete this[i];
    } 

    this.length = counter;  

    return this;
}