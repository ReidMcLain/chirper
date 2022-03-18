import React, { useState } from 'react'
import { TiPencil, TiUser } from "react-icons/ti";
import { v4 as uuidv4 } from 'uuid';
import chirperLogo from './assets/ChirperIcon.png'
import moment from 'moment';
import ChirpSyntax from './components/ChirpCard';

const App = () => {
    const [idCount, setIdCount] = useState(4);
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');
    const [chirps, setChirps] = useState([
        {
            id: uuidv4(),
            username: "therealDickVitale",
            msg: 'March Madness BABY #besttimeoftheyear',
            timestamp: 'March 17th 2022, 10:26:07 am'
        },
        {
            id: uuidv4(),
            username: "BarackObama",
            msg: 'Check out my march madness bracket #iliterallypickthefavorites',
            timestamp: 'March 17th 2022, 11:25:59 am'
        },
        {
            id: uuidv4(),
            username: "espn",
            msg: '15 seed St Peters upsets 2 seed Kentucky 85-79/OT! #marchmadness',
            timestamp: 'March 17th 2022, 1:01:44 pm'
        }]
    )

    const handleUserNameChange = e => setUsername(e.target.value);
    const handleMessageChange = e => setMsg(e.target.value);

    let newChirp = () => {
        if (username == "" || msg == "") {
            alert('please fill out both fields!');
        } else {
            setChirps([...chirps, {
                id: uuidv4(),
                username: username,
                msg: msg,
                timestamp: moment().format('MMMM Do YYYY, h:mm:ss a')
            }])
            setIdCount(idCount + 1);
        }
    }

    return (
        <>
            <div>
                <div>
                    <div id="titleBox" className="d-flex flex-direction-row align-items-center">
                        <img id="blueBird" src={chirperLogo} />
                        <h1 className="pageTitle">Chirper</h1>
                    </div>
                    <div className="container border rounded text-center">
                        <div className="row">
                            <div className="form-group">
                                <div className="d-flex flex-direction-row mt-3">
                                    <div className="card-header">
                                        <TiUser className="align-self-center" />
                                    </div>
                                    <input id="userNameBox" value={username} onChange={handleUserNameChange}
                                        className="form-control" placeholder="Username"
                                    />
                                </div>
                                <div className="d-flex flex-direction-row mt-3">
                                    <div className="card-header">
                                        <TiPencil className="align-self-center" />
                                    </div>
                                    <textarea id="chirpBox" value={msg} onChange={handleMessageChange}
                                        className="form control"
                                        row="3"
                                        placeholder="What happening?"
                                    ></textarea>
                                </div>
                                <button id="submit-button"
                                    className="btn btn-primary mt-3"
                                    onClick={() => {
                                        newChirp()
                                    }}>Chirp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mt-5">
                <section className="row justify-content-center">
                    <div className="messages">
                        <ul className="list-group">
                            {chirps.map(chirp => (
                                <li className="list-group-item" key={chirp.id}>
                                    <ChirpSyntax id={chirp.id} username={chirp.username} msg={chirp.msg} timestamp={chirp.timestamp} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
};

export default App;