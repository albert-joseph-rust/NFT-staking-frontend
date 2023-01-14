// material
import { styled } from '@mui/material/styles';
import { Grid, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import Logo from '../../components/Logo';


const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ p: 5 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Stack direction="row">
            <Logo sx={{ mx: { xs: 'auto', md: 'inherit' } }} />
            <Typography
              component="p"
              variant="body2"
              sx={{
                pt: '10px',
                pl: '20px'
              }}
            >
              © 2023. All rights reserved
            </Typography>
          </Stack>
        </Grid>


      </Container>
    </RootStyle>
  );
}
