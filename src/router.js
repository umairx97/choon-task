import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Table from './components/Table'
import { getSheetData } from './services/network'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    id: 'root',
    errorElement: <ErrorPage />,
    loader: getSheetData,
    children: [{
      path: 'chapter/:chapterId',
      element: <Table />
    }]
  }
])
