import "dotenv/config";
import app from "../back/src/app.js";


const PORT = 3000;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});
