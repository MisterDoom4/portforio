import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfileNav from './components/ProfileNav';
// import Sidenav from './components/SideNav'
import Profile from './components/Profile';
// import Main from './components/Main'
import { useMediaQuery } from 'react-responsive';
import Projects from './components/Projects';
import Teste from './components/Teste';
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
                    element={<Profile isMobile={matches} darkMode={darkMode} tecs ={config.tecs} />}
                />
                <Route
                    path="/projects"
                    element={<Projects darkMode={darkMode} projects ={config.projects} />}
                />
                <Route
                    path="/teste"
                    element={<Teste projetos = {config.projects} />}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default App;
