const fs=require('fs');
const yargs = require('yargs');
const notes=require('./project.js');

yargs.command({
    command:'add',
    describe: 'Adding Note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        },
    },
    handler: function(argv){
        notes.addnotes(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Removing Note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing of notes',
    handler: function(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading particular note',
    builder:{
        describe: 'Note Title',
        demandOption: true,
        type : 'string'
    },
    handler: function(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse();