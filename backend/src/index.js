import { app } from './app.js';
import dotenv from 'dotenv';
import { initDatabase } from './db/init.js';
dotenv.config();

try {
    await initDatabase();
    const PORT = process.env.PORT;
    app.listen(PORT);
    console.log(`express is running on http://localhost:${PORT}`);
} catch (error) {
    console.error('Error connecting to the database:', error);
}
