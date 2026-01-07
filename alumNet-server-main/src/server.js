import http from 'http';
import app from './app.js';
import { loadEnv } from './config/env.js';
import { connectMongo } from './config/mongo.js';
import dotenv from "dotenv";
dotenv.config({ path: ".env" }); // 👈 make sure it loads from root

console.log("MongoDB connected");

loadEnv();

const PORT = process.env.PORT || 8000;

async function start() {
	try {
		await connectMongo();
		const server = http.createServer(app);
		server.listen(PORT, () => {
			// eslint-disable-next-line no-console
			console.log(`Server running on port ${PORT}`);
		});
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error('Failed to start server:', err);
		process.exit(1);
	}
}

start();
