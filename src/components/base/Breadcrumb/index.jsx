import PropTypes from "prop-types"
import { useRouter } from "next/router"
import { Link } from "../Link"

export function Breadcrumb({ id, path, theme, className }) {
  const router = useRouter()
  const isObjectPath = typeof path === "object"
  const defaultPath = path ?? router.pathname

  return (
    <>
      <ol id={id} className={`breadcrumb ${theme} ${className}`}>
        <li className="breadcrumb-item" key="home-path">
          <Link href="/">Home</Link>
        </li>
        {isObjectPath ? (
          <>
            {path.map((item, i) => (
              <li key={i} className="breadcrumb-item">
                {i + 1 === path.length ? (
                  <span>{item.title}</span>
                ) : (
                  <Link href={`${item.url}`}>{item.title}</Link>
                )}
              </li>
            ))}
          </>
        ) : (
          <>
            {defaultPath
              .split("/")
              .slice(1)
              .map((item, i) => (
                <li key={i} className="breadcrumb-item">
                  {i + 1 === defaultPath.split().length ? (
                    <span>{item}</span>
                  ) : (
                    <Link href={`${item}`}>{item}</Link>
                  )}
                </li>
              ))}
          </>
        )}
      </ol>
    </>
  )
}

Breadcrumb.propTypes = {
  id: PropTypes.string,
  path: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  theme: PropTypes.oneOf(["breadcrumb-light", "breadcrumb-dark"]),
}

Breadcrumb.defaultProps = {
  className: "",
  theme: "breadcrumb-light",
}

// const stringPath = "/works/about"
// const customPath = [{ title: "About", url: '/about' }]
// const default = useRouter().pathname
