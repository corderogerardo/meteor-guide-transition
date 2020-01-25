import {Template} from 'meteor/templating'

Template.helloWorld.onCreated(()=>{
    console.log("should display this message on template created ");
});

Template.helloWorld.onRendered(()=>{
    console.log("should display this message on template rendered, some how like react hook lifecycle mounted ");
});

Template.helloWorld.helpers({
    customHelper: function(){
        console.log("should display this message on helper called ")
    }
});

Template.helloWorld.events({
    'click h1': function(e, template){
        console.log("should display this message on template event triggered, this case click over h1 ");
    }
});
