window.onload = function() {
    this.console.log("Im loaded");
}

$(".head").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Head exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Drop your head gently to your chest. While breathing in, slowly roll your head up to your left shoulder. While breathing out, slowly roll your head back to center. Repeat to the right.
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Sit up straight. Tuck in your chin
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Slowly turn your head and look over your left shoulder. Hold for a few seconds. Go back to the center, then repeat to your right.
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});

$(".shoulder").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Push-ups
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Decline push‐ups
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Dumbbell shoulder workout
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});

$(".arm").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Barbell Bicep Curl.
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Cable Bicep Curl.
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Single-Arm Dumbbell Overhead Tricep Extension.
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});


$(".hands").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Make a gentle fist, wrapping your thumb across your fingers.
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Hold a soft ball in your palm and squeeze it as hard as you can.
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Pinch a soft foam ball or some putty between the tips of your fingers and your thumb.
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});

$(".cheast").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Barbell bench press
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Pec deck
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Bent forward cable crossover
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});

$(".stomach").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Oblique crunch
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Stomach crunch
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Plank
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});

$(".legs").click(function() {
    app.html.render(`<p class = 'lead text-center mx-auto'>Shoulder exercises: 
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center text-center">
    Squats
      <span class="badge badge-primary badge-pill">25</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Step-ups
      <span class="badge badge-primary badge-pill">30</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    Box jumps
      <span class="badge badge-primary badge-pill">15</span>
    </li>
  </ul>
    
    </p>`);
});
var app = {
    html: {
        render(arg) {
            document.getElementById("desc").innerHTML = arg;
        }
    }
}