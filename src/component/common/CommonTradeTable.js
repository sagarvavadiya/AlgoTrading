import { ParseFloat } from '@/utils/common';
import React, { useEffect, useState } from 'react';

const CommonTradeTable = ({ tablename, data, type = 'normal', action }) => {
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    data && setRecordList(data);
  }, [data]);
  return (
    <>
      <div className='card'>
        <div className='card-header'>
          <h4 className='heading mb-0'>{tablename}</h4>
        </div>
        <div className='card-body p-0'>
          <div className='table-responsive'>
            <table className='table  card-table border-no success-tbl'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Trade type</th>
                  <th>Quantity</th>
                  <th>Entry price</th>
                  <th>Stoploss</th>
                  <th>Target</th>
                  {type == 'closeTable' && <th>Profit/Loss</th>}
                  {action && action.length > 0 && <th>Action</th>}
                </tr>
              </thead>
              <tbody>
                {recordList &&
                  recordList.length > 0 &&
                  recordList.map((rec, index) => {
                    return (
                      <tr key={index}>
                        <td>{rec?.uniqId}</td>
                        <td>
                          {rec?.isShortSell ? (
                            <span className='badge badge-danger light border-0'>
                              Shortsell
                            </span>
                          ) : (
                            <span className='badge badge-primary light border-0'>
                              Normal
                            </span>
                          )}
                        </td>
                        <td>{rec?.quantity}</td>
                        <td>{ParseFloat(rec?.entryPrice, 4)}</td>
                        <td>{ParseFloat(rec?.stopLoss, 4)}</td>
                        <td>{ParseFloat(rec?.targetPrice, 4)}</td>

                        {type == 'closeTable' && (
                          <td>
                            {rec?.isShortSell ? (
                              <span
                                className={`badge badge-${
                                  rec?.profit < 0 ? 'primary' : 'danger'
                                } border-0`}
                              >
                                <i
                                  className={`fa-solid fa-arrow-${
                                    rec?.profit < 0 ? 'up' : 'down'
                                  } me-1`}
                                />
                                {ParseFloat(Math.abs(rec?.profit), 4)}
                              </span>
                            ) : (
                              <span
                                className={`badge badge-${
                                  rec?.profit > 0 ? 'primary' : 'danger'
                                } border-0`}
                              >
                                <i
                                  className={`fa-solid fa-arrow-${
                                    rec?.profit > 0 ? 'up' : 'down'
                                  } me-1`}
                                />
                                {ParseFloat(Math.abs(rec?.profit), 4)}
                              </span>
                            )}

                          </td>
                        )}

                        {action && action.length > 0 && (
                          <td>
                            {action.map((i, index) => {
                              return (
                                <button
                                  key={index}
                                  className={`btn btn-${
                                    i?.varient ?? 'primary'
                                  }`}
                                  onClick={e => i.onAction(rec)}
                                >
                                  {i.title}
                                </button>
                              );
                            })}
                          </td>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonTradeTable;
