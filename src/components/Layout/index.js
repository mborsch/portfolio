import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags desktop">&lt;body&gt;</span>

        <span className="tags bottom-tags desktop">
          &lt;body&gt;
          <br />
          <span className="bottom-tag-html desktop">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout
