const Task = (() => {

    const tasks = document.querySelectorAll(".collapsible");
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", () => {
            console.log(this);
        })
    }

})();