const fs = require("fs");
const path = require("path");

const readWorkoutPlan = (id) => {
    const filename = `workout_${id}.json`;
    const filePath = path.join(__dirname, "../data", filename);
    
    if (!fs.existsSync(filePath)) {
        console.error("Запись не найдена.");
        return;
    }

    const data = JSON.parse(fs.readFileSync(filePath));
    console.log("Детали записи:", data);
};

const [id] = process.argv.slice(2);
readWorkoutPlan(id);