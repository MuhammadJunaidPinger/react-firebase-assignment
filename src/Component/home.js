import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './Style.css'
class Home extends React.Component {
    company() {
        this.props.history.push('/company')
    }
    render() {
        const {user} = this.props
        return (
            <div className="home-page">
                <div className="rainbow-text" style={{textAlign: "right", paddingRight: 50}}>
                You are logged in:<br/>
                {user.displayName}
                </div>
                <br/><br/>
                <h1 className="rainbow-text">Home Screen</h1>
                <br />
                <div>
                    <p>{'Are you finding/waiting for tokens?'}</p>
                <br />
                {"Are you a company?"}<br />
                <button className="btn btn-info" onClick={this.company.bind(this)}>Click Here</button><br/><br/>
                {"Non company?"}<br />
                <button className="btn btn-info">Click Here</button>
                <br /><br />
                </div>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        console.log('state from home componenet-->')
        console.log(state)
    return {
        user: state.user
    }
    }   
export default connect(mapStateToProps)(withRouter(Home))
