import { Box, Container, Grid, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TimelineIcon from '@mui/icons-material/Timeline';

import images from "../../assets/imgs/constants/images";

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "300px",
                backgroundColor: "#f5a34c",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                marginTop: "4rem",
            }}
        >
        <Container maxWidth="lg">
            <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <img src={images.logoLight} alt="logo" />
                </Grid>
                <Grid item xs={12}>
                    <Typography color="textSecondary" variant="h3" py={4}>
                        We Make The Difference
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    py={5}
                    sx={{
                    color: '#fff',
                }}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item>
                            <TwitterIcon />
                        </Grid>
                        <Grid item>
                            <InstagramIcon />
                        </Grid>
                        <Grid item>
                            <FacebookIcon />
                        </Grid>
                        <Grid item>
                            <TimelineIcon />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="textSecondary" variant="body1">
                        © 2023 - All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </Box>
    );
};

export default Footer;