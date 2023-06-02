// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Link
// ========================================================================================================================================
import NextLink from "next/link"
import PropTypes from "prop-types"

export function Link({ href, target, children, className, ...props }) {
  if (href && href.startsWith("/")) {
    return (
      <NextLink href={href} className={className} {...props}>
        {children}
      </NextLink>
    )
  }

  if (href && href.includes(process.env.SITE_URL)) {
    const url = href.split(process.env.SITE_URL)

    return (
      <NextLink href={url[0] ?? "/"} className={className} {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <a
      {...props}
      className={className}
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
}

Link.defaultProps = {
  href: "/",
}
