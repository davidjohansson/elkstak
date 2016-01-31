#!/usr/bin/env node

/*

Script to rewrite data from google doc to slack friendly /training command format */
var json = require('./google.json')

json.feed.entry.forEach(function (entry) {
//    process.stdout.write('/training timestamp=' + entry.title.$t)


    console.log('curl -H "content-type: application/json" -XPOST "http://52.59.245.42:31311" -d \\');
    process.stdout.write('"timestamp='+ entry.title.$t + '&');
    process.stdout.write('message=token=MxXzzYDV8uMbYBYSk5qvfJp9&team_id=T0CT8L19B&team_domain=davidsegna&channel_id=C0E4U278A&channel_name=training&user_id=U0CT6G727&user_name=david&command=%2Ftraining&text=');

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

            /*

             message" => "token=MxXzzYDV8uMbYBYSk5qvfJp9&team_id=T0CT8L19B&team_domain=davidsegna&channel_id=C0E4U278A&channel_name=training&user_id=U0CT6G727&user_name=david&command=%2Ftraining&text=mage%3D123+apa%3D456b&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands%2FT0CT8L19B%2F19272991392%2FjSQSO6HxG85VRUHn08VEfMTc",
             */
            process.stdout.write(name + '%3D' + val + '+');

        }
    });

    console.log('a%3Db"');
    console.log('');
    console.log('');
});

