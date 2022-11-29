import * as React from "react";
import {
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import {AuthProvider, AuthStatus, RequireAuth} from "./hooks/auth"
import {LoginPage} from "./pages/Login";
import "./app.css"

export default function App() {
    return (
        <div className={"app"}>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<Layout />}>
                        <Route path="/" element={<PublicPage />} />
                        <Route
                            path="/protected"
                            element={
                                <RequireAuth>
                                    <ProtectedPage />
                                </RequireAuth>
                            }
                        />
                    </Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

function Layout() {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}

function PublicPage() {
    return <h3>Public</h3>;

}

function ProtectedPage() {
    return <h3>Protected</h3>;
}