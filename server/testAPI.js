import express from "express";

const route = express();

route.get("/", async (req, res) => {
    res.send("API is working properly");
});

export default route;