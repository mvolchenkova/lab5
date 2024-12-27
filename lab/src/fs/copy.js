const fs = require("fs-extra"); 
const path = require("path");

const copyDirectory = (source, destination) => {
    fs.copy(source, destination, err => {
        if (err) {
            console.error("Ошибка при копировании:", err);
        } else {
            console.log("Резервная копия успешно создана.");
        }
    });
};

const [source, destination] = process.argv.slice(2);
copyDirectory(source, destination);