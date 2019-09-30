import WS from "jest-websocket-mock";

import webSocket from '../';
import { callbackify } from "util";

describe('webSocket', () => {
    const path = 'ws://localhost:1234';

    const props = {
        path,
        callback: {
            onOpen: () => null,
            onMessage: (e: any) => null,
            onClose: (e: any) => null,
            onError: (e: any) => null
        }
    }

    afterEach(() => {
        WS.clean();
    });

    it("the server keeps track of received messages, and yields them as they come in", async () => {
        const server = new WS(path);
        const client = webSocket({ path });
        await server.connected;

        client.send("hello");
        await expect(server).toReceiveMessage("hello");
        expect(server).toHaveReceivedMessages(["hello"]);
    });

    it("the mock server sends errors to connected clients", async () => {
        let disconnected = false;
        let error = null;

        const server = new WS(path);
        const client = webSocket({ 
          ...props,
          callback: {
            ...props.callback,
            onClose: (e: any) => { disconnected = true; },
            onError: (e: any) => { error = e; } 
          }
        });
        await server.connected;
       
        server.send("hello everyone");
        server.error();
        expect(disconnected).toBe(true);
        expect(error.origin).toBe("ws://localhost:1234/");
        expect(error.type).toBe("error");
    });

    it("the server can refuse connections", async () => {
        const server = new WS("ws://localhost:1234");
        server.on("connection", socket => {
          socket.close({ wasClean: false, code: 1003, reason: "NOPE" });
        });
       
        const client = new WebSocket("ws://localhost:1234");
        client.onclose = (event: CloseEvent) => {
          expect(event.code).toBe(1003);
          expect(event.wasClean).toBe(false);
          expect(event.reason).toBe("NOPE");
        };
       
        expect(client.readyState).toBe(WebSocket.CONNECTING);
       
        await server.connected;
        expect(client.readyState).toBe(WebSocket.CLOSING);
       
        await server.closed;
        expect(client.readyState).toBe(WebSocket.CLOSED);
    });
});