import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, searchBy, clearFilter} = props

  const onSearch = event => {
    if (event.key === 'Enter') {
      searchBy(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          onKeyDown={onSearch}
          onChange={onSearch}
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="filter-headings">Category</h1>
        {categoryOptions.map(optionDetails => {
          const {categoryBy} = props
          const onChangeCategory = () => categoryBy(optionDetails.categoryId)
          return (
            <p
              key={optionDetails.categoryId}
              onClick={onChangeCategory}
              className="categories"
            >
              {optionDetails.name}
            </p>
          )
        })}
      </div>
      <div className="rating-box">
        <h1 className="filter-headings">Rating</h1>
        {ratingsList.map(ratingStar => {
          const {ratingBy} = props
          const onChangeRating = () => ratingBy(ratingStar.ratingId)
          return (
            <div className="ratings">
              <img
                src={ratingStar.imageUrl}
                alt={`rating ${ratingStar.ratingId}`}
                key={ratingStar.ratingId}
                onClick={onChangeRating}
                className="rating-img"
              />
              <p className="rating-up">&up</p>
            </div>
          )
        })}
      </div>
      <button type="button" onClick={clearFilter} className="clear-filter-btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
