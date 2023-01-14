/* eslint-disable jsx-a11y/alt-text */
// material
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Container, Card, Typography, Box, Stack, Button, Tab, Divider } from '@mui/material';
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
								<Tab type='EXCHANGE' label="ACTIVE POOLS" value="1" />
								<Tab label="LIQUIDITY" value="2" />
							</TabList>
						</Box>
						<TabPanel value="1">
							<Grid container spacing={4} sx={{ my: '5px' }}>
								<Grid item xs={12} md={6}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ border: '1px solid', borderColor: '#686868', borderRadius: '10px', mb: '10px' }}>
												<Box sx={{ padding: '10px' }}>
													<Button variant='outlined'>
														<Stack direction="row" sx={{ justifyContent: 'center', px: '10px' }} >
															<img src='https://next-gen.basedfinance.io/static/media/ftm_no_back.9c71a035.svg' />
															<Typography sx={{ display: 'flex', alignItems: 'center' }}>FTM</Typography>
														</Stack>
													</Button>
													<Typography sx={{ float: 'right' }}>0.0</Typography>
												</Box>
												<Divider />
												<Stack spacing={2} direction="row" sx={{ justifyContent: 'right', padding: '10px' }}>
													<Typography sx={{ display: 'flex', alignItems: 'center' }}>Balance 0.0000</Typography>
													<Button variant='outlined'>50%</Button>
													<Button variant='outlined'>MAX</Button>
												</Stack>
											</Box>
											<Box sx={{ border: '1px solid', borderColor: '#686868', borderRadius: '10px' }}>
												<Box sx={{ padding: '10px' }}>
													<Button variant='outlined'>
														<Stack direction="row" sx={{ justifyContent: 'center', px: '10px' }} >
															<img src='https://next-gen.basedfinance.io/static/media/bshare-simple.2f739dbf.svg' />
															<Typography sx={{ display: 'flex', alignItems: 'center' }}>FTM</Typography>
														</Stack>
													</Button>
													<Typography sx={{ float: 'right' }}>0.0</Typography>
												</Box>
												<Divider />
												<Stack spacing={2} direction="row" sx={{ justifyContent: 'right', padding: '10px' }}>
													<Typography sx={{ display: 'flex', alignItems: 'center' }}>Balance 0.0000</Typography>
													<Button variant='outlined'>50%</Button>
													<Button variant='outlined'>MAX</Button>
												</Stack>
											</Box>
											<Button sx={{ mt: '10px', width: '100%' }} variant='contained'>SWAP</Button>
										</Box>
									</Card>
								</Grid>
								<Grid item xs={12} md={6}>
									<Card >
										<Box sx={{ p: { xs: 2, md: 2 }, borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
											<Box sx={{ textAlign: 'center' }}>
												<Typography>My Wallet</Typography>
											</Box>
											<Stack direction="row">
												<Typography sx={{ flex: '1 1 0%' }}>0xEC3bd1...c78540638</Typography>
												<Button sx={{ display: 'flex', alignItems: 'center' }} variant='contained'>FTM SCAN</Button>
											</Stack>
										</Box>
									</Card>
								</Grid>
							</Grid>
						</TabPanel>
						<TabPanel value="2">
							234
						</TabPanel>
					</TabContext>
				</Box>
			</Container>
		</RootStyle>
	);
}
