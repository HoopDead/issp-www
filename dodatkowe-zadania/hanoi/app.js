var element = 0;
var palik1 = [1,2,3,4,5]
var palik2 = [];
var palik3 = [];

document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    element = event.target.id;
  });
    
document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted red";
    }
  });
  
document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
});
  
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
      var target = document.getElementById(event.target.id);
      console.log(target.id);
      var notes = null;
      event.target.appendChild(document.getElementById(element));
      for (let i = 0; i < target.childNodes.length; i++)
      {
        console.log(target.childNodes[i]);
      }
    }
});

