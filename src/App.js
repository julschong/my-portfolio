import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero/index';
import Project from './components/Project/index';

import './App.scss';

function App() {
    return (
        <div class="app">
            <HeaderNav />
            <Hero />
            <Project />
        </div>
    );
}

export default App;
