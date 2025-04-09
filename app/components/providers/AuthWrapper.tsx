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
 * Throws error if used outside AuthWrapper
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthWrapper");
    }
    return context;
};

interface AuthWrapperProps {
    children: React.ReactNode;
}

/**
 * AuthWrapper Component
 * Provides authentication context and handles auth-related functionality:
 * - JWT token management
 * - User session management
 * - Authentication error handling
 */
const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
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
        localStorage.removeItem("jwt_token");
        localStorage.removeItem("user_email");

        // Reset state and redirect
        console.log("handleLogout");
        setUserEmail("");
        router.push("/login");
    };

    /**
     * Effects
     */
    useEffect(() => {
        console.log("pathname", pathname);
        // Initial authentication setup
        const token = localStorage.getItem("jwt_token");
        console.log("token", token);
        if (!token && pathname !== "/login") {
            console.log("handleLogout1");
            handleLogout();
            return;
        }

        // Set initial user email from localStorage
        setUserEmail(localStorage.getItem("user_email") || "");
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

    return <AuthContext.Provider value={value}>{isLoggedIn || pathname === "/login" ? children : <Loading />}</AuthContext.Provider>;
};

export default AuthWrapper;
