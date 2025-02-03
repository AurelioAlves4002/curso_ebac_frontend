$(document).ready(function(e) {
    $("#addTaskBtn").click(function(e) {
        const taskText = $("taskInput").val().trim();

        if (taskText !== "") {
            const newTask = $("<li>").text(taskText);

            const removeBtn = $("<button>").text("Remover");
            newTask.append(removeBtn);

            $("taskList").append(newTask)

            $("taskInput").val("");
        } else {
            alert ("Por favor, digite uma tarefa!");
        }
    });

    $("#taskList").on("click", "button", function(e) {
        $(this).parent().remove();
    });

    
})