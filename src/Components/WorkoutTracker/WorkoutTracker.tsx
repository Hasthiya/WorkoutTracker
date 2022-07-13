import React from 'react';
import {Outlet} from 'react-router-dom';

import {CustomAppBar} from "../CustomAppBar/CustomAppBar";

function WorkoutTracker() {

    return (
        <aside>
            <CustomAppBar title={"Workout Tracker"}/>
            <div>
                <Outlet/>
            </div>
        </aside>
    );
}

export default WorkoutTracker;