import http from "http";
import url from "url";
import util from"util";
import os from "os";
import {getDateTime} from "./time/index.mjs";
import chalk from "chalk";
const PORT=4000;

http.
createServer((req,res) => {
    const reqPath = req.url;
    const parsed = url.parse(reqPath);
    const resp = util.format("you are looking for %s amd query is %s. App is running on %s and %s...Time is %s", reqPath,parsed.query,os.platform(),os.arch(),getDateTime())
    res.end(resp);
     // res.end("user is requesting for: " + reqPath + "Query is " + parsed.query)
})
.listen(PORT, ()=>{
    console.log(chalk.bgBlue(chalk.greenBright('Server started...') + chalk.bold("on "+ PORT)));
})