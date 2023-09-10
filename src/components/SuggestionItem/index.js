// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, clickOnArrow} = props
  const {suggestion} = suggestionDetails

  const clickOnArrowButton = () => {
    clickOnArrow(suggestion)
  }
  return (
    <li className="suggestion-list-container">
      <p className="suggestion-description">{suggestion}</p>
      <button
        type="button"
        onClick={clickOnArrowButton}
        className="arrow-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
