import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="w-75 m-auto">
      <Outlet />
    </div>
  )
}

export default Layout
