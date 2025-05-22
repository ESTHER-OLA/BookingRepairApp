"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create the notification context
const NotificationContext = createContext(null);

// Custom hook to use the notification context
export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within a NotificationProvider"
    );
  }
  return context;
};

// Notification provider component
export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  // Load notifications from localStorage on initial load
  useEffect(() => {
    const storedNotifications = localStorage.getItem("notifications");
    if (storedNotifications) {
      const parsedNotifications = JSON.parse(storedNotifications);
      setNotifications(parsedNotifications);
      setUnreadCount(parsedNotifications.filter((n) => !n.read).length);
    }
  }, []);

  // Save notifications to localStorage when they change
  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
    setUnreadCount(notifications.filter((n) => !n.read).length);
  }, [notifications]);

  // Add a new notification
  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      read: false,
      ...notification,
    };
    setNotifications((prev) => [newNotification, ...prev]);
  };

  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  // Clear all notifications
  const clearAllNotifications = () => {
    setNotifications([]);
  };

  // Value object to be provided to consumers
  const value = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAllNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
