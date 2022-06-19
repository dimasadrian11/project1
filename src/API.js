import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Navbar from './Navbar'
import Footer from './footer'
import React, { Component } from 'react'
import CardPost from './component/cardpost'
import axios from 'axios';


const urlAPI = 'https://jsonplaceholder.typicode.com/posts';
 
class api_fetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrypost: []
        }
    }
 
    componentDidMount() {
        // this.GetDataAPi() 
        this.GetDataByAxios()
    }
 
    GetDataByAxios() {
        axios.get(urlAPI)
            .then((res) => {
                this.setState({
                    arrypost: res.data
                })
                console.log(res.data)
            })
    }
 
    GetDataAPi() {
        fetch(urlAPI).then(res => {
            if (res.status === 200)
                return res.json()
        }).then(resdata => {
            console.log(resdata)
            this.setState({
                arrypost: resdata
            })
        })
    }
    
    render() {
    <Navbar/>

        return (
            <div className="container">
                fatch data from Api JsonPlaceHolder
                {
                    this.state.arrypost.map(function (data) {
                        return <CardPost key={data.id} title={data.title} conten={data.body} />
                    })
 
                }
            </div>
        )
    }
}
 
export default api_fetch;
