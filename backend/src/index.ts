import { app } from "./Server/Server";

app.listen(process.env.PORT, () => {
    console.log("Rodando na porta " + process.env.PORT);
})