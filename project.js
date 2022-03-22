const fs=require('fs');



const addnotes=function(title,body){
    const notes=loadNotes();
    const duplicateNotes=notes.filter(function(notes){
        return notes.title===title;
    });
    if(duplicateNotes.length===0)
    {
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log('\nNew Node created\n');
    }
    else{
        console.log('\nNote Title already existed!!!\n');
    }
}

const removeNotes=function(title){
    const notes=loadNotes();
    const keepNotes=notes.filter(function(notes){
        return notes.title!=title;
    });
    if(notes.length>keepNotes.length){
        console.log('Note removed');
        saveNotes(keepNotes);
    }
    else{
        console.log('Note not found');
    }
}

const listNotes=function(){

    const notes=loadNotes();

    console.log('Your Notes: ');

    notes.forEach(note => {
        console.log(note.title);
    });

}

const readNotes=function(title){
    const notes=loadNotes();
    const note=notes.find((note)=> note.title===title);
    if(note){
        console.log(note.title);
        console.log(note.body);
    }
    else{
        console.log('Note not found');
    }
}

const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.JSON');
        const dataJson=dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e){
        return [];
    }
}

const saveNotes=function(notes){
    const dataJson=JSON.stringify(notes);
    fs.writeFileSync('notes.JSON',dataJson);
}


module.exports={
    addnotes:addnotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}