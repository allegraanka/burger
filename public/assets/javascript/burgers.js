console.log("Loaded custom script file.");

$(".change-state").on("click", function() {
    var id = $(this).data("id");
    var newState = $(this).data("state");
    var newEatState = {
        eaten: newState
    };
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
    }).then(
        function () {
            console.log(`Changed eat state to ${newState}`);
            location.reload();
        }
    );
});

$(".create-burger-form").on("submit", function(e) {
    e.preventDefault();

    var newBurger = {
        burger_name: $("#add_burger").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            location.reload();
        }
    );
});