import React from "react"
import { withStyles } from "material-ui"

const styles = theme => ({
  delete: {
    textDecoration: "line-through",
  },
});

class ProductItem extends React.Component {
  render() {
    const {
      classes,
      productName,
      status,
      toggleStatus,
    } = this.props;
    return (
      <li className={classes.listItem}>
        <span className={status && classes.delete}>{productName}</span>
        <button onClick={toggleStatus}>
          {status ? "Restore" : "delete"}
        </button>
      </li>
    )
  }
}

export default withStyles(styles)(ProductItem);
