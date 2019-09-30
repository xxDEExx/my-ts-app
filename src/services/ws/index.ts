interface IProps {
    path: string,
    callback?: {
        onOpen?: () => void,
        onMessage?: (e: any) => void,
        onClose?: (e: any) => void,
        onError?: (e: any) => void
    }
}

const webSocket = ({ path, callback = {} }: IProps) => {
    const ws = new WebSocket(path);

    ws.onopen = () => callback.onOpen && callback.onOpen();

    ws.onmessage = e => callback.onMessage && callback.onMessage(e);

    ws.onclose = e => callback.onClose && callback.onClose(e);

    ws.onerror = e => callback.onError && callback.onError(e);

    return ws;
}

export default webSocket;
