import * as React from "react";
import {
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import {LoginPage} from "./pages/Login";
import "./app.css"
import {HomePage} from "./pages/Home";
import {ProfilePage} from "./pages/Profile";
import Error from "./pages/Error";
import {SignUpPage} from "./pages/SignUp";
import {SettingsPage} from "./pages/Settings";
import {RequireAuth} from "./hooks/auth";

export default function App() {
    return (
        <div className={"app"}>
            <Routes>
                <Route path="/login" element={<LoginPage />} errorElement={<Error />}/>
                <Route element={<Header />}>
                    <Route path="/" element={<HomePage/>} errorElement={<Error />} />
                    <Route path="/signup" element={<SignUpPage/>} errorElement={<Error />} />
                    <Route
                        path="/profile"
                        element={
                            <RequireAuth>
                                <ProfilePage />
                            </RequireAuth>
                        }
                        errorElement={<Error />}
                    />
                    <Route
                        path="/settings"
                        element={
                            <RequireAuth>
                                <SettingsPage />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

function Header() {
    return (
        <div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}