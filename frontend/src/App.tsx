import TodoApp from './components/TodoApp'
import { TodoProvider } from './providers/TodoProvider'
import GlobalStyle from './components/styles/global';

function App() {

  return  (
    <TodoProvider>
      <>
      <TodoApp />
      <GlobalStyle />
      </>
    </TodoProvider>
  )
}

export default App
