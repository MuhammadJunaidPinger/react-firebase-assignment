import React, { Component } from 'react';
import './Style.css'
import { withRouter } from 'react-router-dom'
import {faceBookLogin} from '../Config/Api'
import { updateUser } from '../Store/Actions/userAction'
import { connect, } from 'react-redux';

 class Login extends Component{
    state = {
        user: {},
        hide: false
    }

    async loginWithFaceBook(){
        const user = await faceBookLogin();
        this.props.updateTheUser(user)
        // console.log("user--->")
        // console.log(user);
        this.setState({
            hide: true,
            user
        })
    }
    goTOHomeScreen(){
        this.props.history.push('/home')        

    }
    render() {
        const {user,hide} = this.state
        return(
            <div className='login-page'>
                <h3 className="rainbow-text">Login page</h3>
                <br/>
                <h1 className="rainbow-text">Welcome to ABC Clinic</h1>
                <br/><br/><br/>
                <div>
                {!hide ?<button className="btn btn-info" onClick={this.loginWithFaceBook.bind(this)}>FaceBook login</button>
                :<button className="btn btn-info" onClick={this.goTOHomeScreen.bind(this)}>GotoHomeScreen</button>}                
                </div>
                <div>
                <p>User logged in:<br/> {user.displayName}</p>
                <br/>
                <br/>
                </div>
            </div>
        )
    }
}
    const mapStateToProps = (state) => {
        console.log('state from login componenet-->')
            console.log(state)
        return{
            user: state.user
        }
    }

    const mapDispatchToProps = (dispatch) => {
            return {
                updateTheUser: (user) => dispatch(updateUser(user))
            }    
    }

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login))
