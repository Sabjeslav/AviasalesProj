import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Header from "./components/header";
import Filter from "./components/Filter";
import SortTabs from "./components/SortTabs";
import Ticket from "./components/Ticket";

const test = {
    "price": 95932,
    "carrier": "S7",
    "segments": [
        {
            "origin": "MOW",
            "destination": "HKT",
            "date": "2021-09-09T17:26:00.000Z",
            "stops": [
                "SIN",
                "BKK"
            ],
            "duration": 1511
        },
        {
            "origin": "HKT",
            "destination": "MOW",
            "date": "2021-09-29T10:55:00.000Z",
            "stops": [
                "DXB"
            ],
            "duration": 1906
        }
    ]
}

function App() {
    return (
        <div className="App">
            <PageWrapper>
                <Header/>
                <div className="mainBlock">
                    <Filter/>
                    <div className="ticketsBlock">
                        <SortTabs/>
                        <div className="tickets">
                            <Ticket ticket={test}/>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}

export default App;
