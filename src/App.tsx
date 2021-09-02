import React from 'react';
import './App.css';
import PageWrapper from "./components/PageWrapper";
import Header from "./components/header";
import Filter from "./components/Filter";
import SortTabs from "./components/SortTabs";
import TicketsWrapper from "./components/TicketsWrapper";


function App() {
    return (
        <div className="App">
            <PageWrapper>
                <Header/>
                <div className="mainBlock">
                    <Filter/>
                    <div className="ticketsBlock">
                        <SortTabs/>
                        <TicketsWrapper/>
                    </div>
                </div>
            </PageWrapper>
        </div>
    );
}

export default App;
