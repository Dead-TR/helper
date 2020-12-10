'use strict'

/* eslint-disable */

function makeStorage() {
    let obj = {
        setValue: function(key, unit) {
            this[key] = unit;
        },

        getValue: function(key) {
            return obj[key];
        },
    }
    return obj;
}

const storage = makeStorage();

storage.setValue('name', 'Peter');
storage.setValue('age', 30);
storage.getValue('name'); // Peter
storage.getValue('age'); // 30

storage.setValue('age', 31);
storage.getValue('age'); // 31

storage.getValue('getValue'); // undefined
storage.setValue('getValue', 42);
storage.getValue('getValue'); // 42
storage.getValue('occupation'); 