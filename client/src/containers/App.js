import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {personsPushData} from '../actions/persons'


class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            data: {
                title: "",
                image: ""
            },
            // updatedData: {}
        };
    }

    // componentDidMount() {
    //     this.props.fetchData("/api/muggers");
    // }

  

    handleChange(e){
        let {...data} = this.state.data;
        data[e.target.id] = e.target.value;
        this.setState({
            data
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.pushData("http://localhost:5000/doc/creat", this.state.data);
        this.setState({
            data: {
                title: "",
                image: ""
            }
        })
        console.log(this.state.data.title + " " + this.state.data.image)
    }

    



    render() {

       
        return (
            <div className="wrapper">                
                {/* <ul>
                    {this.props.persons.map((person, index) => {
                        return <li key={index}>
                            <div>Name is: {person.name}</div>
                            <div>Age is: {person.age}</div>
                            <div>Status is: {person.status}</div>
                            <div>Mugger ID is: {person._id}</div>
                            <button className="edit-btn" value={person._id} onClick={this.showPopUp}>Edit</button>
                            <button className="edit-btn" value={person._id} onClick={this.deletePerson}>Delete</button>
                        </li>
                    })}
                </ul> */}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Введите имя</label>
                    <input
                        id="title"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.title}/>
                    <label htmlFor="image">Введите возраст</label>
                    <input
                        id="image"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.image}/>
                    {/* <label htmlFor="status">Ведите статус</label>
                    <input
                        id="status"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.data.status}/> */}
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        persons: state.persons,
        hasErrored: state.personsHasErrored
        
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
        pushData: (url, data) => dispatch(personsPushData(url, data)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
