import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import {CustomAppBar} from "../CustomAppBar/CustomAppBar";
import SideDrawer from "../SideDrawer/SideDrawer";

function WorkoutTracker() {
    const [open, setOpen ] = useState<boolean>(false);

    return (
        <aside>
            <CustomAppBar title={"Workout Tracker"} setOpen={setOpen}/>
            <SideDrawer open={open} setOpen={setOpen}/>
            <div>
                <Outlet/>
            </div>
        </aside>
    );
}

export default WorkoutTracker;