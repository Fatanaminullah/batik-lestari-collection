// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Skeleton
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"

export function Skeleton({
  className,
  groupClassName,
  height,
  width,
  ratio,
  rows,
  rowsCount,
}) {
  return (
    <>
      {rows ? (
        <div className={`skeleton-group ${groupClassName}`}>
          {Array(rowsCount)
            .fill()
            .map((i) => (
              <SkeletonItem
                key={i}
                className={className}
                ratio={ratio}
                height={height}
                width={width}
              />
            ))}
        </div>
      ) : (
        <SkeletonItem
          className={className}
          ratio={ratio}
          height={height}
          width={width}
        />
      )}
    </>
  )
}

Skeleton.propTypes = {
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  rows: PropTypes.bool,
  rowsCount: PropTypes.bool,
}

Skeleton.defaultProps = {
  className: "",
  groupClassName: "",
  rowsCount: 4,
}

export function SkeletonItem({ className, ratio, height, width }) {
  return (
    <div
      className="skeleton-item"
      style={{
        height: `${height}`,
        width: `${width}`,
      }}
    >
      <div className="skeleton-loader" />
      <div className={`skeleton ${className} ${ratio && `ratio ${ratio}`}`}>
        -
      </div>
    </div>
  )
}

SkeletonItem.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  ratio: PropTypes.string,
}

SkeletonItem.defaultProps = {
  className: "",
  height: null,
  width: null,
  ratio: "",
}

// export const SkeletonWrapper = ({ className, children }) => {
//   return (
//     <div className={`skeleton-wrapper ${className}`}>
//       {children}
//       <div className="skeleton-loader" />
//     </div>
//   )
// }

// SkeletonWrapper.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.any,
// }

// SkeletonWrapper.defaultProps = {
//   className: "",
// }
