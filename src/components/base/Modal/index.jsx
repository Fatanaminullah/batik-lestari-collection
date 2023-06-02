// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Modal
// ========================================================================================================================================

import React from "react"
import PropTypes from "prop-types"
import ReactModal from "react-modal"
import { BottomSheet } from "react-spring-bottom-sheet"
import { useWindowSize } from "src/hooks/hooks"
import { Image } from "../Image"

export function Modal({
  id,
  isShowing,
  hide,
  variant,
  img,
  imgThumbnail,
  imgClassName,
  imgThumbnailClassName,
  imgAlt,
  imgThumbnailAlt,
  imgType,
  title,
  titleClassName,
  text,
  textClassName,
  wrapperClassName,
  bodyClassName,
  contentClassName,
  className,
  size,
  drawerHeight,
  children,
}) {
  const { innerWidth } = useWindowSize()
  if (variant === "drawer" && innerWidth < 576) {
    return (
      <BottomSheet
        open={isShowing === id}
        onDismiss={hide}
        snapPoints={({ maxHeight }) => (drawerHeight / 100) * maxHeight}
        className="modal-drawer"
      >
        <div className={`modal-wrapper ${wrapperClassName}`}>
          <div className={`modal-body ${bodyClassName}`}>
            {imgThumbnail && (
              <Image
                src={imgThumbnail}
                className={`modal-img-thumbnail img-fluid  ${imgThumbnailClassName}`}
                alt={imgThumbnailAlt}
              />
            )}
            <div
              className={`modal-content ${
                imgType === "overflow" ? "modal-content-overflow" : ""
              } ${contentClassName}`}
            >
              {img && (
                <Image
                  src={img}
                  className={`modal-img img-fluid fadeInUp d1 ${imgClassName}`}
                  alt={imgAlt}
                />
              )}
              {title && (
                <h3 className={`modal-title ${titleClassName} fadeInUp d1`}>
                  {title}
                </h3>
              )}
              {text && (
                <p className={`modal-text ${textClassName} fadeInUp d2`}>
                  {text}
                </p>
              )}
              {children}
            </div>
          </div>
        </div>
      </BottomSheet>
    )
  }
  return (
    <ReactModal
      closeTimeoutMS={500}
      isOpen={isShowing === id && true}
      contentLabel="Modal"
      onRequestClose={hide}
      className={`modal modal-${size} modal-${variant} ${className}`}
      ariaHideApp={false}
    >
      <div className={`modal-wrapper ${wrapperClassName}`}>
        <div onClick={hide} className="close" role="button" tabIndex="0">
          <i className="icl ic-times" />
        </div>
        <div className={`modal-body ${bodyClassName}`}>
          {imgThumbnail && (
            <Image
              src={imgThumbnail}
              className={`modal-img-thumbnail img-fluid  ${imgThumbnailClassName}`}
              alt={imgThumbnailAlt}
            />
          )}
          <div
            className={`modal-content ${
              imgType === "overflow" ? "modal-content-overflow" : ""
            } ${contentClassName}`}
          >
            {img && (
              <Image
                src={img}
                className={`modal-img img-fluid fadeInUp d1 ${imgClassName}`}
                alt={imgAlt}
              />
            )}
            {title && (
              <h3 className={`modal-title ${titleClassName} fadeInUp d1`}>
                {title}
              </h3>
            )}
            {text && (
              <p className={`modal-text ${textClassName} fadeInUp d2`}>
                {text}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </ReactModal>
  )
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  isShowing: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["basic", "drawer"]),
  img: PropTypes.any,
  imgClassName: PropTypes.string,
  imgAlt: PropTypes.string,
  imgThumbnail: PropTypes.any,
  imgThumbnailClassName: PropTypes.string,
  imgThumbnailAlt: PropTypes.string,
  imgType: PropTypes.oneOf(["basic", "overflow"]),
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  text: PropTypes.string,
  textClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  drawerHeight: PropTypes.number,
  children: PropTypes.any,
}

Modal.defaultProps = {
  variant: "basic",
  imgClassName: "",
  imgAlt: "Modal Image",
  titleClassName: "",
  textClassName: "",
  wrapperClassName: "",
  bodyClassName: "",
  contentClassName: "",
  className: "",
  size: "md",
  imgType: "basic",
  drawerHeight: 75,
}
