const fs = require("fs");
const path = require("path");

const deleteWorkoutPlan = (id) => {
    const filename = `workout_${id}.json`;
    const filePath = path.join(__dirname, "../data", filename);
    
    if (!fs.existsSync(filePath)) {
        console.error("Запись не найдена.");
        return;
    }

    fs.unlinkSync(filePath);
    
    // Обновляем индексный файл
    const indexFilePath = path.join(__dirname, "../data", "workout_index.json");
    const indexData = JSON.parse(fs.readFileSync(indexFilePath));
    const updatedIndex = indexData.filter(record => record.id !== id);
    fs.writeFileSync(indexFilePath, JSON.stringify(updatedIndex, null, 2));
    
    console.log("Запись успешно удалена.");
};

const [id] = process.argv.slice(2);
deleteWorkoutPlan(id);