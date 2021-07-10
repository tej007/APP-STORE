// Write your code here
const AppItem = props => {
  const {appItemDetails} = props
  const {appName, imageUrl} = appItemDetails
  return (
    <li>
      <img src={imageUrl} alt="app-logo" className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
