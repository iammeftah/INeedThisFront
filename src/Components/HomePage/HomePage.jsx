import React, { useState } from "react";
import { Grid, IconButton, Drawer, Avatar } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import TransactionPage from "../TransactionPage/TransactionPage";
import RightPart from "../RightPart/RightPart";
import Profile from "../Profil/Profile";
import RequestDetails from "../RequestDetails/RequestDetails";
import { Routes, Route } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "./logo.css";

const HomePage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Grid container xs={12} className="px-2 sm:px-6 min-h-screen lg:px-28 flex justify-between bg-gray-950 text-white">
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer}
                variant="temporary"
                className="sm:hidden"
            >
                <div className="p-4">
                    <Navigation />
                </div>
            </Drawer>

            <Grid item xs={12} sm={12} md={12} lg={2.5} className="w-full relative hidden sm:block">
                <Navigation />
            </Grid>

            <Grid item xs={12} lg={9} className="px-0 sm:px-6 lg:block w-full relative">
                <div className="sm:hidden flex justify-between items-center p-4">
                    <img src="https://www.svgrepo.com/show/424912/valorant-logo-play-2.svg" className="w-[4rem] aspect-square logo"></img>
                    <IconButton className="text-2xl" onClick={toggleDrawer} color="inherit">
                        <MenuIcon />
                    </IconButton>
                </div>

                <Routes>
                    <Route path="/" element={<HomeSection />}></Route>
                    <Route path="/home" element={<HomeSection />}></Route>
                    <Route path="/Profile/:id" element={<Profile />}></Route>
                    <Route path="/Request/:id" element={<RequestDetails />}></Route>
                    <Route path="/transactions" element={<TransactionPage />} />
                </Routes>
            </Grid>
        </Grid>
    );
};

export default HomePage;