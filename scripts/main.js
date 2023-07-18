window.onload = () => {

    let pinned_project_name = [
        "elementalQuests",
        "MNREGA_Hackanova_thisDot",
        "spotlight",
        "maze",
        "tabSync",
        "2048"
    ]
    let data = []
    for (let i = 0; i < all_project_data.length; ++i) {
        if (pinned_project_name.includes(all_project_data[i]["name"])) {
            data.push(all_project_data[i])
        }
    }
    all_project_data = data;
    // console.log(all_project_data);
    makeProjects()
}

function filter_by_input(inp) {
    // console.log("Move to all projects for this to work");
    window.location = `/all-project.html?search_by_tag=${inp}`
}