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
    for (let i = 0; i < pinned_project_name.length; ++i) {
        for (let j = 0; j < all_project_data.length; ++j) {
            if (all_project_data[j]["name"] == pinned_project_name[i]) {
                data.push(all_project_data[j])
                break;
            }
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