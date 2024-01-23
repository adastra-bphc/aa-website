import React, {Component} from 'react'
import './DetailsStyles.css'

export class Details extends Component {
    render() {
        return (
            <div className="details-img">
                <div className='headimg'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Details