#!/usr/bin/env node

/*

Script to rewrite data from google doc to slack friendly /training command format */
var json = require('./google.json')

json.feed.entry.forEach(function (entry) {
    process.stdout.write('/training timestamp=' + entry.title.$t)


//    console.log('curl -H "content-type: application/json" -XPOST "http://52.59.245.42:31311" -d \'{');
  //  process.stdout.write('"timestamp": "'+ entry.title.$t + '"')

    var content = entry.content.$t;
    content.split(', ').forEach(function (cell) {
        var nameVals = cell.split(': ');

        var name = nameVals[0];
        var val = nameVals[1].replace(',', '.');
        if(name == 'km'){
            name = 'femkm'
        }

        if(name == 'km_2'){
            name = 'tiokm'
        }

        if(name == 'bänkpress3g'){
            name = 'bankpress3g'
        }

        if (name != 'brostmageindex' && val > '0') {
            process.stdout.write(' ' + name + '=' + val);
     //       console.log(',');
       //     process.stdout.write(' "' +  name + '": "' + val + '"');
        }
    });

    console.log('');
//    process.stdout.write('}\'');
  //  console.log('');
    //console.log('');
});

