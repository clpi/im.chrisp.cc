class ListLink extends React.Component {
    render() {
      var isActive = this.context.router.isActive(this.props.to, true);
      var className = isActive ? 'active' : '';
      return(
        <li className={className} style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to={this.props.to} style={{backgroundImage:'none'}}>{this.props.children}</Link>
        </li>
      )
    }
  }
  ListLink.contextTypes = {
      router: React.PropTypes.object
  };
  export default ListLink;

  const 