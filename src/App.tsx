import { ThemeProvider } from "styled-components"

import { DefaultLayout } from "@layouts/DefaultLayout"
import { defaultTheme } from "@styles/themes/default"
import { GlobalStyle } from "@styles/themes/GlobalStyle"


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DefaultLayout />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
