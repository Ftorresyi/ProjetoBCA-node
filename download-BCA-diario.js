const http = require('http');
const fs = require('fs');


const dest = 'D:/Projetos/ProjetoBCa-Node/';
const url = "http://www.cendoc.intraer/sisbca/consulta_bca/download.php?ano=2023&bca=bca_23_02-02-2023"

//const dir = "C:/Temp/Xisto";

//Verifica se não existe o diretório, senão cria-o
if (!fs.existsSync(dest)){
    //Efetua a criação do diretório
    fs.mkdirSync(dest);
}

const download = function(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  });
  
}
download(url, dest, function() {
  console.log("Done")})