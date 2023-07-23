import { Server, Socket } from "socket.io";
import { Server as HttpServer } from "http";
import { CorsOptions } from "cors";
import { instrument } from "@socket.io/admin-ui";
import { hashSync } from "bcrypt";
import { SocketManager } from "./SocketManager";

export const initializeSocketServer = (
  server: HttpServer,
  cors?: CorsOptions,
) => {
  const io = new Server(server, { cors, transports: ["websocket"] });

  io.on("connection", (socket: Socket) => {
    SocketManager.init(io, socket);
  });

  // const config: { [key: string]: any } = {
  //     port: Number(process.env.SOCKET_IO_PORT ?? 3001),
  //     socketAdmin: {
  //         username: process.env.SOCKET_IO_ADMIN_USER!,
  //         password: process.env.SOCKET_IO_ADMIN_PASSWORD!
  //     }
  // }

  // const saltRounds = Number(process.env.SALT_ROUNDS ?? 10)
  // instrument(io, {
  //     auth: {
  //         type: 'basic',
  //         username: config.socketAdmin.username,
  //         password: hashSync(config.socketAdmin.password, saltRounds)
  //     }
  // })
};
