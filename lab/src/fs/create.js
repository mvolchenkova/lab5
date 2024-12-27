const fs = require("fs");
const path = require("path");

const createWorkoutPlan = (title, duration, type, notes) => {
    const id = Date.now().toString();
    const filename = `workout_${id}.json`;
    const filePath = path.join(__dirname, "../data", filename);
    
    const workoutData = {
        id,
        title,
        duration,
        type,
        notes,
        filename
    };

    if (fs.existsSync(filePath)) {
        console.error("Ошибка операции FS: Запись уже существует.");
        return;
    }

    fs.writeFileSync(filePath, JSON.stringify(workoutData, null, 2));
    
    const indexFilePath = path.join(__dirname, "../data", "workout_index.json");
    const indexData = fs.existsSync(indexFilePath) ? JSON.parse(fs.readFileSync(indexFilePath)) : [];
    indexData.push(workoutData);
    fs.writeFileSync(indexFilePath, JSON.stringify(indexData, null, 2));
    
    console.log("Новая запись успешно создана:", workoutData);
};

const [title, duration, type, notes] = process.argv.slice(2);
createWorkoutPlan(title, duration, type, notes);