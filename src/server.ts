import express from "express";

const app = express();

app.get("/test", (request, response) => {
    return response.send("Olá NLW!");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá NWL método post");
})

app.listen(5000, () => console.log("Server is running"))