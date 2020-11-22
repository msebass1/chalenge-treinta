import React from 'react';
import {Box,Grid,Typography,Button,Link} from '@material-ui/core';
import theme from '../theme';
import logo from '../logo.png';
import useStyles from './styles';
import app from '../base';
import MapContainer from '../components/Map';

export default function Mapa(){
  const classes = useStyles(theme);
  return (
  <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="stretch">
    <Grid item sm={12} xs={12} >
      <div className={classes.cont}>
	<Box >
	  <img src={logo} alt='logo'/>
	</Box>
	<Box fontWeight="fontWeightLight" mr={15} textAlign="right">
	  <Typography variant="overline">Junior Challenge</Typography>
	</Box>
	<Box m={2}>
	  <Button variant='contained' color='primary' onClick={() => app.auth().signOut()} >Logout</Button>
	</Box>
      </div>
    </Grid>
    <Grid item sm={12} xs={12} className={classes.rootL}>
      <div className={classes.cont}>
	<Box  mt={5} ml={1}>
	  <Typography className={classes.hw} variant="h3">Treinta - ¡Aplicación financiera gratuita!</Typography>
	</Box >
	<Box mt={5}>
	  <Typography className={classes.pr} variant="body1">
	    Gestiona las transacciones de tu negocio,
	    conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.
	  </Typography>
	</Box>
	<Box mt={5}>
	  <Typography className={classes.pr} variant="body1">
	    Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar! 
	  </Typography>
	</Box>
	<Box mt={4}>
	  <MapContainer/>
	</Box>
      </div>
    </Grid>
  </Grid>
  )
}
