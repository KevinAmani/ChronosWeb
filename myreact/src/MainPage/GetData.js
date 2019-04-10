import React,{Component} from 'react';
import axios from 'axios';
import './Config';
export default class DataList extends Component{
    state = {
        data:"",
    }

    componentDidMount(){
        axios.get(global.constants.mainsite+"test_data")
        .then(res =>{
            const data = res.data;
            this.setState({data});
        })
    }

    render(){


        return(
            <div>
            {this.state.data}
            </div>
            )
    }
}
