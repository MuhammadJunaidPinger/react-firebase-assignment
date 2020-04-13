import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import * as firebase from "firebase/app";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getVenues, } from '../Config/fourSquareApi'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

class companyForm extends React.Component {
    state = {

        companyName: '',
        since: '',
        email: '',
        certificates: '',
        address: '',
        venues: [],
    }

    onChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    submitData() {
        const { companyName, since, email, certificates, address } = this.state
        // companyData.push([companyName, since, email, Certificates, Address]);
        const UserCompany = {
            companyName: companyName,
            since: since,
            email: email,
            certificates: certificates,
            address: address
        }

        console.log('userCompany=====>', UserCompany)

        const db = firebase.firestore()

        db.collection('companyName').doc(UserCompany.companyName).set(UserCompany)
            .then(() => {
                alert('welcome M/s. ' + UserCompany.companyName)
                this.props.history.push('/company')
            })
            .catch(e => {
                console.log('error', e)
            })
    }

    async getFourSquareData() {
        const { address } = this.state
        const location = await getVenues(address)
        this.setState({
            venues: location
        })
        console.log("Address---> ", location)
    }

    venueClick(areaName) {
        this.state.address = areaName
        this.state.venues = []
        console.log("this.state.address---> ", this.state.address);
        console.log("this.state.venues ",this.state.venues)
    }
    render() {
        return (


            <form>
                <div className="form-group">
                    <label>Name of company</label>
                    <input type="text" className="form-control"
                        value={this.state.companyName}
                        onChange={(e) => this.onChange("companyName", e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Since</label>
                    <input type="date" className="form-control"
                    />

                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={this.state.email}
                        onChange={(e) => this.onChange("email", e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

                </div>
                <div>
                    <label >certificates</label>
                    <input type="file" id="file" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" id="Address"
                        value={this.state.address}
                        onChange={(e) => this.onChange("address", e.target.value)}
                    />
                    <div>
                        {this.state.venues.length > 0 &&<Dialog aria-labelledby="simple-dialog-title" open={true}>
                            <DialogTitle id="simple-dialog-title">
                                Select Address of Company
         </DialogTitle>
                            <List>
                            {this.state.venues.map((item,index)=>{
                                return <ListItem onClick={()=> this.venueClick(item.name)}>
                                    {item.name}
                                </ListItem>
                            })}
                            </List>
                        </Dialog>}
                    </div>
                </div>
                <input type="button" value="getData" className="btn btn-info" onClick={this.getFourSquareData.bind(this)} />
                <input type="button" value="button" className="btn btn-info" onClick={this.submitData.bind(this)} />
            </form>
        )
    }
}
export default connect()(withRouter(companyForm))