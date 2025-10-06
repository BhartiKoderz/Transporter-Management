import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Documentpage from './pages/Documentpage';
import Fleetpage from './pages/Fleetpage';
import Bookingpage from './pages/Bookingpage';
import Dispatchpage from './pages/Dispatchpage';
import ShipmentTracking from './pages/ShipmentTracking';
import Billingpage from './pages/Billingpage';
import { Route, Routes} from 'react-router-dom';


function App() {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar activeTab="dashboard" setActiveTab={() => { }} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Dashboard" />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Routes>
                        <Route path="/documents" element={<Documentpage />} />
                        {/* <Route path="/fleet" element={<Fleetpage />} /> */}
                        <Route path="/bookings" element={<Bookingpage />} />
                        <Route path="/dispatch" element={<Dispatchpage />} />
                        <Route path="/shipment-tracking" element={<ShipmentTracking />} />
                        {/* <Route path="/billing" element={<Billingpage />} /> */}
                    </Routes>
                </main>
            </div>
        </div>
    )
}

export default App