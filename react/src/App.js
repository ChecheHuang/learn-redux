import './app.scss'
import Center from '../src/components/Center'
import LeftBar from '../src/components/LeftBar'
import TopBar from '../src/components/TopBar'
function App() {
  return (
    <>
      <TopBar />
      <div style={{ display: 'flex' }}>
        <LeftBar />
        <Center />
      </div>
    </>
  )
}
export default App
