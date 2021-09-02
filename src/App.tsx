import React, {useEffect} from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Header from "./components/header";
import Filter from "./components/Filter";
import SortTabs from "./components/SortTabs";
import Ticket from "./components/Ticket";
import {getSearchToken} from "./services/ticketsService";
import TicketsWrapper from "./components/TicketsWrapper";



function App() {
    useEffect(() => {
        getSearchToken()
    }, []);

    return (
        <div className="App">
            <PageWrapper>
                <Header/>
                <div className="mainBlock">
                    <Filter/>
                    <div className="ticketsBlock">
                        <SortTabs/>
                        <TicketsWrapper />
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}

export default App;
