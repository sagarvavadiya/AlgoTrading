'use client';

import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocketContent from '@/component/Socket/SocketContent';

const socket = io(); // Connects to the same server as Next.js (http://localhost:3000)

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [roomId, setRoomId] = useState('12');
  const [receivedMessages, setReceivedMessages] = useState([]);

  const Login = () => {
    try {
      socket.emit('login', roomId);
      socket.on('user_connected', data => {
        console.log('Login===========>', data);
      });
    } catch (error) {
      console.log('Error in Login Event', error);
    }
    return;
  };
  // Functionality for send message to all user
  const MessageToAll = () => {
    socket.emit('messageToAll', message);
  };

  useEffect(() => {
    // Set up the event listener
    socket.on('messageToAll', data => {
      // Handle the received data
      console.log(data);
      setReceivedMessages(prevMessages => [...prevMessages, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('messageToAll');
    };
  }, []);
  // Functionality for send message to only room member>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const MessageToRoom = () => {
    socket.emit('messageToRoomMember', { senderID: roomId, data: message });
  };

  useEffect(() => {
    // Set up the event listener
    socket.on('messageToRoomMember', data => {
      // Handle the received data
      console.log(data);
      setReceivedMessages(prevMessages => [...prevMessages, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('messageToRoomMember');
    };
  }, []);

  useEffect(() => {
    console.log(receivedMessages);
  }, [receivedMessages]);

  return (
    <>
      <SocketContent />
    </>
  );
};

export default ChatApp;
