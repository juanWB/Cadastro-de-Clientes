import { ClientList } from "./page/ClientList"
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
export const App = () => {

  return (
    <ThemeProvider theme={theme}>  
      <ClientList/>
    </ThemeProvider>
  )
}


