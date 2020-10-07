import React from 'react'
import Title from '../Globals/Title'

export default function Home() {
    return (
        <div>
            <Title title="Contact us"/>

            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto">
                    <form action="https://formspree.io/kodesektor@gmail.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="John Smith"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" className="form-control" name="email" id="email" placeholder="email@email.com"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" name="description" id="description" rows="5" placeholder="Your description here..."></textarea>
                        </div>

                        <button type="submit" className="btn-btn-yellow btn-block text-capitalize mt-4 py-2 mb-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
