// create.component.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeContact = this.onChangeContact.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email :'',
            contact:''
        }
    }
    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        })
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangeContact(e) {
        this.setState({
            contact: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            contact: this.state.contact,
        };
        axios.post('http://localhost:4000/business/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            first_name: '',
            last_name: '',
            email :'',
            contact:''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>First Name:  </label>
                        <input type="text" className="form-control"
                               value={this.state.first_name}
                               onChange={this.onChangeFirstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.last_name}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.contact}
                               onChange={this.onChangeContact}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
