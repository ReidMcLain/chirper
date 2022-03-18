import React, { useState, useEffect } from 'react'
import ChirpSyntax from './components/ChirpCard';

const App = () => {

    const [idCount, setIdCount] = useState(4);
    const [username, setUsername] = useState('');
    const [msg, setMsg] = useState('');
    const [chirps, setChirps] = useState([
        {
            id: 1,
            username: "therealDickVitale",
            msg: 'March Madness BABY #besttimeoftheyear'
        },
        {
            id: 2,
            username: "BarackObama",
            msg: 'Check out my march madness bracket #iliterallypickthefavorites'
        },
        {
            id: 3,
            username: "espn",
            msg: '11 seed Michigan upsets 6 seed Colorado State 75-63! #marchmadness'
        }]
    )

    let newChirp = () => {
        if (username == "" || msg == "") {
            alert('please fill out both fields!');
        } else {
        setChirps([...chirps, {
            id: idCount,
            username: username,
            msg: msg
        }])
        setIdCount(idCount + 1);
    }
    }

    return (
        <>
            <div>
                <div>
                    <h1 class="pageTitle">Home</h1>
                    <div className="container border rounded mt-2 text-center">
                        <div className="row">
                            {/* <div className="col"> */}
                            <div class="form-group p-1 mt-1">
                                <input id="userNameBox" value={username} onChange={e => setUsername(e.target.value)}
                                    class="form-control" placeholder="Username"
                                />
                            </div>
                            <div class="form-group">

                                <textarea id="chirpBox" value={msg} onChange={e => setMsg(e.target.value)}
                                    class="form control mt-3"
                                    row="3"
                                    placeholder="What happening?"
                                ></textarea>
                                <div className="col 2 mb-3">
                                    <button id="submit-button"
                                        class="btn btn-primary mt-3"
                                        onClick={() => {
                                            newChirp()
                                        }}>Chirp</button>
                                </div>
                            </div>
                            {/* </div> */}
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
                                    <ChirpSyntax id={chirp.id} username={chirp.username} msg={chirp.msg} />
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