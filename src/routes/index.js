import { Route, Routes } from "react-router-dom"
import { PUBLIC_ROUTES } from "../utils"

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        {
          PUBLIC_ROUTES.map(item => (
            <Route 
              key={item.id}
              path={item.path}
              element={item.page}
            />
          ))
        }
      </Routes>
    </>
  )
}