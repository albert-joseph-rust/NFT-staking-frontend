/* eslint-disable jsx-a11y/alt-text */
// material
import { styled } from '@mui/material/styles';
import { Grid, Container, Card, Typography, Box, Stack, Button } from '@mui/material';
// components
import Page from '../../components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
	paddingTop: theme.spacing(8),
	[theme.breakpoints.up('md')]: {
		paddingTop: theme.spacing(11)
	}
}));

// ----------------------------------------------------------------------

export default function Contact() {
	return (
		<RootStyle title="TOMB | DASHBOARD">
			<Container sx={{ mt: 10, pb: 10 }}>
				<Grid container spacing={6}>
					<Grid item xs={12} md={6}>
						<Card >
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>Total Value Locked</Typography>
								<Typography sx={{ fontSize: 20 }}>$643,004</Typography>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card>
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>BoilerRoom</Typography>
								<Grid container spacing={10}>
									<Grid item xs={6} md={6}>
										<Stack direction="row" sx={{ justifyContent: 'center' }}>
											<img style={{ maxWidth: '50px' }} src="https://next-gen.basedfinance.io/static/media/obol.698d2518.svg" />
											<Typography sx={{ pl: '15px', pt: '13px' }}>595.49</Typography>
										</Stack>
									</Grid>
									<Grid item xs={6} md={6}>
										<Stack direction="row" sx={{ justifyContent: 'center' }}>
											<img style={{ maxWidth: '50px' }} src="https://next-gen.basedfinance.io/static/media/obol.698d2518.svg" />
											<Typography sx={{ pl: '15px', pt: '13px' }}>595.49</Typography>
										</Stack>
									</Grid>
								</Grid>
							</Box>
						</Card>
					</Grid>

					<Grid item xs={12} md={6}>
						<Card>
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>OBOL</Typography>
								<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', py: '25px' }}>
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>BUY TAX</Typography>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>0%</Typography>
									</Box>
									<img style={{ maxWidth: '100px', flex: '1 1 0%' }} src="https://next-gen.basedfinance.io/static/media/obol.698d2518.svg" />
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>SELL TAX</Typography>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>10%</Typography>
									</Box>
								</Stack>
								<Box>
									<Typography>Current Price</Typography>
									<Typography sx={{ fontSize: '35px' }}>$ 0.21</Typography>
									<Typography>Market Cap: $37,806</Typography>
									<Typography>Circulating Supply: 180,030</Typography>
									<Typography>Total Supply: 346,766</Typography>
								</Box>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card >
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>OBOL</Typography>
								<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', py: '25px' }}>
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>BUY TAX</Typography>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>0%</Typography>
									</Box>
									<img style={{ maxWidth: '100px', flex: '1 1 0%' }} src="https://next-gen.basedfinance.io/static/media/smelt.4d7573dc.svg" />
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>SELL TAX</Typography>
										<Typography sx={{ fontSize: 24, fontWeight: 700 }}>10%</Typography>
									</Box>
								</Stack>
								<Box>
									<Typography>Current Price</Typography>
									<Typography sx={{ fontSize: '35px' }}>$ 0.21</Typography>
									<Typography>Market Cap: $37,806</Typography>
									<Typography>Circulating Supply: 180,030</Typography>
									<Typography>Total Supply: 346,766</Typography>
								</Box>
							</Box>
						</Card>
					</Grid>


					<Grid item xs={12} md={6}>
						<Card >
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>OBOL-FTM LP</Typography>
								<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', py: '25px' }}>
									<img style={{ maxWidth: '80px', flex: '1 1 0%' }} src="https://next-gen.basedfinance.io/static/media/obol-ftm-lp.f61a46a0.svg" />
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography>1.07 OBOL / 0.93 FTM</Typography>
										<Typography>$0.45</Typography>
										<Typography>Liquidity: $51,250</Typography>
										<Typography>Total supply: 113,642</Typography>
									</Box>
									<Box sx={{ flex: '1 1 0%', maxWidth: '100px' }} >
										<Button sx={{ width: '100%' }} variant="contained" size="large">ADD LP</Button>
									</Box>
								</Stack>
							</Box>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card >
							<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px' }}>
								<Typography sx={{ fontSize: 24, fontWeight: 700 }}>SMELT-FTM LP</Typography>
								<Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', py: '25px' }}>
									<img style={{ maxWidth: '80px', flex: '1 1 0%' }} src="https://next-gen.basedfinance.io/static/media/obol-ftm-lp.f61a46a0.svg" />
									<Box sx={{ flex: '1 1 0%' }}>
										<Typography>1.07 OBOL / 0.93 FTM</Typography>
										<Typography>$0.45</Typography>
										<Typography>Liquidity: $51,250</Typography>
										<Typography>Total supply: 113,642</Typography>
									</Box>
									<Box sx={{ flex: '1 1 0%', maxWidth: '100px' }} >
										<Button sx={{ width: '100%' }} variant="contained" size="large">ADD LP</Button>
									</Box>
								</Stack>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	);
}
