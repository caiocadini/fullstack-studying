import inquirer from "inquirer"
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
   {type: "input",
    name: "URL",
    message: "Please insert an URL: "
}
  ])
  .then((answers) => {
    const answerUrl = answers.URL;
    var qr_png = qr.image(answerUrl, {type: "png"});
    qr_png.pipe(fs.createWriteStream('url_qr.png'));
    fs.writeFile("url.txt", answerUrl, (err) => {
        if (err) throw err;
        console.log("file saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 