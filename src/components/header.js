import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav id="header">
      <div className="nav-container container">
        <div className="link-container">
          <a href="#" className="nav-link toggleColour">
            {siteTitle}
          </a>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
