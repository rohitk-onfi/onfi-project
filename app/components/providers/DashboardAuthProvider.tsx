"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "@/components/ui/spinner";
/**
 * Types and Interfaces
 */
interface AuthContextType {
    userEmail: string;
    handleLogout: () => void;
    setUserEmail: (email: string) => void;
}

/**
 * Context Creation
 * Default value is undefined, but context usage is enforced through useAuth hook
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Custom hook to access auth context
 * Throws error if used outside DashboardAuthWrapper
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an DashboardAuthWrapper");
    }
    return context;
};

interface DashboardAuthWrapperProps {
    children: React.ReactNode;
}

/**
 * DashboardAuthWrapper Component
 * Provides authentication context and handles auth-related functionality:
 * - JWT token management
 * - User session management
 * - Authentication error handling
 */
const DashboardAuthWrapper: React.FC<DashboardAuthWrapperProps> = ({ children }) => {
    // Hooks
    const pathname = usePathname();
    const router = useRouter();

    // State
    const [userEmail, setUserEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    /**
     * Event Handlers
     */
    const handleLogout = () => {
        // Clear local storage
        localStorage.removeItem("dashboard_jwt_token");
        localStorage.removeItem("dashboard_user_email");

        // Reset state and redirect
        setUserEmail("");
        router.push("/dashboard/login");
    };

    /**
     * Effects
     */
    useEffect(() => {
        // Initial authentication setup
        const token = localStorage.getItem("dashboard_jwt_token");
        if (!token && pathname !== "/dashboard/login") {
            handleLogout();
            return;
        }

        // Set initial user email from localStorage
        setUserEmail(localStorage.getItem("dashboard_user_email") || "");
        setIsLoggedIn(true);
    }, [pathname]);

    /**
     * Context value containing auth-related state and functions
     */
    const value = {
        userEmail,
        handleLogout,
        setUserEmail,
    };

    const Loading = () => {
        return (
            <div className="flex justify-center items-center h-screen">
                <Spinner />
            </div>
        );
    };

    return <AuthContext.Provider value={value}>{isLoggedIn || pathname === "/dashboard/login" ? children : <Loading />}</AuthContext.Provider>;
};

export default DashboardAuthWrapper;
