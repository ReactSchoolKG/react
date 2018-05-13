import React from "react";
import { withStyles } from "material-ui";
import { Link } from "react-router-dom";

const styles = theme => ({
  delete: {
    textDecoration: "line-through"
  }
});

class ProductItem extends React.Component {
  render() {
    const {
      classes,
      productName,
      status,
      toggleStatus,
      match,
      index
    } = this.props;
    return (
      <li className={classes.listItem}>
        <Link to={`${match.url}/${index}`}>
          <span className={status && classes.delete}>{productName}</span>
        </Link>
        <button onClick={toggleStatus}>{status ? "Restore" : "delete"}</button>
      </li>
    );
  }
}

export default withStyles(styles)(ProductItem);
