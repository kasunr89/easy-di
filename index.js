'use strict';

const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const strip = require('strip-json-comments');


const map = {};
let rootPath = null;

function initialize(filePath) {
    rootPath = filePath;
    
    const dependencies = loadFiles('dependencies.json');
    
    _.forEach(dependencies.classes, (cls) => {        
        const source = loadClasses(cls.path);
        _.set(map, cls.id, new source());        
    });   
}


function resolve(id) {
    const obj = map[id];
    _.mapKeys(obj, function(value, key) {
        _.set(obj, key, map[key])
    }); 
    return obj;
}

function loadFiles(file) {
    return JSON.parse(strip(fs.readFileSync(path.resolve(file), 'utf8')));
}

function loadClasses(classPath) {
    return require(rootPath + '/' + classPath);
}

module.exports = { initialize, resolve };

