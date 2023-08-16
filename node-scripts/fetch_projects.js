import fs from 'fs'
import fetch from 'node-fetch'
import puppeteer from 'puppeteer'

const fetch_projects = async () => {
    let res = await fetch("https://api.github.com/users/jhamadhav/repos?per_page=100")
    res = await res.json()
    // console.log(res)

    let project_data = []
    for (let i = 0; i < res.length; ++i) {
        let temp = {
            "name": res[i]["name"],
            "tags": res[i]["topics"],
            "description": res[i]["description"],
            "github-link": res[i]["html_url"],
            "project-link": res[i]["homepage"],
            "time": res[i]["updated_at"]
        }
        project_data.push(temp)
    }
    // console.log(project_data)
    return project_data
}
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const browser = await puppeteer.launch({
    headless: true,
    args: [
        `--no-sandbox`,
        `--disable-setuid-sandbox`
    ],
    slowMo: 50
})
const get_image = async (website_urls) => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 });

    // console.log(website_urls);
    let res = website_urls
    for (let i = 0; i < website_urls.length; ++i) {

        let website_url = website_urls[i]["project-link"]
        if (website_url.length == 0) {
            res[i]["image-link"] = "./images/default-project-image.jpg"
            continue
        }

        console.log(website_url);

        // Open URL in current page  
        await page.goto(website_url, { waitUntil: 'networkidle0' });
        await page.setDefaultNavigationTimeout(0);
        await delay(2 * 1000)
        if (website_url.includes("jhamadhav.com") == false) {
            console.log(`${website_url}: additional wait`);
            await delay(12 * 1000)
        }
        res[i]["image-link"] = `./images/project-image/${website_urls[i]["name"]}.jpg`
        await page.screenshot({
            path: `../images/project-image/${website_urls[i]["name"]}.jpg`
        })
    }
    await browser.close();
    return res
}
const write_to_file = (data) => {
    console.log(data);

    var file = fs.createWriteStream('../project.json.js');
    file.on('error', function (err) { /* error handling */ });
    file.write("let all_project_data = [")
    for (let i = 0; i < data.length; ++i) {
        let temp = JSON.stringify(data[i]);
        // console.log(temp);
        file.write(temp);
        file.write(",");
    }
    file.write("]")
    file.end();
}

const init = async () => {
    let data = await fetch_projects()
    console.log("project fetched")

    let res = await get_image(data)
    console.log(res);
    console.log("project image fetched")

    write_to_file(res)
    console.log("Project json ready")
}


init()
