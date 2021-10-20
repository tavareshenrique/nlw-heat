import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { IMessage } from './@interfaces';

import styles from './styles.module.scss';

const messagesQueue: IMessage[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: IMessage) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    window.setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api.get<IMessage[]>('messages/last3').then(response => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo do DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map(message => (
          <li key={message.id} className={styles.message}>
            <span className={styles.messageContent}>
              {message.text}
              <div className={styles.messageUser}>
                <div className={styles.userImage}>
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </div>
                <span>{message.user.name}</span>
              </div>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
