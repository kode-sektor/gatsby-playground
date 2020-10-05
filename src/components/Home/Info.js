import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">

                <Title title="Our Story"/>

                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos eligendi praesentium ratione labore quia quasi eius vel nulla rem sunt blanditiis cumque aspernatur dolorem beatae pariatur enim, recusandae dolorum et asperiores, repellat minus aperiam sit? Voluptatibus provident ex quam consectetur sed tempore ratione quis. Pariatur veniam fugit corporis placeat hic!
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">About Page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
