const { spawn } = require("child_process");

const searchInFiles = (keyword) => {
    const worker = spawn("node", [__dirname + "/searchWorker.js", keyword]);

    worker.stdout.on("data", (data) => {
        console.log(`Результат: ${data}`);
    });

    worker.stderr.on("data", (data) => {
        console.error(`Ошибка: ${data}`);
    });

    worker.on("close", (code) => {
        console.log(`Процесс завершен с кодом ${code}`);
    });
};

const [keyword] = process.argv.slice(2);
if (!keyword) {
    console.error("Необходимо указать ключевое слово для поиска.");
    process.exit(1);
}

searchInFiles(keyword);