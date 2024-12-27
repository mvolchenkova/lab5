const fs = require("fs");
const path = require("path");

const writeDataToFile = (filePath, data) => {
    fs.writeFile(filePath, data, err => {
        if (err) {
            console.error("Ошибка записи данных:", err);
        } else {
            console.log("Данные успешно записаны.");
        }
    });
};

const [filePath, ...data] = process.argv.slice(2);
writeDataToFile(filePath, data.join(" "));