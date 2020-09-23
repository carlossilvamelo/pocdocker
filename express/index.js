var express = require('express')
var pdf = require('express-pdf');
var htmlPdf = require('html-pdf');
var path = require('path');
var app = express()
const Blob = require("cross-blob");
app.use(pdf);
app.use(express.json());
var fs = require('fs');
// app.get('/', function (req, res) {
//     res.send({ status: "ok" })
// })

// app.get('/pdf', (req, res) => {
//     const names = ["Carlos Melo", "Robson","Pablo"]
//     res.pdfFromHTML({
//         filename: 'generated.pdf',
//         htmlContent: `<html><body>${names.map(name=>(`<strong>${name}</strong><br/>`))}</body></html>`,
//         options: {}
//     });
// });

app.use('/pdf', function (req, res) {
    const file = path.resolve(__dirname, './report/index.html')
    // htmlPdf.create(file).toFile(function (err, resp) {
    //     console.log(resp.filename)
    //     // fs.readFile(res.filename, "utf8", function(err, data){
    //     //     if(err) throw err;
            
    //     //     var file = new Blob([data]);
    //     //     console.log(file)
    //     // });
    //     // var file = new Blob([fr], {type: 'application/pdf'});
        
    //     // var fileURL = URL.createObjectURL(file);
    //     // window.open(fileURL)
    //     res.send(resp.filename)
    // });
    res.pdfFromHTML({
        filename: 'generated.pdf',
        html: file,
        options: {
            "directory": "/tmp",
            "format": "A4", // allowed units: A3, A4, A5, Legal, Letter, Tabloid
            "orientation": "portrait" // portrait or landscape
        }
    });
});

app.listen(3000, function () {
    console.log('Listening on port 3000...')
})