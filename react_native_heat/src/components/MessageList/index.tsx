import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { io } from 'socket.io-client';

import { api } from '../../services/api';

import { Message } from '../Message';

import { Message as MessageType } from '../Message/@types';

import { styles } from './styles';

const messagesQueue: MessageType[] = [];

const socket = io(String(api.defaults.baseURL));

socket.on('new_message', newMessage => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [currentMessage, setCurrentMessage] = useState<MessageType[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const messageResponse = await api.get<MessageType[]>('/messages/last3');

      setCurrentMessage(messageResponse.data);
    }

    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessage(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );

        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessage.map(message => (
        <Message key={message.id} data={message} />
      ))}
    </ScrollView>
  );
}
