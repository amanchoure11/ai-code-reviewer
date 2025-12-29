import dotenv from "dotenv";
import app from "./src/app.js";
import {BACKEND_URL} from "../utils/utils"

dotenv.config();




app.listen(3000, () => {
    console.log(`Server is running on ${BACKEND_URL}`)
})