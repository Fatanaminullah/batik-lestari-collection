// ░█▀▀▄ ░█▀▀▀█ 　 ░█▄─░█ ░█▀▀▀█ ▀▀█▀▀ 　 ░█▀▀▀ ░█▀▀▄ ▀█▀ ▀▀█▀▀
// ░█─░█ ░█──░█ 　 ░█░█░█ ░█──░█ ─░█── 　 ░█▀▀▀ ░█─░█ ░█─ ─░█──
// ░█▄▄▀ ░█▄▄▄█ 　 ░█──▀█ ░█▄▄▄█ ─░█── 　 ░█▄▄▄ ░█▄▄▀ ▄█▄ ─░█──
// The component is made to be used flexibly. But if you REALLY MUST update edit the component,
// please add `-custom` on the change log file (e.g. `1.0.0-custom.md`) and log the changes

// ========================================================================================================================================
// Tabs
// ========================================================================================================================================

import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"

// ==========================================================================
// Nav Tabs
// ==========================================================================

export function NavTabs({
  variant,
  data,
  scrollable,
  scrollableFade,
  className,
  wrapperClassName,
  setActiveTab,
  activeTab,
  theme,
  notifStatus,
}) {
  const navRef = useRef(null)

  const handleTabClick = (target) => {
    setActiveTab(target)
  }

  return (
    <div
      className={`nav-${variant}-wrapper 
        ${scrollable ? "nav-scrollable-wrapper" : ""}
        ${scrollableFade ? "scrollable-fade" : ""}
        ${wrapperClassName}  `}
    >
      <div className={`${scrollable ? "nav-scrollable" : ""}`} ref={navRef}>
        <ul
          className={`nav nav-${variant} nav-theme-${theme} ${className}`}
          role="tablist"
        >
          {data.map((item, i) => (
            <li className="nav-item" key={item.target}>
              <div
                className={`nav-link ${
                  item.target === activeTab ? "active" : ""
                }`}
                data-tab-target={`#${item.target}`}
                role="tab"
                onClick={() => handleTabClick(item.target)}
                tabIndex={i}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

NavTabs.propTypes = {
  variant: PropTypes.oneOf(["underline", "capsule"]),
  theme: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
  ]),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    })
  ).isRequired,
  scrollable: PropTypes.bool,
  scrollableFade: PropTypes.bool,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  setActiveTab: PropTypes.func,
  activeTab: PropTypes.string,
}

NavTabs.defaultProps = {
  variant: "underline",
  theme: "primary",
  scrollable: true,
  scrollableFade: false,
  className: "",
  wrapperClassName: "",
  setActiveTab: null,
  activeTab: "",
}

// ==========================================================================
// Tab Content
// ==========================================================================

export function TabContent({ children, className, id }) {
  return (
    <div id={id} className={`tab-content ${className}`}>
      {children}
    </div>
  )
}
TabContent.propTypes = {
  className: PropTypes.string, // Set tab content optional classes
  children: PropTypes.any,
}
TabContent.defaultProps = {
  className: "",
}

// Tab Pane

export function TabPane({ id, children, className, identifier, activeTab }) {
  const isActive = activeTab === id

  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""} ${className} ${
        identifier || ""
      }`}
      id={id}
      role="tabpanel"
      aria-labelledby={id}
      data-tab-content
    >
      {children}
    </div>
  )
}

TabPane.propTypes = {
  id: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  className: PropTypes.string, // Set tab pane optional classes
  children: PropTypes.any,
  identifier: PropTypes.string,
}
TabPane.defaultProps = {
  className: "",
}

// █░█ █▀█ █░█░█   ▀█▀ █▀█   █░█ █▀ █▀▀
// █▀█ █▄█ ▀▄▀▄▀   ░█░ █▄█   █▄█ ▄█ ██▄

// <NavTabs
//  data={[
//    { name: "Tab 1", target: "tab-1" },
//    { name: "Tab 2", target: "tab-2" },
//  ]}
// />
// <TabContent>
//  <TabPane id="tab-1" className="active">
//    Content 1
//  </TabPane>
//  <TabPane id="tab-1">
//    Content 2
//  </TabPane>
// </TabContent>
