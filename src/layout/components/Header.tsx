import { CONSTANTS } from "@/shared/constants";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{CONSTANTS.TITLE_APP}</Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}