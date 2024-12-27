const fs = require("fs");
const path = require("path");

const renameFile = (oldName, newName) => {
    const oldPath = path.join(__dirname, "../data", oldName);
    const newPath = path.join(__dirname, "../data", newName);

    fs.rename(oldPath, newPath, err => {
        if (err) {
            console.error("Ошибка при переименовании:", err);
        } else {
            console.log("Файл успешно переименован.");
        }
    });
};

const [oldName, newName] = process.argv.slice(2);
renameFile(oldName, newName);