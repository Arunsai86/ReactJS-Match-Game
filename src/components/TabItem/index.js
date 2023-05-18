import './index.css'

const TabItem = props => {
  const {eachTab, selectTabItem} = props
  const clickTabItem = () => {
    selectTabItem(eachTab.tabId)
  }
  return (
    <li>
      <button className="tab-btn" type="button" onClick={clickTabItem}>
        <p>{eachTab.displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
