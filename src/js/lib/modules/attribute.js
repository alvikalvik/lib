import $ from '../core';

$.prototype.setAttribute = function(attribute, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].tagName) {
            continue;
        }
        
        this[i].setAttribute(attribute, value);
    }

    return this;
}

$.prototype.removeAttribute = function(attribute) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].tagName) {
            continue;
        }
        
        this[i].removeAttribute(attribute);
    }

    return this;
}

$.prototype.toggleAttribute = function(attribute, value = '') {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].tagName) {
            continue;
        }

        if (this[i].hasAttribute(attribute)) {
            this[i].removeAttribute(attribute);
        } else {
            this[i].setAttribute(attribute, value);
        }
    }

    return this;
}