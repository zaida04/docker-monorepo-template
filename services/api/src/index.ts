import polka from "polka";

const app = polka();

app.get("/", (req, res) => {
    res.end("Testerooni");
});
