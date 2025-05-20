import { ClientList } from "./page/ClientList"
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

export const App = () => {

  return (
    <ThemeProvider theme={theme}> 
       <ClientList/> 
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ThemeProvider>
  )
}


