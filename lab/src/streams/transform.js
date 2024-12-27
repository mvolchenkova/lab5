const { Transform } = require("stream");
const fs = require("fs");
const path = require("path");

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        const modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        callback();
    }
});

const inputFilePath = path.join(__dirname, "../data/input.txt");
const outputFilePath = path.join(__dirname, "../data/output.txt");

const readStream = fs.createReadStream(inputFilePath);
const writeStream = fs.createWriteStream(outputFilePath);

readStream.pipe(transformStream).pipe(writeStream);