window.onload = function() {
    this.console.log("Hello world!");
    app.ajax.loadData();
}

const app = {
    loadedData: [],
    editingId: 0,
    today: new Date(),
    ajax: {
        loadData() {
            $.ajax({
                type: "GET",
                url: './data/timetable.json',
                dataType: "json",
                success: function(data) {
                    app.loadedData = data;
                    app.html.mapData();
                },
                erorr: function() {
                    console.log("404 - file not found")
                }
            });
        },
        addData(appendData) {
            $.ajax({
                type: 'POST',
                data: {params: appendData},
                url: 'postJSON.php',
                success: function(data) {
                    app.html.mapData();
                }
            });
        }
    },
    html: {
        renderData(event) {
            if(event.id > 0)
            {
                $("#tableContentBody").append(
                    `<tr class = 'lead'><td>${event.id}</td><td>${event.date}</td><td>${event.name}</td><td>${event.type}</td><td><i onclick = 'app.func.editContent(${event.id})' class="fas fa-edit"></i><i onclick = 'app.func.removeContent(${event.id});'class = "fas fa-trash ml-3"></i></td></tr>`
                );
            }
        },
        mapData() {
            $("#tableContentBody").html("");
            app.loadedData.map(event => this.renderData(event));
        }
    },
    func: {
        editContent(id) {
            $("#manageEvent").modal('toggle');
            $("#inputDate").val(app.loadedData[id].date);
            $("#inputName").val(app.loadedData[id].name);
            $("#inputType").val(app.loadedData[id].type);
            app.editingId = id;
        },
        removeContent(id) {
            var appendData = app.loadedData;
            console.log(id);
            appendData[id].id > 0 ? appendData.splice(id, 1) : alert("Nie mozesz tego usunac.");
            app.ajax.addData(appendData);
        },
        sortByWeek(value) {
            if(value.hiddenDate)
            {
                let compareDate = new Date(value.hiddenDate);
                if(compareDate.getDate() > app.today)
                {
                    app.html.renderData(value);
                }
            }
        }
    }
}

$("#loadJSON").click(function() {
    app.ajax.loadData();
});


$("#addJSON").click(function() {
    var appendData = app.loadedData;
    app.editingId == 0 ? appendData.push({id: app.loadedData.length, date: $("#inputDate").val(), hiddenDate: new Date($("#inputDate").val()), name: $("#inputName").val(), type: $("#inputType").val()}) : appendData[app.editingId] = {id: app.editingId, date: $("#inputDate").val(), hiddenDate: new Date($("#inputDate").val()), name: $("#inputName").val(), type: $("#inputType").val()};
    app.ajax.addData(appendData);
    app.editingId = 0;
});

$("#sortByWeek").click(function () {
    $("#tableContentBody").html("");
    app.loadedData.filter(event => app.func.sortByWeek(event));
})