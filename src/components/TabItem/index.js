// Write your code here
const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTabSwitch = () => {
    onChangeTab(tabId)
  }

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li>
      <button className={tabClassName} type="button" onClick={onTabSwitch}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
