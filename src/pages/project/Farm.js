/* eslint-disable jsx-a11y/alt-text */
// material
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container, Card, Typography, Box, Stack, Button, Tab, Alert } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Page from '../../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
	paddingTop: theme.spacing(8),
	[theme.breakpoints.up('md')]: {
		paddingTop: theme.spacing(11)
	}
}));

export default function Contact() {
	const [value, setValue] = React.useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<RootStyle title="TOMB | FARM">
			<Container sx={{ mt: 10, pb: 10 }}>
				<Box sx={{ width: '100%', typography: 'body1' }}>
					<TabContext value={value}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<TabList onChange={handleChange} aria-label="lab API tabs example">
								<Tab label="ACTIVE POOLS" value="1" />
								<Tab label="RETIRE POOLS" value="2" />
								<Tab label="TEAM POOLS" value="3" />
							</TabList>
						</Box>
						<TabPanel value="1">
							<Box sx={{ py: '20px', textAlign: 'center' }}>
								<Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>GODs Footprints Farming pools</Typography>
								<Typography>Earn SMELT in Hybrid farm w NFT staking</Typography>
							</Box>
							<Grid container spacing={4}>
								<Grid item xs={12} md={4}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ pr: { xs: 2, md: 2 }, position: 'absolute', right: 0 }}>
												<img style={{ width: '80px' }} src="https://next-gen.basedfinance.io/static/media/preview.79b1e7a9.gif" />
											</Box>
											<Box>
												<Typography sx={{ fontWeight: 700 }}>GodNft</Typography>
												<Typography>Earn SMELT</Typography>
											</Box>
											<Box sx={{ textAlign: 'center' }}>
												<Button sx={{ my: '20px' }} variant="contained">MATRIX AC</Button>
											</Box>
											<Box>
												<Stack direction="row">
													<Typography sx={{ fontWeight: 'bold', flex: '1 1 0%', textAlign: 'center', pt: '7px' }}>APR: 22.63%</Typography>
													<Button variant="contained">VIEW</Button>
												</Stack>
											</Box>
										</Box>
									</Card>
								</Grid>
								<Grid item xs={12} md={4}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ pr: { xs: 2, md: 2 }, position: 'absolute', right: 0 }}>
												<img style={{ width: '80px' }} src="https://next-gen.basedfinance.io/static/media/obol-ftm-lp.f61a46a0.svg" />
											</Box>
											<Box>
												<Typography sx={{ fontWeight: 700 }}>OBOL-FTM-LP</Typography>
												<Typography>Earn SMELT</Typography>
											</Box>
											<Box sx={{ textAlign: 'center' }}>
												<Button sx={{ my: '20px' }} variant="contained">MATRIX AC</Button>
											</Box>
											<Box>
												<Stack direction="row">
													<Typography sx={{ fontWeight: 'bold', flex: '1 1 0%', textAlign: 'center', pt: '7px' }}>APR: 117.55%</Typography>
													<Button variant="contained">VIEW</Button>
												</Stack>
											</Box>
										</Box>
									</Card>
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value="2">
							<Box sx={{ py: '20px', textAlign: 'center' }}>
								<Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Retired pools</Typography>
							</Box>
							<Grid container spacing={4}>
								<Grid item xs={12} md={4}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ pr: { xs: 2, md: 2 }, position: 'absolute', right: 0 }}>
												<img style={{ width: '80px' }} src="https://next-gen.basedfinance.io/static/media/preview.79b1e7a9.gif" />
											</Box>
											<Box>
												<Typography sx={{ fontWeight: 700 }}>GodNft</Typography>
												<Typography>Earn SMELT</Typography>
											</Box>
											<Box sx={{ textAlign: 'center' }}>
												<Button sx={{ my: '20px' }} variant="contained">MATRIX AC</Button>
											</Box>
											<Box>
												<Stack direction="row">
													<Typography sx={{ fontWeight: 'bold', flex: '1 1 0%', textAlign: 'center', pt: '7px' }}>APR: 22.63%</Typography>
													<Button variant="contained">VIEW</Button>
												</Stack>
											</Box>
										</Box>
									</Card>
								</Grid>
								<Grid item xs={12} md={4}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ pr: { xs: 2, md: 2 }, position: 'absolute', right: 0 }}>
												<img style={{ width: '80px' }} src="https://next-gen.basedfinance.io/static/media/obol-ftm-lp.f61a46a0.svg" />
											</Box>
											<Box>
												<Typography sx={{ fontWeight: 700 }}>OBOL-FTM-LP</Typography>
												<Typography>Earn SMELT</Typography>
											</Box>
											<Box sx={{ textAlign: 'center' }}>
												<Button sx={{ my: '20px' }} variant="contained">MATRIX AC</Button>
											</Box>
											<Box>
												<Stack direction="row">
													<Typography sx={{ fontWeight: 'bold', flex: '1 1 0%', textAlign: 'center', pt: '7px' }}>APR: 117.55%</Typography>
													<Button variant="contained">VIEW</Button>
												</Stack>
											</Box>
										</Box>
									</Card>
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value="3">
							<Box sx={{ py: '20px', textAlign: 'center' }}>
								<Alert variant="filled" severity="info">
									This is an info alert — check it out!
								</Alert>
							</Box>
							<Grid container spacing={4}>
								<Grid item xs={12} md={4}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ pr: { xs: 2, md: 2 }, position: 'absolute', right: 0 }}>
												<img style={{ width: '80px' }} src="https://next-gen.basedfinance.io/static/media/stater.0ad16e7e.png" />
											</Box>
											<Box>
												<Typography sx={{ fontWeight: 700 }}>SMELTER</Typography>
												<Typography>Earn SMELT</Typography>
											</Box>
											<Box sx={{ textAlign: 'center' }}>
												<Button sx={{ my: '20px' }} variant="contained">MATRIX AC</Button>
											</Box>
											<Box>
												<Stack direction="row">
													<Typography sx={{ fontWeight: 'bold', flex: '1 1 0%', textAlign: 'center', pt: '7px' }}>APR: 117.55%</Typography>
													<Button variant="contained">VIEW</Button>
												</Stack>
											</Box>
										</Box>
									</Card>
								</Grid>
							</Grid>	
						</TabPanel>
					</TabContext>
				</Box>
			</Container>
		</RootStyle>
	);
}
