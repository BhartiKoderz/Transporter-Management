import React from 'react';
import {
  Users,
  UserCheck,
  Building2,
  Truck,
  BookOpen,
  Route,
  Package,
  Receipt,
  FileText,
  BarChart3,
  Bell,
  Shield,
  Settings,
  LogOut,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/' },
  { id: 'users', label: 'User & Role Management', icon: Users, path: '/users' },
  { id: 'customers', label: 'Customer Management', icon: UserCheck, path: '/customers' },
  { id: 'transporters', label: 'Transporter & Fleet', icon: Truck, path: '/fleet' },
  { id: 'bookings', label: 'Booking & Orders', icon: BookOpen, path: '/bookings' },
  { id: 'dispatch', label: 'Dispatch & Routes', icon: Route, path: '/dispatch' },
  { id: 'tracking', label: 'Shipment Tracking', icon: Package, path: '/shipment-tracking' },
  { id: 'billing', label: 'Billing & Invoicing', icon: Receipt, path: '/billing' },
  { id: 'documents', label: 'Document Management', icon: FileText, path: '/documents' },
  { id: 'reports', label: 'Reports & Analytics', icon: BarChart3, path: '/reports' },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'compliance', label: 'Compliance', icon: Shield },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  // const { signOut } = useAuth();

  return (
    <div className="bg-gray-900 text-white w-64 max-h-screen overflow-scroll flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">TransportMS</h1>
            <p className="text-sm text-gray-400">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          // Only render Link if item.path exists, otherwise render a button without Link
          return item.path ? (
            <Link key={item.id} to={item.path} onClick={() => setActiveTab(item.id)}>
              <div
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </Link>
          ) : (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-left transition-colors ${activeTab === item.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          // onClick={signOut}
          className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;