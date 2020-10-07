import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'

const getCategories = items => {
    let tempItems = items.map(items => {
        return items.node.category;
    })
    let tempCategories = new Set(tempItems);    // Unique values only
    let categories = Array.from(tempCategories);    
    categories = ['all', ...categories];    // [all, juice, coffee, tea]
    return categories;
}

export default class Menu extends Component {

    state = {
        items : this.props.items.edges,
        coffeeItems : this.props.items.edges,
        categories : getCategories(this.props.items.edges)
    }

    handleItems = (category) => {
        let tempItems = [...this.state.items];

        if (category==='all') {
            this.setState(()=> {
                return {coffeeItems : tempItems};
            })
        } else {
            let items = tempItems.filter(({node}) => node.category===category);
            this.setState(()=> {
                return {coffeeItems : items}
            })
        }
    }

    render() {

        if (this.state.items.length > 0) {
            return (
                <section className="menu py-5">

                    <div className="container">

                        <Title title="Best of our menu"/>

                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                {this.state.categories.map((category, index) => {
                                    return (
                                        <button type="button" key={index} className="btn btn-yellow text-capitalize m-3"
                                            onClick={()=> {this.handleItems(category)}}>
                                            {category}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="row">
                            {this.state.coffeeItems.map(({node}) => {
                                return (
                                    <div key={node.id} className="col-11 col-md-6 my-3 d-flex">
                                        <div>
                                            <Img fixed={node.image ? node.image.fixed : ''}/>
                                        </div>
                                        
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">
                                                    <small>{node.title}</small>
                                                </h6>
                                                <h6 className="mb-0 text-yellow">
                                                    <small>${node.price}</small>
                                                </h6>
                                                <p className="text-muted">
                                                    <small>{node.description ? node.description.description.description : ''}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Best of our menu"/>

                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                <h1>There are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
