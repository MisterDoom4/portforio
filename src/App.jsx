import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileNav from './components/ProfileNav';
import Profile from './pages/profile/Profile';
import { useMediaQuery } from 'react-responsive';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import config from './assets/config.json';

function App() {
    const matches = useMediaQuery({ query: '(max-width: 768px)' });
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <main>
            <ProfileNav isMobile={matches} onDarkModeChange={handleDarkMode} />
            <Routes>
                <Route
                    path="/"
                    element={<Profile darkMode={darkMode} tecs ={config.tecs} />}
                />
                <Route
                    path="/projects"
                    element={<Projects darkMode={darkMode} projects ={config.projects} />}
                />
                <Route
                    path="/resume"
                    element={<Resume darkMode={darkMode} />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default App;
