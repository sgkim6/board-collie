import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LobbyPage from './pages/lobby/LobbyPage';
import MainPage from './pages/main/MainPage';
import NavBar from './components/common/navbar/NavBar';
import SearchResultPage from './pages/searchresult/SearchResultPage';
import GameDetailPage from './pages/gamedetail/GameDetailPage';
import GameRecommendPage from './pages/gamerecommend/GameRecommendPage';
import TutorialPage from './pages/tutorialPage/TutorialPage';
import SelectPage from './pages/select/SelectPage';

const AppContent: React.FC<{ players: number }> = ({ players }) => {
  const location = useLocation();
  const shouldRenderNavbar = !location.pathname.startsWith('/tutorial/');

  return (
    <>
      {shouldRenderNavbar && <NavBar players={players} />}
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/searchresult" element={<SearchResultPage />} />
        <Route path="/game/:name" element={<GameDetailPage />} />
        <Route path="/gamerecommend" element={<GameRecommendPage />} />
        <Route path="/tutorial/:title" element={<TutorialPage players={players}/>} />
        <Route path="/select/:name" element={<SelectPage />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  const [players, setPlayers] = useState(2);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LobbyPage players={players} setPlayers={setPlayers} />} />
        <Route path="*" element={<AppContent players={players} />} />
      </Routes>
    </Router>
  );
}

export default App;
