import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { createServer } from "http";
import { initializeSocketServer } from "./SocketServer";

const app = express();
const whitelist = [
  "https://admin.socket.io/",
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

const corsOptions: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: (origin: any, callback: any) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  preflightContinue: false,
  credentials: true,
};

app.use(cors(corsOptions));
const server = createServer(app);
initializeSocketServer(server, corsOptions);

server.listen(process.env.PORT || 3001, () => {
  console.log("Server listening on port 3001");
});
