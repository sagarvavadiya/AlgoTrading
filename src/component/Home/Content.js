import React from 'react';

const Content = () => {
  return (
    <>
      <div className='content-body'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-6 col-xxl-7'>
              <div className='row'>
                <div className='col-xl-6 col-sm-6'>
                  <div className='card ds-2'>
                    <div className='card-body'>
                      <div className=''>
                        <h3>20</h3>
                        <h6>Tasks Not Finisheds</h6>
                      </div>
                      <div className='progress-box'>
                        <div className='d-flex justify-content-between mb-2'>
                          <p className='mb-0'>Complete Task</p>
                          <p className='mb-0'>20/28</p>
                        </div>
                        <div className='progress'>
                          <div
                            className='progress-bar bg-white'
                            style={{
                              width: '50%',
                              height: 5,
                              borderRadius: 4,
                            }}
                            role='progressbar'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-sm-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='ds-head'>
                        <h3 className='d-flex align-items-center justify-content-between'>
                          $2,000
                          <span className='badge badge-success light ms-2'>
                            <i className='fa-solid fa-arrow-up me-2' />
                            5.2%
                          </span>
                        </h3>
                        <h6>Total Deposit</h6>
                      </div>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <div id='AllProject_rate' />
                          <ul className='project-list'>
                            <li>
                              <h6>All Projects</h6>
                            </li>
                            <li>
                              <svg
                                width={10}
                                height={10}
                                viewBox='0 0 10 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  width={10}
                                  height={10}
                                  rx={3}
                                  fill='#3AC977'
                                />
                              </svg>
                              Compete
                            </li>
                            <li>
                              <svg
                                width={10}
                                height={10}
                                viewBox='0 0 10 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  width={10}
                                  height={10}
                                  rx={3}
                                  fill='var(--primary)'
                                />
                              </svg>
                              Pending
                            </li>
                            <li>
                              <svg
                                width={10}
                                height={10}
                                viewBox='0 0 10 10'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <rect
                                  width={10}
                                  height={10}
                                  rx={3}
                                  fill='var(--secondary)'
                                />
                              </svg>
                              Not Start
                            </li>
                          </ul>
                        </div>
                        <ul className='ds-prise'>
                          <li>$500</li>
                          <li>$200</li>
                          <li>$560</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-sm-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='ds-head'>
                        <h6 className='mb-0'>Revenue</h6>
                        <h3>
                          <small>$</small>310.435
                        </h3>
                      </div>
                      <div className='d-team'>
                        <span className='d-block text-black'>Our Star</span>
                        <div className='d-flex align-items-center'>
                          <div className='avatar-list avatar-list-stacked'>
                            <img
                              src='assets/images/contacts/pic666.jpg'
                              className='avatar avatar-lg  rounded-circle'
                              alt=''
                            />
                            <img
                              src='assets/images/contacts/pic555.jpg'
                              className='avatar avatar-lg rounded-circle'
                              alt=''
                            />
                            <img
                              src='assets/images/contacts/pic1.jpg'
                              className='avatar avatar-lg rounded-circle'
                              alt=''
                            />
                            <span className='avatar avatar-lg  rounded-circle bg-primary text-white'>
                              P
                            </span>
                            <img
                              src='assets/images/contacts/pic666.jpg'
                              className='avatar avatar-lg  rounded-circle'
                              alt=''
                            />
                            <span className='avatar avatar-lg  rounded-circle bg-danger text-white'>
                              H
                            </span>
                          </div>
                          <a href='javascript:void(0)'>21+ Team</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 col-sm-6'>
                  <div className='card'>
                    <div className='card-body'>
                      <div className='ds-head'>
                        <img src='assets/images/uidesgn.png' alt='' />
                      </div>
                      <div className=''>
                        <h6>UI/UX Design</h6>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                        <a
                          href='javascript:void(0);'
                          className='btn btn-primary btn-sm'
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-xxl-5'>
              <div className='card upgrade'>
                <div className='card-header border-0'>
                  <h4 className='heading mb-0'>Upgrade Your Plan</h4>
                </div>
                <div className='card-body'>
                  <div className='text-center'>
                    <img src='assets/images/items.png' alt='' />
                  </div>
                  <h4>Enviroment with Pro Plan for Free</h4>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal1'
                  >
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-xxl-12'>
              <div className='card'>
                <div className='card-header border-0 pb-0 flex-wrap'>
                  <h4 className='heading mb-0'>Literary success</h4>
                </div>
                <div className='card-body px-0 pb-0'>
                  <ul
                    className='nav nav-pills success-tab'
                    id='pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link active'
                        data-series='social'
                        id='pills-social-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-social'
                        type='button'
                        role='tab'
                        aria-selected='true'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='svg-main-icon'
                        >
                          <g
                            stroke='none'
                            strokeWidth={1}
                            fill='none'
                            fillRule='evenodd'
                          >
                            <polygon points='0 0 24 0 24 24 0 24' />
                            <path
                              d='M16.5,4.5 C14.8905,4.5 13.00825,6.32463215 12,7.5 C10.99175,6.32463215 9.1095,4.5 7.5,4.5 C4.651,4.5 3,6.72217984 3,9.55040872 C3,12.6834696 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.92177112 19.349,4.5 16.5,4.5 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                              opacity='0.3'
                            />
                            <path
                              d='M12,19.5 C6,16 3,12.6834696 3,9.55040872 C3,6.72217984 4.651,4.5 7.5,4.5 C9.1095,4.5 10.99175,6.32463215 12,7.5 L12,19.5 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                            />
                          </g>
                        </svg>
                        <span>Social</span>
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='project'
                        id='pills-project-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-project'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='svg-main-icon'
                        >
                          <g
                            stroke='none'
                            strokeWidth={1}
                            fill='none'
                            fillRule='evenodd'
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d='M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z'
                              fill='var(--text-dark)'
                            />
                            <path
                              d='M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                        <span>Project</span>
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='sale'
                        id='pills-sale-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-sale'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='svg-main-icon'
                        >
                          <g
                            stroke='none'
                            strokeWidth={1}
                            fill='none'
                            fillRule='evenodd'
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d='M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                            />
                            <path
                              d='M8.7295372,14.6839411 C8.35180695,15.0868534 7.71897114,15.1072675 7.31605887,14.7295372 C6.9131466,14.3518069 6.89273254,13.7189711 7.2704628,13.3160589 L11.0204628,9.31605887 C11.3857725,8.92639521 11.9928179,8.89260288 12.3991193,9.23931335 L15.358855,11.7649545 L19.2151172,6.88035571 C19.5573373,6.44687693 20.1861655,6.37289714 20.6196443,6.71511723 C21.0531231,7.05733733 21.1271029,7.68616551 20.7848828,8.11964429 L16.2848828,13.8196443 C15.9333973,14.2648593 15.2823707,14.3288915 14.8508807,13.9606866 L11.8268294,11.3801628 L8.7295372,14.6839411 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                              opacity='0.3'
                              transform='translate(14.000019, 10.749981) scale(1, -1) translate(-14.000019, -10.749981) '
                            />
                          </g>
                        </svg>
                        <span>Sale</span>
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='all'
                        id='pills-mobile-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-mobile'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='svg-main-icon'
                        >
                          <g
                            stroke='none'
                            strokeWidth={1}
                            fill='none'
                            fillRule='evenodd'
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d='M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z'
                              fill='var(--text-dark)'
                              opacity='0.3'
                            />
                            <path
                              d='M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                            />
                          </g>
                        </svg>
                        <span>Mobile</span>
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='all'
                        id='pills-all1-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-all1'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                          className='svg-main-icon'
                        >
                          <g
                            stroke='none'
                            strokeWidth={1}
                            fill='none'
                            fillRule='evenodd'
                          >
                            <rect x={0} y={0} width={24} height={24} />
                            <path
                              d='M3.5,21 L20.5,21 C21.3284271,21 22,20.3284271 22,19.5 L22,8.5 C22,7.67157288 21.3284271,7 20.5,7 L10,7 L7.43933983,4.43933983 C7.15803526,4.15803526 6.77650439,4 6.37867966,4 L3.5,4 C2.67157288,4 2,4.67157288 2,5.5 L2,19.5 C2,20.3284271 2.67157288,21 3.5,21 Z'
                              fill='var(--text-dark)'
                              opacity='0.3'
                            />
                            <path
                              d='M14.35,10.5 C13.54525,10.5 12.604125,11.4123161 12.1,12 C11.595875,11.4123161 10.65475,10.5 9.85,10.5 C8.4255,10.5 7.6,11.6110899 7.6,13.0252044 C7.6,14.5917348 9.1,16.25 12.1,18 C15.1,16.25 16.6,14.625 16.6,13.125 C16.6,11.7108856 15.7745,10.5 14.35,10.5 Z'
                              fill='var(--text-dark)'
                              fillRule='nonzero'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                        <span>All</span>
                      </button>
                    </li>
                  </ul>
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
                              <th>Name</th>
                              <th>Avg.</th>
                              <th>Groth</th>
                              <th>View</th>
                              <th>status</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Liam Risher</p>
                                    <span>Span</span>
                                  </div>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-end'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic888.jpg'
                                    className='avatar avatar-xl '
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Elijah James</p>
                                    <span>NYC</span>
                                  </div>
                                </div>
                              </td>
                              <td>59.879%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>69.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line3'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-project'
                      role='tabpanel'
                      aria-labelledby='pills-project-tab'
                    >
                      <div className='table-responsive'>
                        <table className='table  card-table border-no success-tbl'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Avg.</th>
                              <th>Groth</th>
                              <th>View</th>
                              <th>status</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Liam Risher</p>
                                    <span>Span</span>
                                  </div>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic3.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td className='avg'>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td className='avg'>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic888.jpg'
                                    className='avatar avatar-xl '
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Elijah James</p>
                                    <span>NYC</span>
                                  </div>
                                </div>
                              </td>
                              <td className='avg'>59.879%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td className='avg'>69.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td className='avg'>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line3'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td className='avg'>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-sale'
                      role='tabpanel'
                      aria-labelledby='pills-sale-tab'
                    >
                      <div className='table-responsive'>
                        <table className='table  card-table border-no success-tbl'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Avg.</th>
                              <th>Groth</th>
                              <th>View</th>
                              <th>status</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Liam Risher</p>
                                    <span>Span</span>
                                  </div>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic888.jpg'
                                    className='avatar avatar-xl '
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Elijah James</p>
                                    <span>NYC</span>
                                  </div>
                                </div>
                              </td>
                              <td>59.879%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>69.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line3'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-mobile'
                      role='tabpanel'
                      aria-labelledby='pills-mobile-tab'
                    >
                      <div className='table-responsive'>
                        <table className='table card-table border-no success-tbl'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Avg.</th>
                              <th>Groth</th>
                              <th>View</th>
                              <th>status</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Liam Risher</p>
                                    <span>Span</span>
                                  </div>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic888.jpg'
                                    className='avatar avatar-xl '
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Elijah James</p>
                                    <span>NYC</span>
                                  </div>
                                </div>
                              </td>
                              <td>59.879%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>69.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line3'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pills-all1'
                      role='tabpanel'
                      aria-labelledby='pills-all1-tab'
                    >
                      <div className='table-responsive'>
                        <table className='table  card-table border-no success-tbl'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Avg.</th>
                              <th>Groth</th>
                              <th>View</th>
                              <th>status</th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic1.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Liam Risher</p>
                                    <span>Span</span>
                                  </div>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>66.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic888.jpg'
                                    className='avatar avatar-xl '
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Elijah James</p>
                                    <span>NYC</span>
                                  </div>
                                </div>
                              </td>
                              <td>59.879%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line2'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>69.99%</td>
                              <td>
                                <span className='badge badge-primary light border-0'>
                                  Inprogress
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <img
                                    src='assets/images/contacts/pic2.jpg'
                                    className='avatar avatar-xl'
                                    alt=''
                                  />
                                  <div className='ms-2 cat-name'>
                                    <p className='mb-0'>Oliver Noah</p>
                                    <span>USA</span>
                                  </div>
                                </div>
                              </td>
                              <td>78.89%</td>
                              <td>
                                <div className='d-flex align-items-center'>
                                  <span
                                    className='peity-line3'
                                    data-width='100%'
                                  >
                                    8,4,5,9,5,3,5,7,5
                                  </span>
                                </div>
                              </td>
                              <td>78.39.99%</td>
                              <td>
                                <span className='badge badge-success light border-0'>
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className='dropdown c-pointer'>
                                  <div
                                    className='btn-link'
                                    data-bs-toggle='dropdown'
                                  >
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox='0 0 24 24'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <path
                                        d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                      <path
                                        d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                        stroke='#737B8B'
                                        strokeWidth={2}
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                      />
                                    </svg>
                                  </div>
                                  <div className='dropdown-menu dropdown-menu-right'>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Edit
                                    </a>
                                    <a
                                      className='dropdown-item'
                                      href='javascript:void(0);'
                                    >
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-xxl-12'>
              <div className='card overflow-hidden'>
                <div className='card-header border-0 pb-0 flex-wrap'>
                  <h4 className='heading mb-0'>Projects Overview</h4>
                  <ul
                    className='nav nav-pills mix-chart-tab'
                    id='pills-tab3'
                    role='tablist'
                  >
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link active'
                        data-series='week'
                        id='pills-week-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-week'
                        type='button'
                        role='tab'
                        aria-selected='true'
                      >
                        Week
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='month'
                        id='pills-month-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-month'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        Month
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='year'
                        id='pills-year-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-year'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        Year
                      </button>
                    </li>
                    <li className='nav-item' role='presentation'>
                      <button
                        className='nav-link'
                        data-series='all'
                        id='pills-all-tab'
                        data-bs-toggle='pill'
                        data-bs-target='#pills-all'
                        type='button'
                        role='tab'
                        aria-selected='false'
                      >
                        All
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='card-body custome-tooltip p-0'>
                  <div id='overiewChart' />
                  <div className='ttl-project'>
                    <div className='pr-data'>
                      <h5>12,721</h5>
                      <span>Number of Projects</span>
                    </div>
                    <div className='pr-data'>
                      <h5 className='text-primary'>721</h5>
                      <span>Active Projects</span>
                    </div>
                    <div className='pr-data'>
                      <h5>$2,50,523</h5>
                      <span>Revenue</span>
                    </div>
                    <div className='pr-data'>
                      <h5 className='text-success'>12,275h</h5>
                      <span>Working Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='card'>
                <div className='card-body'>
                  <div className='row'>
                    <div className='col-xl-6 col-xxl-5 col-sm-6'>
                      <div className='space-image'>
                        <img src='assets/images/windows.jpg' alt='' />
                      </div>
                    </div>
                    <div className='col-xl-6 col-xxl-7 col-sm-6'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='mt-3 mt-sm-0'>
                          <h4 className='mb-0'>Prominent</h4>
                          <span>User Interface Design</span>
                        </div>
                        <a
                          href='project.html'
                          className='btn btn-primary btn-sm'
                        >
                          View Project
                        </a>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <div className='s-date'>
                          <p className='mb-0'>Start Date</p>
                          <span>17 June 2023</span>
                        </div>
                        <div className='s-date'>
                          <p className='mb-0'>End Date</p>
                          <span>08 May 2023</span>
                        </div>
                        <div className='s-date'>
                          <p className='mb-0'>Price</p>
                          <span>$256</span>
                        </div>
                      </div>
                      <p className='para'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center p-bd'>
                          <img
                            src='assets/images/contacts/pic666.jpg'
                            className='avatar avatar-lg  rounded-circle'
                            alt=''
                          />
                          <div className='ms-2'>
                            <p className='mb-0'>Project Manager</p>
                            <span>Hanuman</span>
                          </div>
                        </div>
                        <div className='d-flex align-items-center'>
                          <img
                            src='assets/images/budgeting.png'
                            className='avatar avatar-lg  rounded-circle'
                            alt=''
                          />
                          <div className='ms-2'>
                            <p className='mb-0 text-black'>Budget</p>
                            <span>$25,25</span>
                          </div>
                        </div>
                      </div>
                      <div className='d-team mt-4'>
                        <span className='d-block text-black'>Our Star</span>
                        <div className='d-flex align-items-center'>
                          <div className='avatar-list avatar-list-stacked'>
                            <img
                              src='assets/images/contacts/pic666.jpg'
                              className='avatar avatar-lg  rounded-circle'
                              alt=''
                            />
                            <img
                              src='assets/images/contacts/pic555.jpg'
                              className='avatar avatar-lg rounded-circle'
                              alt=''
                            />
                            <img
                              src='assets/images/contacts/pic1.jpg'
                              className='avatar avatar-lg rounded-circle'
                              alt=''
                            />
                            <span className='avatar avatar-lg  rounded-circle bg-primary text-white'>
                              P
                            </span>
                            <img
                              src='assets/images/contacts/pic666.jpg'
                              className='avatar avatar-lg  rounded-circle'
                              alt=''
                            />
                            <span className='avatar avatar-lg  rounded-circle bg-danger text-white'>
                              H
                            </span>
                          </div>
                          <a href='javascript:void(0)' className='text-primary'>
                            21+ Team
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='card'>
                <div className='card-header'>
                  <h4 className='heading mb-0'>Projects</h4>
                </div>
                <div className='card-body p-0'>
                  <div className='table-responsive'>
                    <table className='table  card-table border-no success-tbl'>
                      <thead>
                        <tr>
                          <th>Project Name</th>
                          <th>Price</th>
                          <th>Growth</th>
                          <th>Chart</th>
                          <th>status</th>
                          <th>action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <img
                                src='assets/images/os/p1.jpg'
                                className='avatar avatar-xl'
                                alt=''
                              />
                              <div className='ms-2 cat-name'>
                                <p className='mb-0'>Jobick</p>
                                <span>Admin</span>
                              </div>
                            </div>
                          </td>
                          <td>$9</td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <span className='peity-line2' data-width='100%'>
                                8,4,5,9,5,3,5,7,5
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className='badge badge-info border-0'>
                              <i className='fa-solid fa-arrow-up me-1' />
                              2.8
                            </span>
                          </td>
                          <td>
                            <span className='badge badge-primary light border-0'>
                              Inprogress
                            </span>
                          </td>
                          <td>
                            <div className='dropdown c-pointer'>
                              <div
                                className='btn-link'
                                data-bs-toggle='dropdown'
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='dropdown-menu dropdown-menu-right'>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Edit
                                </a>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <img
                                src='assets/images/os/p2.jpg'
                                className='avatar avatar-xl'
                                alt=''
                              />
                              <div className='ms-2 cat-name'>
                                <p className='mb-0'>Winkit</p>
                                <span>Front-End </span>
                              </div>
                            </div>
                          </td>
                          <td>$49</td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <span className='peity-line' data-width='100%'>
                                8,4,5,9,5,3,5,7,5
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className='badge badge-danger border-0'>
                              <i className='fa-solid fa-arrow-down me-1' />
                              3.8
                            </span>
                          </td>
                          <td>
                            <span className='badge badge-success light border-0'>
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className='dropdown c-pointer'>
                              <div
                                className='btn-link'
                                data-bs-toggle='dropdown'
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='dropdown-menu dropdown-menu-right'>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Edit
                                </a>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <img
                                src='assets/images/os/p3.jpg'
                                className='avatar avatar-xl '
                                alt=''
                              />
                              <div className='ms-2 cat-name'>
                                <p className='mb-0'>W3CRM</p>
                                <span>Admin</span>
                              </div>
                            </div>
                          </td>
                          <td>$59</td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <span className='peity-line2' data-width='100%'>
                                8,4,5,9,5,3,5,7,5
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className='badge badge-primary border-0'>
                              <i className='fa-solid fa-arrow-up me-1' />
                              7.9
                            </span>
                          </td>
                          <td>
                            <span className='badge badge-primary light border-0'>
                              Inprogress
                            </span>
                          </td>
                          <td>
                            <div className='dropdown c-pointer'>
                              <div
                                className='btn-link'
                                data-bs-toggle='dropdown'
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='dropdown-menu dropdown-menu-right'>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Edit
                                </a>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <img
                                src='assets/images/os/p5.jpg'
                                className='avatar avatar-xl'
                                alt=''
                              />
                              <div className='ms-2 cat-name'>
                                <p className='mb-0'>JobZilla</p>
                                <span>WordPress</span>
                              </div>
                            </div>
                          </td>
                          <td>$39</td>
                          <td>
                            <div className='d-flex align-items-center'>
                              <span className='peity-line3' data-width='100%'>
                                8,4,5,9,5,3,5,7,5
                              </span>
                            </div>
                          </td>
                          <td>
                            <span className='badge badge-success border-0'>
                              <i className='fa-solid fa-arrow-up me-1' />
                              5.9
                            </span>
                          </td>
                          <td>
                            <span className='badge badge-success light border-0'>
                              Completed
                            </span>
                          </td>
                          <td>
                            <div className='dropdown c-pointer'>
                              <div
                                className='btn-link'
                                data-bs-toggle='dropdown'
                              >
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                  <path
                                    d='M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z'
                                    stroke='#737B8B'
                                    strokeWidth={2}
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='dropdown-menu dropdown-menu-right'>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Edit
                                </a>
                                <a
                                  className='dropdown-item'
                                  href='javascript:void(0);'
                                >
                                  Delete
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-9 col-xxl-8 bst-seller'>
              <div className='card'>
                <div className='card-body p-0'>
                  <div className='table-responsive active-projects style-1 ItemsCheckboxSec shorting '>
                    <div className='tbl-caption'>
                      <h4 className='heading mb-0'>Employees</h4>
                      <div>
                        <a
                          className='btn btn-primary btn-sm me-2'
                          data-bs-toggle='offcanvas'
                          href='#offcanvasExample'
                          role='button'
                          aria-controls='offcanvasExample'
                        >
                          + Add Employee
                        </a>
                        <button
                          type='button'
                          className='btn btn-secondary btn-sm'
                          data-bs-toggle='modal'
                          data-bs-target='#exampleModal2'
                        >
                          + Invite Employee
                        </button>
                      </div>
                    </div>
                    <table id='empoloyees-tbl3' className='table'>
                      <thead>
                        <tr>
                          <th>
                            <div className='form-check custom-checkbox ms-0'>
                              <input
                                type='checkbox'
                                className='form-check-input checkAllInput'
                                id='checkAll2'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='checkAll2'
                              />
                            </div>
                          </th>
                          <th>Employee ID</th>
                          <th>Employee Name</th>
                          <th>Email Address</th>
                          <th>Contact Number</th>
                          <th>Gender</th>
                          <th>Location</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox100'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox100'
                              />
                            </div>
                          </td>
                          <td>
                            <span>1001</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic1.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Ricky Antony</a>
                                </h6>
                                <span>Web Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              ra@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+12 123 456 7890</span>
                          </td>
                          <td>
                            <span>Female</span>
                          </td>
                          <td>
                            <span>AZ</span>
                          </td>
                          <td>
                            <span className='badge badge-success light border-0'>
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox101'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox101'
                              />
                            </div>
                          </td>
                          <td>
                            <span>1018</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic2.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Micky Antony</a>
                                </h6>
                                <span>Web Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              abc@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+91 123 456 7890</span>
                          </td>
                          <td>
                            <span>Male</span>
                          </td>
                          <td>
                            <span>PA</span>
                          </td>
                          <td>
                            <span className='badge badge-danger light border-0'>
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox151'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox151'
                              />
                            </div>
                          </td>
                          <td>
                            <span>1018</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic2.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Ricky M</a>
                                </h6>
                                <span>Software Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              rm@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+55 123 456 7890</span>
                          </td>
                          <td>
                            <span>Male</span>
                          </td>
                          <td>
                            <span>WA</span>
                          </td>
                          <td>
                            <span className='badge badge-success light border-0'>
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox102'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox102'
                              />
                            </div>
                          </td>
                          <td>
                            <span>1018</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic3.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Ricky Antony</a>
                                </h6>
                                <span>Software Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              abc@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+91 123 456 7890</span>
                          </td>
                          <td>
                            <span>Female</span>
                          </td>
                          <td>
                            <span>AR</span>
                          </td>
                          <td>
                            <span className='badge badge-danger light border-0'>
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox103'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox103'
                              />
                            </div>
                          </td>
                          <td>
                            <span>152</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic1.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Ricky Moni</a>
                                </h6>
                                <span>Game Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              abc@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+91 123 456 7890</span>
                          </td>
                          <td>
                            <span>Female</span>
                          </td>
                          <td>
                            <span>NYC</span>
                          </td>
                          <td>
                            <span className='badge badge-primary light border-0'>
                              Inprogress
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='form-check custom-checkbox'>
                              <input
                                type='checkbox'
                                className='form-check-input'
                                id='customCheckBox104'
                                required=''
                              />
                              <label
                                className='form-check-label'
                                htmlFor='customCheckBox104'
                              />
                            </div>
                          </td>
                          <td>
                            <span>1018</span>
                          </td>
                          <td>
                            <div className='products'>
                              <img
                                src='assets/images/contacts/pic3.jpg'
                                className='avatar avatar-md'
                                alt=''
                              />
                              <div>
                                <h6>
                                  <a href='javascript:void(0)'>Ricky Antony</a>
                                </h6>
                                <span>Software Designer</span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a
                              href='javascript:void(0)'
                              className='text-primary'
                            >
                              abc@gmail.com
                            </a>
                          </td>
                          <td>
                            <span>+91 123 456 7890</span>
                          </td>
                          <td>
                            <span>Female</span>
                          </td>
                          <td>
                            <span>AR</span>
                          </td>
                          <td>
                            <span className='badge badge-danger light border-0'>
                              Pending
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-3 col-xxl-4 t-earn'>
              <div className='card'>
                <div className='card-header border-0 pb-0'>
                  <h4 className='heading mb-0'>Total Earning</h4>
                </div>
                <div className='card-body px-0 overflow-hidden custome-tooltip'>
                  <div className='total-earning'>
                    <h2>$6,743.00</h2>
                    <ul
                      className='nav nav-pills mb-3 earning-tab earning-chart'
                      id='pills-tab1'
                      role='tablist'
                    >
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link active'
                          data-series='day'
                          id='pills-day-tab1'
                          data-bs-toggle='pill'
                          data-bs-target='#pills-day1'
                          type='button'
                          role='tab'
                          aria-selected='true'
                        >
                          Day
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-week-tab1'
                          data-series='week'
                          data-bs-toggle='pill'
                          data-bs-target='#pills-week1'
                          type='button'
                          role='tab'
                          aria-selected='false'
                        >
                          Week
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-month-tab1'
                          data-series='month'
                          data-bs-toggle='pill'
                          data-bs-target='#pills-month1'
                          type='button'
                          role='tab'
                          aria-selected='false'
                        >
                          Month
                        </button>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <button
                          className='nav-link'
                          id='pills-year-tab1'
                          data-series='year'
                          data-bs-toggle='pill'
                          data-bs-target='#pills-year1'
                          type='button'
                          role='tab'
                          aria-selected='false'
                        >
                          Year
                        </button>
                      </li>
                    </ul>
                    <div id='earningChart' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='modal fade' id='exampleModal1' tabIndex={-1}>
        <div className='modal-dialog modal-dialog-center modal-xl'>
          <div className='modal-content'>
            <div className='modal-header border-0'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body pt-0'>
              <div className='text-center'>
                <h2>Choose the plans that’s perfect for your business.</h2>
                <p>
                  Donec ligula ligula, porta at urna non, faucibus congue urna.
                  Nullam nulla purus, facilisis vitae odio ac, tempus aliquet
                  dolor.
                </p>
              </div>
              <div className='d-flex justify-content-center mb-4'>
                <ul className='nav nav-pills' id='pills-tab2' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link active'
                      data-series='year'
                      id='pills-year-tab2'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-year'
                      type='button'
                      role='tab'
                      aria-selected='true'
                    >
                      Yearly
                    </button>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <button
                      className='nav-link'
                      data-series='month'
                      id='pills-month-tab2'
                      data-bs-toggle='pill'
                      data-bs-target='#pills-month'
                      type='button'
                      role='tab'
                      aria-selected='false'
                      tabIndex={-1}
                    >
                      Monthly
                    </button>
                  </li>
                </ul>
              </div>
              <div className='row'>
                <div className='tab-content' id='pills-tabContent1'>
                  <div
                    className='tab-pane fade show active'
                    id='pills-year'
                    role='tabpanel'
                    aria-labelledby='pills-year-tab'
                  >
                    <div className='row'>
                      <div className='col-xl-4 col-lg-6'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Standard
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$12</h4>
                                <span>/Per Year</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Premium
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$25</h4>
                                <span>/Per Year</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Basic customer support
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Featured ads
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Business
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$200</h4>
                                <span>/Per Year</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Basic customer support
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Featured ads
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Special ads badge
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Call to Action in Every Ads
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='pills-month'
                    role='tabpanel'
                    aria-labelledby='pills-month-tab'
                  >
                    <div className='row'>
                      <div className='col-xl-4 col-lg-6'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Standard
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$08</h4>
                                <span>/Per Month</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4 col-lg-6'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Premium
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$20</h4>
                                <span>/Per Month</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Basic customer support
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Featured ads
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-4'>
                        <div className='card upgrad-plan'>
                          <div className='card-body'>
                            <div className='text-center'>
                              <span className='badge badge-info light border-0'>
                                Business
                              </span>
                              <div className='d-flex align-items-baseline m-prise'>
                                <h4>$50</h4>
                                <span>/Per Month</span>
                              </div>
                              <ul className='prise-list'>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  User Dashboard
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Post 3 Ads per week
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Multiple images &amp; videos
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Basic customer support
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Featured ads
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Special ads badge
                                </li>
                                <li>
                                  <svg
                                    className='me-2'
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <rect
                                      width={24}
                                      height={24}
                                      rx={12}
                                      fill='#F0F5FF'
                                    />
                                    <path
                                      d='M16.8125 8.93774L10.6875 15.0625L7.625 12.0002'
                                      stroke='#0B63E5'
                                      strokeWidth={2}
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                  Call to Action in Every Ads
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className='card-footer text-center border-0'>
                            <a
                              href='javascript:void(0)'
                              className='btn btn-primary light btn-block'
                            >
                              Choose plans
                              <i className='fa-solid fa-arrow-right ms-2' />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger light'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='offcanvas offcanvas-end customeoff'
        tabIndex={-1}
        id='offcanvasExample'
      >
        <div className='offcanvas-header'>
          <h5 className='modal-title' id='#gridSystemModal'>
            Add Employee
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <div className='container-fluid'>
            <div>
              <label>Profile Picture</label>
              <div className='dz-default dlab-message upload-img mb-3'>
                <form action='#' className='dropzone'>
                  <svg
                    width={41}
                    height={40}
                    viewBox='0 0 41 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M27.1666 26.6667L20.4999 20L13.8333 26.6667'
                      stroke='#DADADA'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20.5 20V35'
                      stroke='#DADADA'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M34.4833 30.6501C36.1088 29.7638 37.393 28.3615 38.1331 26.6644C38.8731 24.9673 39.027 23.0721 38.5703 21.2779C38.1136 19.4836 37.0724 17.8926 35.6111 16.7558C34.1497 15.619 32.3514 15.0013 30.4999 15.0001H28.3999C27.8955 13.0488 26.9552 11.2373 25.6498 9.70171C24.3445 8.16614 22.708 6.94647 20.8634 6.1344C19.0189 5.32233 17.0142 4.93899 15.0001 5.01319C12.9861 5.0874 11.015 5.61722 9.23523 6.56283C7.45541 7.50844 5.91312 8.84523 4.7243 10.4727C3.53549 12.1002 2.73108 13.9759 2.37157 15.959C2.01205 17.9421 2.10678 19.9809 2.64862 21.9222C3.19047 23.8634 4.16534 25.6565 5.49994 27.1667'
                      stroke='#DADADA'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M27.1666 26.6667L20.4999 20L13.8333 26.6667'
                      stroke='#DADADA'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <div className='fallback'>
                    <input name='file' type='file' multiple='' />
                  </div>
                </form>
              </div>
            </div>
            <form>
              <div className='row'>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput1'
                    className='form-label'
                  >
                    Employee ID <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput2'
                    className='form-label'
                  >
                    Employee Name<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput2'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput3'
                    className='form-label'
                  >
                    Employee Email<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleFormControlInput3'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput4'
                    className='form-label'
                  >
                    Password<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleFormControlInput4'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Designation<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>Software Engineer</option>
                    <option value='css'>Civil Engineer</option>
                    <option value='javascript'>Web Doveloper</option>
                  </select>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Department<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>Software</option>
                    <option value='css'>Doit</option>
                    <option value='javascript'>Designing</option>
                  </select>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Country<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>Ind</option>
                    <option value='css'>USA</option>
                    <option value='javascript'>UK</option>
                  </select>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput88'
                    className='form-label'
                  >
                    Mobile<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='exampleFormControlInput88'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Gender<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>Male</option>
                    <option value='css'>Female</option>
                    <option value='javascript'>Other</option>
                  </select>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Joining Date<span className='text-danger'>*</span>
                  </label>
                  <div className='input-hasicon mb-sm-0 mb-3'>
                    <input
                      name='datepicker'
                      className='form-control bt-datepicker'
                    />
                    <div className='icon'>
                      <i className='far fa-calendar' />
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Date of Birth<span className='text-danger'>*</span>
                  </label>
                  <div className='input-hasicon mb-sm-0 mb-3'>
                    <input
                      name='datepicker'
                      className='form-control bt-datepicker'
                    />
                    <div className='icon'>
                      <i className='far fa-calendar' />
                    </div>
                  </div>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label
                    htmlFor='exampleFormControlInput10'
                    className='form-label'
                  >
                    Reporting To<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleFormControlInput10'
                    placeholder=''
                  />
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    Language Select<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>English</option>
                    <option value='css'>Hindi</option>
                    <option value='javascript'>Canada</option>
                  </select>
                </div>
                <div className='col-xl-6 mb-3'>
                  <label className='form-label'>
                    User Role<span className='text-danger'>*</span>
                  </label>
                  <select className='default-select form-control'>
                    <option data-display='Select'>Please select</option>
                    <option value='html'>Parmanent</option>
                    <option value='css'>Parttime</option>
                    <option value='javascript'>Per Hours</option>
                  </select>
                </div>
                <div className='col-xl-12 mb-3'>
                  <label className='form-label'>
                    Address<span className='text-danger'>*</span>
                  </label>
                  <textarea
                    rows={2}
                    className='form-control'
                    defaultValue={''}
                  />
                </div>
                <div className='col-xl-12 mb-3'>
                  <label className='form-label'>
                    About<span className='text-danger'>*</span>
                  </label>
                  <textarea
                    rows={2}
                    className='form-control'
                    defaultValue={''}
                  />
                </div>
              </div>
              <div>
                <button className='btn btn-primary me-1'>Submit</button>
                <button className='btn btn-danger light ms-1'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id='exampleModal2'
        tabIndex={-1}
        aria-labelledby='exampleModalLabel2'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-center'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel2'>
                Invite Employee
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              />
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-xl-12'>
                  <label className='form-label'>
                    Email ID<span className='text-danger'>*</span>
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='hello@gmail.com'
                  />
                  <label className='form-label mt-3'>
                    Employment date<span className='text-danger'>*</span>
                  </label>
                  <input className='form-control' type='date' />
                  <div className='row'>
                    <div className='col-xl-6'>
                      <label className='form-label mt-3'>
                        First Name<span className='text-danger'>*</span>
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Name'
                        />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <label className='form-label mt-3'>
                        Last Name<span className='text-danger'>*</span>
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Surname'
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 invite'>
                    <label className='form-label'>
                      Send invitation email
                      <span className='text-danger'>*</span>
                    </label>
                    <input
                      type='email'
                      className='form-control '
                      placeholder='+ invite'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger light'
                data-bs-dismiss='modal'
              >
                Close
              </button>
              <button type='button' className='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
