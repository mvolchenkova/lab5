const fs = require("fs");
const path = require("path");

const keyword = process.argv[2]; 
const indexFilePath = path.join(__dirname, "../data", "workout_index.json");

if (!keyword) {
    console.error("Не указано ключевое слово для поиска.");
    process.exit(1);
}

fs.readFile(indexFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Ошибка чтения индексного файла:", err);
        process.exit(1);
    }

    try {
        const workouts = JSON.parse(data);
        const results = workouts.filter(workout => 
            workout.title.includes(keyword) || workout.notes.includes(keyword)
        );

        if (results.length === 0) {
            console.log("Записи не найдены.");
        } else {
            console.log("Найденные записи:");
            results.forEach(record => {
                console.log(`ID: ${record.id}, Название: ${record.title}, Тип: ${record.type}, Заметки: ${record.notes}`);
            });
        }
    } catch (parseError) {
        console.error("Ошибка парсинга индексного файла:", parseError.message);
    }
});