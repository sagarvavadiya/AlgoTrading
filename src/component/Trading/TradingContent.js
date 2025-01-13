'use client';
import React, { useState, useEffect, use } from 'react';
import CommonModal from '../common/CommonModal';
import {
  convert_date_upto_second,
  ParseFloat,
  validate_number_value,
  validate_string,
} from '@/utils/common';
import io from 'socket.io-client';
import CommonTradeTable from '../common/CommonTradeTable';
const socket = io();
const AddAlgoModal = ({
  addAlgoForm,
  setAddAlgoForm,
  onSubmitAlgoForm,
  entryOnLtp,
  setEntryOnLtp,
  isBothSideTrade,
  setIsBothSideTrade,
}) => {
  const handleChange = e => {
    const { name, value } = e.target;
    setAddAlgoForm({ ...addAlgoForm, [name]: value });
  };
  return (
    <>
      <div className='d-flex flex-column gap-3'>
        <div className='form-group'>
          <div className='d-flex justify-content-between'>
            <div className='form-check custom-checkbox  checkbox-success'>
              <input
                type='checkbox'
                name='isShortSell'
                className='form-check-input'
                checked={isBothSideTrade}
                onChange={e => setIsBothSideTrade(e.target.checked)}
                id='customCheckBox3'
                required=''
              />
              <label className='form-check-label' for='customCheckBox3'>
                Is Bothside Trade?
              </label>
            </div>
            <div className='form-check custom-checkbox  checkbox-success'>
              <input
                type='checkbox'
                name='isShortSell'
                className='form-check-input'
                checked={addAlgoForm.isShortSell}
                onChange={e =>
                  handleChange({
                    target: { name: 'isShortSell', value: e.target.checked },
                  })
                }
                id='customCheckBox3'
                required=''
              />
              <label className='form-check-label' for='customCheckBox3'>
                Is Short Sell?
              </label>
            </div>
            <div className='form-check custom-checkbox  checkbox-success'>
              <input
                type='checkbox'
                className='form-check-input'
                checked={entryOnLtp}
                onChange={e => setEntryOnLtp(e.target.checked)}
                id='customCheckBox3'
                required=''
              />
              <label className='form-check-label' for='customCheckBox3'>
                Entry on LTP?
              </label>
            </div>
          </div>
        </div>
        <div className='form-group'>
          <label for='formGroupExampleInput2'>Entry Price</label>
          <input
            type='number'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Entry Price'
            name='entryPrice'
            value={entryOnLtp ? 0 : addAlgoForm.entryPrice}
            onChange={!entryOnLtp ? handleChange : () => {}}
          />
        </div>
        <div className='form-group'>
          <label for='formGroupExampleInput2'>Quntity</label>
          <input
            type='number'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Quntity'
            name='quantity'
            value={addAlgoForm.quantity}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label for='formGroupExampleInput2'>{`Stop Loss(%)`}</label>
          <input
            type='number'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Stop Loss'
            name='stopLoss'
            value={addAlgoForm.stopLoss}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label for='formGroupExampleInput2'>{`Target Price(%)`}</label>
          <input
            type='number'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Target Price'
            name='targetPrice'
            value={addAlgoForm.targetPrice}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};
const TradingContent = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [activeTradeData, setActiveTradeData] = useState([
    {
      uniqId: '1',
      isShortSell: false,
      entryPrice: 99017.04,
      quantity: 1,
      stopLoss: 99016.941,
      targetPrice: 100007.2104,
      loss: 4645.479999999996,
    },
    {
      uniqId: '2',
      isShortSell: true,
      entryPrice: 99424.46,
      quantity: 1,
      stopLoss: 99424.5594,
      targetPrice: 94453.237,
      loss: 5052.900000000009,
    },
    {
      uniqId: '2',
      isShortSell: true,
      entryPrice: 94610.6,
      quantity: 1,
      stopLoss: 94610.6946,
      targetPrice: 89880.07,
      profit: -498.09000000001106,
    },
  ]);
  const [pandingTradeData, setPandingTradeData] = useState([]);
  const [closedTradeData, setClosedTradeData] = useState([]);
  const [socketBlockId, setSocketBlockId] = useState(10);
  const [entryOnLtp, setEntryOnLtp] = useState(true);
  const [addAlgoForm, setAddAlgoForm] = useState({
    isShortSell: false,
    entryPrice: '',
    quantity: 1,
    stopLoss: 0.0001,
    targetPrice: 5,
    tradeId: cryptoData[0]?.tradeId,
  });
  const [isBothSideTrade, setIsBothSideTrade] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getInitialData = () => {
    socket.emit('getInitialData', { senderID: socketBlockId, data: 'message' });
  };
  const resetData = () => {
    socket.emit('resetFiles', { senderID: socketBlockId, data: 'message' });
  };
  // ============================================================================ Add algorithm start ==========================================================================

  const Login = () => {
    try {
      socket.emit('login', socketBlockId);
      socket.on('user_connected', data => {
        console.log('Login===========>', data);
      });
      setIsLogin(1);
    } catch (error) {
      console.log('Error in Login Event', error);
    }
    return;
  };

  const modifiedPrice = (price, percentage, type) => {
    console.log({ price, percentage, type });
    if (type === 'add') {
      return price + (price * percentage) / 100;
    } else {
      return price - (price * percentage) / 100;
    }
  };
  const onSubmitAlgoForm = event => {
    // console.log(addAlgoForm);
    const formData = {
      uniqId: `${cryptoData[0]?.tradeId}`,
      isShortSell: addAlgoForm.isShortSell,
      entryPrice: entryOnLtp
        ? ParseFloat(cryptoData[0]?.latestTradedPrice, 4)
        : ParseFloat(addAlgoForm.entryPrice, 4),
      quantity: parseInt(addAlgoForm.quantity),
      stopLoss: ParseFloat(
        modifiedPrice(
          parseFloat(
            entryOnLtp
              ? cryptoData[0]?.latestTradedPrice
              : addAlgoForm.entryPrice,
          ),
          parseFloat(addAlgoForm.stopLoss),
          'sub',
        ),
        4,
      ),
      targetPrice: ParseFloat(
        modifiedPrice(
          parseFloat(
            entryOnLtp
              ? cryptoData[0]?.latestTradedPrice
              : addAlgoForm.entryPrice,
          ),
          parseFloat(addAlgoForm.targetPrice),
          'add',
        ),
        4,
      ),
    };

    try {
      validate_number_value(formData.entryPrice, 'entryPrice');
      validate_number_value(formData.quantity, 'quantity');
      validate_number_value(formData.stopLoss, 'stopLoss');
      validate_number_value(formData.targetPrice, 'targetPrice');
      validate_string(formData.uniqId, 'uniqId');
    } catch (e) {
      alert(e);
      return false;
    }
    console.log('submit');

    if (!isBothSideTrade) {
      socket.emit('onAddAlgo', {
        senderID: socketBlockId,
        data: [formData],
      });
    } else {
      function algoStrategy({ ltp, quantity, stopLoss, targetPrice }) {
        const regTradeEntry = ltp + 1;
        const shortSellTradeEntry = ltp - 1;
        const regTradeFormData = {
          uniqId: `1`,
          isShortSell: false,
          entryPrice: regTradeEntry,
          actualEntryPrice: regTradeEntry,
          quantity: parseInt(quantity),
          stopLoss: ParseFloat(
            modifiedPrice(
              parseFloat(regTradeEntry),
              parseFloat(stopLoss),
              'sub',
            ),
            4,
          ),
          targetPrice: ParseFloat(
            modifiedPrice(
              parseFloat(regTradeEntry),
              parseFloat(targetPrice),
              'add',
            ),
            4,
          ),
        };
        const shortSellTradeFormData = {
          uniqId: `2`,
          isShortSell: true,
          entryPrice: shortSellTradeEntry,
          actualEntryPrice: shortSellTradeEntry,
          quantity: parseInt(quantity),
          stopLoss: ParseFloat(
            modifiedPrice(
              parseFloat(shortSellTradeEntry),
              parseFloat(stopLoss),
              'add',
            ),
            4,
          ),
          targetPrice: ParseFloat(
            modifiedPrice(
              parseFloat(shortSellTradeEntry),
              parseFloat(targetPrice),
              'sub',
            ),
            4,
          ),
        };

        return [regTradeFormData, shortSellTradeFormData];
      }

      const multiTrades = algoStrategy({
        ltp: ParseFloat(cryptoData[0]?.latestTradedPrice, 4),
        quantity: parseInt(addAlgoForm.quantity),
        stopLoss: ParseFloat(addAlgoForm.stopLoss, 4),
        targetPrice: ParseFloat(addAlgoForm.targetPrice, 4),
      });

      socket.emit('onAddAlgo', {
        senderID: socketBlockId,
        data: multiTrades,
      });
    }
  };
  useEffect(() => {
    // Set up the event listener
    socket.on('onAddAlgo', data => {
      // Handle the received data
      console.log('get data from server', data);

      // setReceivedMessages(prevMessages => [...prevMessages, data]);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('onAddAlgo');
    };
  }, []);

  useEffect(() => {
    Login();
  }, []);

  // ============================================================================ Add algorithm end ==========================================================================
  useEffect(() => {
    // Set up the event listener
    socket.on('activeTradeUpdated', data => {
      // Handle the received data
      setActiveTradeData(data);
      console.log('activeTradeUpdated', data);
    });
    socket.on('pandingTradeUpdated', data => {
      // Handle the received data
      setPandingTradeData(data);
      console.log('pandingTradeUpdated', data);
    });
    socket.on('closedTradeUpdated', data => {
      // Handle the received data
      setClosedTradeData(data);
      console.log('closedTradeUpdated', data);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('activeTradeUpdated');
      socket.off('pandingTradeUpdated');
      socket.off('closedTradeUpdated');
    };
  }, []);
  // ============================================================================ Currency list Start ==========================================================================
  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

    // Listen for messages (price updates) from the WebSocket
    ws.onmessage = event => {
      const data = JSON.parse(event.data);
      const newPrice = parseFloat(data.p).toFixed(4); // Price of the trade
      const cryptoObj = {
        symbole: data.s,
        latestTradedPrice: newPrice,
        tradedQunaty: data.q,
        tradeTime: parseInt(data.T),
        tradeId: parseInt(data.t),
      };
      setCryptoData([cryptoObj]);
    };

    // Cleanup WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  // ============================================================================ Currency list End ==========================================================================

  useEffect(() => {
    if (!entryOnLtp) {
      setAddAlgoForm({
        ...addAlgoForm,
        entryPrice: cryptoData[0]?.latestTradedPrice,
      });
    }
  }, []);

  useEffect(() => {
    if (isLogin === 1) {
      getInitialData();
    }
  }, [isLogin]);

  const test = () => {
    getInitialData();
  };
  const resetFileData = () => {
    resetData();
  };

  useEffect(() => {
    // Set up the event listener
    socket.on('messageToAll', data => {
      // Handle the received data
      console.log('messageToAll', data);
    });

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('messageToAll');
    };
  }, []);
  return (
    <>
      <div className='content-body'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-6 col-xxl-12'>
              <div className='card'>
                <div className='card-header border-0 pb-0 flex-wrap'>
                  <h4 className='heading mb-0' >
                    Manage Algo
                  </h4>
                </div>
                <div className='card-body px-0 pb-0'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='pills-social'
                      role='tabpanel'
                      aria-labelledby='pills-social-tab'
                    >
                      <div className='table-responsive'>
                        <table className='table  card-table border-no success-tbl'>
                          <thead>
                            <tr>
                              <th>Coin</th>
                              <th style={{ minWidth: '100px' }}>LTP</th>
                              <th style={{ minWidth: '172px' }}>
                                Traded Qunaty
                              </th>
                              <th style={{ minWidth: '172px' }}>Trade Time</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cryptoData.map((item, index) => {
                              return (
                                <tr key={index}>
                                  <td>
                                    <div className='d-flex align-items-center'>
                                      <img
                                        src='assets/images/contacts/pic1.jpg'
                                        className='avatar avatar-xl'
                                        alt=''
                                      />
                                      <div className='ms-2 cat-name'>
                                        <p className='mb-0'>{item.symbole}</p>
                                        <span>Span</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{item.latestTradedPrice}</td>
                                  <td>{item.tradedQunaty}</td>
                                  <td>
                                    {convert_date_upto_second(item.tradeTime)}
                                  </td>
                                  <td>
                                    <div className='dropdown c-pointer'>
                                      <button
                                        className='btn btn-sm btn-primary'
                                        onClick={handleShow}
                                      >
                                        Trade
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className='btn btn-primary m-2' onClick={test}>Get File Data</button>
          <button className='btn btn-secondary' onClick={resetFileData}>Reset File</button>
          {/* Active Trade Table */}

          <CommonTradeTable
            data={activeTradeData}
            tablename={'Active Trade List'}
          />
          {/* Panding Trade Table */}
          <CommonTradeTable
            data={pandingTradeData}
            tablename={'Panding Trade List'}
          />
          {/* Closed Trade Table */}
          <CommonTradeTable
            data={closedTradeData}
            type='closeTable'
            tablename={'Closed Trade List'}
          />
        </div>
      </div>

      <CommonModal
        children={
          <AddAlgoModal
            addAlgoForm={addAlgoForm}
            setAddAlgoForm={setAddAlgoForm}
            onSubmitAlgoForm={onSubmitAlgoForm}
            entryOnLtp={entryOnLtp}
            setEntryOnLtp={setEntryOnLtp}
            isBothSideTrade={isBothSideTrade}
            setIsBothSideTrade={setIsBothSideTrade}
          />
        }
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        title='Add algo'
        onSubmit={onSubmitAlgoForm}
      />
    </>
  );
};

export default TradingContent;
