import React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const Navmenu = () => {
    return (
        <div style={{ 'fontSize': '30px', 'textAlign': 'center', 'marginBottom': '10px' }}>
            <Link to='/post'>
                <Button
                    variant="contained" color="primary" size="large">
                    <HomeIcon sx={{ color: pink[500] }} />  All Post </Button> </Link>

        </div>
    );
};

export default Navmenu;