/**
 * See https://dev.fitbit.com/build/reference/companion-api/messaging/
 */
declare module 'messaging' {
  const peerSocket: MessageSocket;

  class Event {}

  class CloseEvent extends Event {
    readonly CONNECTION_LOST: number;
    readonly PEER_INITIATED: number;
    readonly SOCKET_ERROR: number;
    readonly code: CloseEvent['CONNECTION_LOST'] | CloseEvent['PEER_INITIATED'] | CloseEvent['SOCKET_ERROR'];
    readonly reason: string;
    readonly wasClean: boolean;
  }

  class ErrorEvent extends Event {
    readonly BUFFER_FULL: number;
    readonly code: ErrorEvent['BUFFER_FULL'];
    readonly message: string;
  }

  class MessageEvent extends Event {
    data: any;
  }

  interface EventMap {
    bufferedamountdecrease: Event;
    close: CloseEvent;
    error: ErrorEvent;
    message: MessageEvent;
    open: Event;
  }

  class MessageSocket {
    readonly CLOSED: number;
    readonly OPEN: number;
    readonly MAX_MESSAGE_SIZE: number;
    readonly bufferedAmount: number;
    readonly readyState: MessageSocket['CLOSED'] | MessageSocket['OPEN'];

    onbufferedamountdecrease?: (event: Event) => any;
    onclose?: (event: CloseEvent) => any;
    onerror?: (event: ErrorEvent) => any;
    onmessage?: (event: MessageEvent) => any;
    onopen?: (event: Event) => any;

    addEventListener<K extends keyof EventMap>(
      type: K,
      listener: (this: MessageSocket, event: EventMap[K]) => any,
    ): void;
    send(data: any): void;
  }
}
