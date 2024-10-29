// Libs
import { Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';

// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './context/useAuth';
import 'react-toastify/dist/ReactToastify.css';
import Wardrobe from './pages/Wardrobe';
import ShowAllOutFit from './pages/ShowAllOutFit/ShowAllOutfit';
import OutFitPlan from './pages/OutFitPlan/OutFitPlan';
import OutfitComposer from './pages/OutfitComposer';
import OutfitShared from './pages/OutfitShared/OutfitShared';
import './App.css';
import {CGU} from './pages/CGU';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/CGU" element={<CGU />} />

          <Route path="/my-outfits" element={<ShowAllOutFit />} />
          <Route path="/my-outfit-plan/:id" element={<OutFitPlan />} />
          <Route path="/out-fit-compositor" element={<OutfitComposer />} />
          <Route path="/outfit-shared/:id" element={<OutfitShared />} />

          {/* <Route path="/outfits">
                    <Route index element={<Outfits />} />
                    <Route path=":id" element={<Outfit />} />
                </Route> */}
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
