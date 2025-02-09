$(document).ready(function () {
    $("#addTaskBtn").click(function (e) {
        e.preventDefault();
        const taskText = $("#taskInput").val().trim();

        if (taskText !== "") {
            const newTask = $("<li>").text(taskText);

            const removeBtn = $("<button>").text("Remover").addClass("remove-task");
            newTask.append(removeBtn);

            $("#taskList").append(newTask);

            $("#taskInput").val("");
        } else {
            alert("Por favor, digite uma tarefa!");
        }
    });

    $("#taskList").on("click", ".remove-task", function () {
        $(this).parent().remove();
    });

    $("#taskList").on("click", "li", function () {
        $(this).toggleClass("completed");
    });
});
