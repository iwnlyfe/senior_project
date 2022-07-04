import React from 'react'
export default function HomeUser() {

  return (
    <div>
        <h1>Home User</h1>
        {/* {JSON.stringify(products)} */}
        <div className='col-2'>
          <ui>
            <li className="list">
              <a href='productview'>
                <span className='icon'>

                </span>
                <span className='list'>Peoduct</span>
              </a>
            </li>
            <li className="list">
              <a href='#'>
                <span>

                </span>
                <span className='list'>productDetail</span>
              </a>
            </li>
            <li className="list">
              <a href='#'>
                <span>

                </span>
                <span className='list'>disbursement</span>
              </a>
            </li>
            <li className="list">
              <a href='#'>
                <span>

                </span>
                <span className='list'>shelf</span>
              </a>
            </li>
            <li className="list">
              <a href='#'>
                <span>

                </span>
                <span className='list'>zone</span>
              </a>
            </li>
          </ui>
        </div>
    </div>
  )
}
