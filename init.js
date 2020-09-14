import app from "./app.js";

const PORT = 7000;
const startServer = () => console.log(`✅ Server on http://localhost:${PORT}`);
app.listen(PORT, startServer);
