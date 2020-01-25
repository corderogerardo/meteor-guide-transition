Template.helloWorldEager.onCreated(()=>{
    console.log("should display this message on template created ");
});

Template.helloWorldEager.onRendered(()=>{
    console.log("should display this message on template rendered, some how like react hook lifecycle mounted ");
});

Template.helloWorldEager.helpers({
    customHelper: function(){
        console.log("should display this message on helper called ")
    }
});

Template.helloWorldEager.events({
    'click h1': function(e, template){
        console.log("should display this message on template event triggered, this case click over h1 ");
    }
});
