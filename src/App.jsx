import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileNav from './components/ProfileNav';
// import Sidenav from './components/SideNav'
import Profile from './components/Profile';
// import Main from './components/Main'
import { useMediaQuery } from 'react-responsive';
import Projects from './components/Projects';

function App() {
    const matches = useMediaQuery({ query: '(max-width: 768px)' });
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <ProfileNav isMobile={matches} onDarkModeChange={handleDarkMode} />
            <Routes>
                <Route
                    path="/"
                    element={<Profile isMobile={matches} darkMode={darkMode} />}
                />
                <Route
                    path="/projects"
                    element={<Projects isMobile={matches} darkMode={darkMode} />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    );
}

export default App;
