import React from "react"
import { withStyles } from "material-ui"

import ProductItem from "./products_list_item"

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "space-around",
        paddingTop: 25,
    }
})

class ProductList extends React.Component {
    state = {
        products: [
            { name: "Apple", deleted: false },
            { name: "Peanut", deleted: false },
            { name: "Tomato", deleted: false },
            { name: "Cucumber", deleted: false },
            { name: "Banana", deleted: false },
            { name: "Lemon", deleted: false },
        ],
        history: [],
    }

    toggleStatus = index => {
        let products = this.state.products
        let historyObj = {
            name: products[index].name,
            status: products[index].deleted,
            time: `${new Date().toLocaleTimeString()}`,
            date: `${new Date().toLocaleDateString()}`,
        }
        let newHistory = this.state.history.concat(historyObj)
        if (products[index].deleted) {
            products[index].deleted = false;
            this.setState({ products, history: newHistory })
        } else {
            products[index].deleted = true;
            this.setState({ products, history: newHistory })
        }
    }

    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <ul>
                    {this.state.products.map((product, index) => (
                        <ProductItem
                            key={index}
                            toggleStatus={this.toggleStatus.bind(this, index)}
                            productName={product.name}
                            status={product.deleted}
                        />
                    ))}
                </ul>
                <div>
                    <h1>History</h1>
                    <ul>
                        {this.state.history.map(historyItem => (
                            <li>{`${historyItem.name} ${historyItem.status ? "restore" : "delete"} at ${historyItem.time} on ${historyItem.date}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ProductList)
