window.onload = () => {
    makeProjects()


    let inpBar = document.getElementById("searchProjects")


    inpBar.oninput = () => {
        let inp = inpBar.value
        inp = inp.trim()
        inp = inp.toLowerCase()

        // console.log(inp)
        filter_by_input(inp)

    }
}

function filter_by_input(inp) {
    document.getElementById("searchProjects").value = inp
    let project_cards = document.getElementsByClassName("project-card")
    for (let i = 0; i < all_project_data.length; ++i) {
        if (inp.length == 0) {
            project_cards[i].style.display = "block";
            continue
        }

        if (all_project_data[i]["tags"].includes(inp) == false) {
            project_cards[i].style.display = "none";
        } else {
            project_cards[i].style.display = "block";
        }
    }
}