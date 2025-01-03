'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(); // Connects to the same server as Next.js (http://localhost:3000)

const SocketContent = () => {
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
      <div className='content-body'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'>
              <div className='card upgrade'>
                <div className='card-header border-0'>
                  <h4 className='heading mb-0'>Socket.IO Chat</h4>
                </div>
                <div className='card-body'>
                  <h4>
                    {' '}
                    If you want to send or get messages from a room, you have to
                    submit the room ID.
                  </h4>
                  <div className='row justify-content-center mb-4'>
                    <div className='col-md-6'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Enter Room ID'
                          onChange={e => setRoomId(e.target.value)}
                        />
                        <button className='btn btn-primary' onClick={Login}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center mb-4'>
                    <div className='col-md-6'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Enter your message'
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className='row justify-content-center mb-4'>
                    <div className='col-md-6 text-center'>
                      <button
                        className='btn btn-success me-2'
                        onClick={MessageToAll}
                      >
                        Send to All
                      </button>
                      <button
                        className='btn btn-warning'
                        onClick={MessageToRoom}
                      >
                        Send to Room
                      </button>
                    </div>
                  </div>

                  <div className='row justify-content-center'>
                    <div className='col-md-6'>
                      <ul className='list-group'>
                        {receivedMessages.map((msg, index) => (
                          <li key={index} className='list-group-item'>
                            {msg}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocketContent;
