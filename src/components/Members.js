import React, {Component} from 'react'
import './MembersStyles.css'

export class Members extends Component {
    render() {
        return (
            <div className="members-img">
                <div className='headimg'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Members
