import './index.css'

const ImageItem = props => {
  const {eachImgItem, onClickThumbnailImg} = props
  const clickThumbnail = () => {
    onClickThumbnailImg(eachImgItem.id)
  }
  return (
    <li>
      <button type="button" className="thumbnail-btn" onClick={clickThumbnail}>
        <img
          src={eachImgItem.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-size"
        />
      </button>
    </li>
  )
}
export default ImageItem
