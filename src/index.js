import { recibosMethods } from "./services/recibosServices.js";
import { asyncMessage } from "./services/asyncMessage.js";
import { fileManager } from "./services/createSyncFile.js";

asyncMessage();

recibosMethods.showForEach();
recibosMethods.sortRecibos();
recibosMethods.filterByR();
recibosMethods.amountIncreased();

fileManager.createSyncFile();
fileManager.readFile();
fileManager.appendDataToFile();
