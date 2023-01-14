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
		<RootStyle title="TOMB | BOARDROOM">
			<Container sx={{ mt: 10, pb: 10 }}>
				<Grid container spacing={6}>
					<Grid item xs={12} md={12}>
						<Stack direction="row" spacing={3} sx={{ justifyContent: 'center' }}>
							<Card sx={{ flex: '1 1 0%' }}>
								<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
									<Typography sx={{ fontSize: 24, fontWeight: 700 }}>Next Epoch</Typography>
									<Typography>17:22:41</Typography>
								</Box>
							</Card>
							<Card sx={{ flex: '1 1 0%' }}>
								<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
									<Typography sx={{ fontSize: 24, fontWeight: 700 }}>Current Epoch</Typography>
									<Typography>159</Typography>
								</Box>
							</Card>
							<Card sx={{ flex: '1 1 0%' }}>
								<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
									<Typography sx={{ fontSize: 24, fontWeight: 700 }}>APR | Daily</Typography>
									<Typography>150.49% | 0.41%</Typography>
									<Typography>OBOL per SMELT --- 0.2</Typography>
								</Box>
							</Card>
							<Card sx={{ flex: '1 1 0%' }}>
								<Box sx={{ p: { xs: 3, md: 5 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
									<Typography sx={{ fontSize: 24, fontWeight: 700 }}>SMELT Staked</Typography>
									<Typography>10,381</Typography>
								</Box>
							</Card>
						</Stack>
					</Grid>
					<Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
						<Button variant="contained">Kick Infinite Printer when Timer Expires</Button>
					</Grid>
					<Grid item xs={12} md={12}>
						<Stack direction="row" sx={{ justifyContent: 'center' }}>
							<Stack direction="row" spacing={3} >
								<Card sx={{ flex: '1 1 0%' }}>
									<Box sx={{ p: { xs: 3, md: 7 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
										<img style={{ width: '120px', margin: 'auto' }} src="https://next-gen.basedfinance.io/static/media/obol.698d2518.svg" />
										<Box sx={{ py: '35px' }}>
											<Typography sx={{ fontSize: '30px' }}>0.0000</Typography>
											<Typography>≈ $0.00</Typography>
											<Typography>OBOL Earned</Typography>
										</Box>
										<Button variant="contained">CLAIM REWARD</Button>
									</Box>
								</Card>
								<Card sx={{ flex: '1 1 0%' }}>
									<Box sx={{ p: { xs: 3, md: 7 }, textAlign: 'center', borderColor: '#fff', border: '1px solid', borderRadius: '18px', height: '100%' }}>
										<img style={{ width: '120px', margin: 'auto' }} src="https://next-gen.basedfinance.io/static/media/obol.698d2518.svg" />
										<Box sx={{ py: '35px' }}>
											<Typography sx={{ fontSize: '30px' }}>0.0000</Typography>
											<Typography>≈ $0.00</Typography>
											<Typography>OBOL Earned</Typography>
										</Box>
										<Button variant="contained">CLAIM REWARD</Button>
									</Box>
								</Card>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Container>
		</RootStyle>
	);
}
