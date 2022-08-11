import React from 'react'

import { BrowserRouter } from 'react-router-dom'


import Sidebar from '../sidebar/Sidebar'
import AppRoutes from '../AppRoutes'

const Layout = (props) => {
  return (
    <BrowserRouter>
      <div className="layout">
		<Sidebar {...props} />
        <div className="layout__content">
          <div className="layout__content-main">
			<AppRoutes/>
		  </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout