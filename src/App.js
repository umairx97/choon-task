import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Table from './components/Table'
import { getSheetData } from './services/network'

function App () {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    async function getData () {
      if (tableData) return null
      const data = await getSheetData()
      setTableData(data)
    }

    getData()
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header data={tableData} />
        <Routes>
          <Route
            path='/table/:chapterId'
            element={<Table data={tableData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
