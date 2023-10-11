import { useState } from "react";
import routes from "./routes/ManagRoutes";
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import { checkauth } from "./utility/authSession";

function App() {
  const [count, setCount] = useState(0);

  let naviget = useNavigate();

  return (
    <>
      <Routes>
        {routes.map(({ Component: Component, path, authRequired }) => {
          if (authRequired) {
            return <Route key={path} path={path} element={<Component />} />;
          } else {
            return (
              <Route
                key={path}
                path={path}
                element={
                  !checkauth() ? (
                    <>
                      <Navigate to={"/"} />
                      <Component />
                    </>
                  ) : (
                    <>
                      <Navigate to={"/access"} />
                      <Component />
                    </>
                  )
                }
              />
            );
          }
        })}
      </Routes>
    </>
  );
}

export default App;
