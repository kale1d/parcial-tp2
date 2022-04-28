import fs from "fs";

const fileManager = {
  createSyncFile() {
    const data = "";
    fs.writeFileSync("./src/assets/archivo.txt", data, "utf-8");
  },
  readFile() {
    const data = fs.readFileSync("src/assets/archivo.txt", "utf-8");
    console.log(data);
  },
  appendDataToFile() {
    fs.appendFileSync("src/assets/archivo.txt", "nuevo texto");
    this.readFile();
  },
};

export { fileManager };
