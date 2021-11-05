import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import { observer } from "mobx-react-lite";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        "@media print": {
            display: "block",
        },
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0,
        },
        "@media print": {
            display: "none",
        },
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        "@media print": {
            display: "none",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    toolbar: Object.assign(Object.assign({}, theme.mixins.toolbar), {
        "@media print": {
            minHeight: 0,
        },
    }),
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        "@media print": {
            width: "100%",
        },
    },
}));

export const ResponsiveDrawer = observer(
    ({
        children,
        menu,
        title,
    }: {
        children: React.ReactNode;
        menu: JSX.Element;
        title: string;
    }) => {
        const classes = useStyles();
        const theme = useTheme();
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                {menu}
            </div>
        );

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                            size="large">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            variant="temporary"
                            anchor={
                                theme.direction === "rtl" ? "right" : "left"
                            }
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden smDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }
);
