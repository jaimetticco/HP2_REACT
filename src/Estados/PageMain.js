import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {AiOutlineHome} from 'react-icons/ai';
import {FcAbout} from 'react-icons/fc';
import {FiUsers} from 'react-icons/fi';



class PageMain extends Component {
    render() {
        return (
            <Router>
            <div>
            <div class="container">
                <nav class="navbar navbar-expand-lg py-1" id="navbar">
                    <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="fa fa-bars"> <FaBars></FaBars> </span>
                    </button>
                    <div class="collapse navbar-collapse text-center" id="navbarsExample09">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                            <Link class="nav-link" to="/"><AiOutlineHome></AiOutlineHome>Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/about"><FcAbout></FcAbout>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/users"><FiUsers></FiUsers>Users</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/users"  element={<Users/>} />
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
    </Router>
        )
    }
}

export default  PageMain;


function Home(){
    return <h2>Home</h2>
}

function About(){
    return <h2>About</h2>
}

function Users(){
    return <h2>Users</h2>
}