import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

  
const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{backgroundImage:'none'}}>
      {props.children}
    </Link>
  </li>
)

const Header = ({ }) => (
  <header style={{ background: 'white', marginBottom: `1.45rem`,}}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0, display: 'inline', bold: false}}>
      >_ im.chrisp
      </h3>
      <ul 
        style={{ listStyle: 'none', float: 'right'}}>
        <ListLink to="/">home</ListLink>
        <ListLink to="/about/">about</ListLink>
        <ListLink to="/blog/">blog</ListLink>
        <ListLink to="/projects/">projects</ListLink>
        <ListLink to="/contact/">contact</ListLink>
      </ul>
    </div>
    <br/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
