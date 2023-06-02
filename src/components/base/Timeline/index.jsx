// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Timeline
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"
import { Button } from "../Button"

export function Timeline({ className, theme, data }) {
  const timelineTheme = () => {
    if (theme === "dark") {
      return "timeline-dark"
    }

    return "timeline-light"
  }

  return (
    <ul className={`timeline ${timelineTheme()} ${className}`}>
      {data.map((item, i) => (
        <li key={i} className="timeline-item">
          <div className="timeline-line" />
          <div className="timeline-content">
            <h4 className="h5">{item.title}</h4>
            <p>{item.text}</p>
            {item.button && (
              <Button variant="link" to={item.button.link}>
                {item.button.text}
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

Timeline.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(["", "light", "dark"]),
  data: PropTypes.any,
}

Timeline.defaultProps = {
  className: "",
  theme: "light",
  data: [
    {
      title: "Title 1",
      text: "Description of title 1",
      button: {
        text: "Button",
        link: "/",
      },
    },
    {
      title: "Title 2",
      text: "Description of title 2",
      button: {
        text: "Button",
        link: "/",
      },
    },
    {
      title: "Title 3",
      text: "Description of title 3",
    },
    {
      title: "Title 4",
      text: "Description of title 4",
    },
  ],
}
