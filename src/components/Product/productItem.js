import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item, index, onDismiss, access, match }) => {
  return (
    <tr>
      <td>
        <Link to={`${match.url}/${index}`}>{access && item}</Link>
      </td>
      <td>
        <button className="button-inline" type="button" onClick={onDismiss}>
          {access ? "Dismiss" : "Show"}
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
