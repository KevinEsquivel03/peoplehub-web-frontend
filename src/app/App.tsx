import { AuthProvider } from './providers/AuthProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;