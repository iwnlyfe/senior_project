import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuBarAdmin() {
  return (
      <nav className='wrapper'>
        <div className='wrapper sideber'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link to='/admin/index'>แดชบอร์ด</Link>
              </li>

              <li className='nav-item'>
                <Link to='/admin/manage-admin'>จัดการผู้ใช้งาน</Link>
              </li>
            </ul>
          </div>
      </nav>
  )
}
