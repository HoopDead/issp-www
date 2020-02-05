window.onload = function() {
    this.console.log("Hello world!");
}

const app = {
    loadedData: [],
    html: {
        renderData(event) {
            $("#tableContentBody").append(
                `<tr class = 'lead'><td>${event.id}</td><td>${event.date}</td><td>${event.name}</td><td>${event.type}</td></tr>`
            );
        },
        mapData() {
            app.loadedData.map(event => this.renderData(event));
        }
    }
}
$(function() {
    $("#loadJSON").click(function() {
        $.ajax({
            type: "GET",
            url: './data/timetable.json',
            dataType: "json",
            success: function(data) {
                app.loadedData = data.events;
                app.html.mapData();
            },
            erorr: function() {
                console.log("404 - file not found")
            }
        });
    });
});


$(function() {
    $("#addJSON").click(function() {
        $.ajax({
            type: 'POST',
            url: 'postJSON.php',
            success: function(data) {
                console.log("200");
            }
        });
    });
})