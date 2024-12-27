const fs = require("fs");
const path = require("path");

const readLargeFile = (filePath) => {
    const stream = fs.createReadStream(filePath, { encoding: "utf8" });
    
    stream.on("data", chunk => {
        console.log(chunk);
    });
    
    stream.on("end", () => {
        console.log("Чтение файла завершено.");
    });
    
    stream.on("error", err => {
        console.error("Ошибка чтения файла:", err);
    });
};

const [filePath] = process.argv.slice(2);
readLargeFile(filePath);