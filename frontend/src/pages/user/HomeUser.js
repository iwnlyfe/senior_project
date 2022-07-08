import React from 'react'
export default function HomeUser() {

  return (
    <div class='container-fluid'>
      <div className='row'>
        <div className=' col-2'>        
        <h1>Home User</h1>
          <ui>
            <li className="list-unstyled">
              <a href='productview'>
                <span className='icon'>

                </span>
                <span className='list-item'>Peoduct</span>
              </a>
            </li>
            <li className="list-unstyled">
              <a href='#'>
                <span>

                </span>
                <span className='list'>productDetail</span>
              </a>
            </li>
            <li className="list-unstyled">
              <a href='#'>
                <span>

                </span>
                <span className='list'>disbursement</span>
              </a>
            </li>
            <li className="list-unstyled">
              <a href='#'>
                <span>
                </span>
                <span className='list-item'>shelf</span>
              </a>
            </li>
            <li className="list-unstyled">
              <a href='#'>
                <span>
                </span>
                <span className='list'>zone</span>
              </a>
            </li>
          </ui>
        </div>
        <div className='col-10 bg-info'>
          <h1>Home</h1>
        </div>      
        </div>
    </div>
  )
}
