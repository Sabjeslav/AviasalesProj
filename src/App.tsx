import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Header from "./components/header";
import Filter from "./components/Filter";
import SortTabs from "./components/SortTabs";
import Ticket from "./components/Ticket";

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
                            <Ticket/>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}

export default App;
