import React, { useState, useEffect } from "react";
import RoutePlanning from "../sections/Dispatchpage/RoutePlanning";
import VehicleDriverAssignment from "../sections/Dispatchpage/VehicleDriverAssignment";
import DispatchOrders from "../sections/Dispatchpage/DispatchOrders";
import AlertsNotifications from "../sections/Dispatchpage/AlertNotification";
import RoutePerformanceReports from "../sections/Dispatchpage/RoutePerformaceReports";

// ================= Types =================
export interface Vehicle {
  id: number;
  name: string;
  type: string;
  status: string;
}

export interface Driver {
  id: number;
  name: string;
  status: string;
}

export interface DispatchOrder {
  id: number;
  orderNumber: string;
  destination: string;
  status: "Pending" | "In-Progress" | "Completed";
  priority: "High" | "Medium" | "Low";
}

export interface Alert {
  id: number;
  type: "warning" | "error" | "info";
  message: string;
  timestamp: string;
}

export interface Route {
  id: number;
  name: string;
  startPoint: string;
  endPoint: string;
  departureTime: string;
  arrivalTime: string;
  vehicleId: number | string;
  driverId: number | string;
  stops: any[];
  status: string;
  createdAt: string;
}

const Dispatchpage: React.FC = () => {
  // State
  const [routes, setRoutes] = useState<Route[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [dispatchOrders, setDispatchOrders] = useState<DispatchOrder[]>([]);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  // Mock data initialization
  useEffect(() => {
    setVehicles([
      { id: 1, name: "Truck A", type: "Heavy", status: "Available" },
      { id: 2, name: "Van B", type: "Medium", status: "On Route" },
      { id: 3, name: "Truck C", type: "Light", status: "Available" },
    ]);

    setDrivers([
      { id: 1, name: "John Doe", status: "Available" },
      { id: 2, name: "Jane Smith", status: "On Duty" },
      { id: 3, name: "Mike Johnson", status: "Available" },
    ]);

    setDispatchOrders([
      {
        id: 1,
        orderNumber: "ORD001",
        destination: "New York",
        status: "Pending",
        priority: "High",
      },
      {
        id: 2,
        orderNumber: "ORD002",
        destination: "Chicago",
        status: "In-Progress",
        priority: "Medium",
      },
      {
        id: 3,
        orderNumber: "ORD003",
        destination: "Los Angeles",
        status: "Completed",
        priority: "Low",
      },
    ]);

    setAlerts([
      {
        id: 1,
        type: "warning",
        message: "Vehicle 2 delayed by 30 minutes",
        timestamp: "2024-01-15 10:30",
      },
      {
        id: 2,
        type: "error",
        message: "Route deviation detected for Truck A",
        timestamp: "2024-01-15 09:15",
      },
    ]);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Dispatch & Routes Management
          </h1>
          <p className="text-gray-600">
            Plan routes, assign vehicles and drivers, manage orders, and monitor
            dispatch operations
          </p>
        </div>

        <RoutePlanning
          routes={routes}
          setRoutes={setRoutes}
          vehicles={vehicles}
          drivers={drivers}
        />
        <VehicleDriverAssignment vehicles={vehicles} drivers={drivers} />
        <DispatchOrders dispatchOrders={dispatchOrders} />
        <AlertsNotifications alerts={alerts} />
        <RoutePerformanceReports />
      </div>
    </div>
  );
};

export default Dispatchpage;