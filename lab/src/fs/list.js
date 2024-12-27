const fs = require("fs");
const path = require("path");

const listWorkoutPlans = () => {
    const indexFilePath = path.join(__dirname, "../data", "workout_index.json");
    if (!fs.existsSync(indexFilePath)) {
        console.error("Индексный файл не найден.");
        return;
    }

    try {
        const indexData = JSON.parse(fs.readFileSync(indexFilePath));
        console.log("Список всех тренировочных планов:");
        indexData.forEach(record => {
            console.log(`ID: ${record.id}, Название: ${record.title}, Тип: ${record.type}`);
        });
    } catch (error) {
        console.error("Ошибка чтения индексного файла:", error.message);
    }
};

listWorkoutPlans();