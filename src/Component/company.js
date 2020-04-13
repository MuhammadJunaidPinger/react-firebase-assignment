import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// import { Fab } from 'react-floating-action-button' 
class Company extends React.Component {
    state = {
        data : []
    }
    componentDidMount() {

        const db = firebase.firestore()
        db.collection("companyName").onSnapshot(docs => {
            let data = []
            docs.forEach(doc => {
                console.log('doc.data()====>', doc.data())
                data.push(doc.data())



            })
            this.setState({ data })
        })
    }


    companyDetail(){
        this.props.history.push('/companyForm')
    }
    render() {
        const {data} = this.state
        return(

            <div className="login-page">
                <h2>Company Employee</h2>
                <div>
                {data.map((item, index) => {
                        return <p>{index + 1} Company: {item.companyName}
                        <br/>
                        email: {item.email}
                        <br/>
                        Address: {item.address}</p>


                    })
                    }
                </div>
                <div>
                    <button onClick={this.companyDetail.bind(this)}>Plus</button>
                </div>
            </div>
        )
    }
}

export default connect()(withRouter(Company))