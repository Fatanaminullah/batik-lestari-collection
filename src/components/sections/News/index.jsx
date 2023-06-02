import PropTypes from "prop-types"
import { List } from "./List"
import { FullscreenList } from "./FullscreenList"

export function SectionNews({ type, ...args }) {
  const render = () => {
    switch (type) {
      case "list":
        return <List {...args} />
      case "fullscreen":
        return <>fullscreen</>

      case "fullscreen-list":
        return <FullscreenList {...args} />

      case "thumbnail":
        return <>thumbnail</>

      default:
        return <>list</>
    }
  }

  return (
    <>
      <div className="_sc-news">{render()}</div>
    </>
  )
}

SectionNews.defaultProps = {}

SectionNews.propTypes = {
  type: PropTypes.oneOf(["list", "fullscreen", "fullscreen-list", "thumbnail"]),
}
