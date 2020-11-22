import React from 'react';
import {Box,Grid,Typography,Link} from '@material-ui/core';
import theme from '../theme';
import logo from '../logo.png';
import useStyles from './styles';

export default function Info(){
  const classes = useStyles(theme);

  return (
  <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="stretch">
    <Grid item sm={12} xs={12} className={classes.rootR}>
      <div className={classes.cont}>
	<Box>
	  <Link href='/login'>
	  <img src={logo} alt='logo'/>
	  </Link>
	</Box>
	<Box fontWeight="fontWeightLight" mr={15} textAlign="right">
	  <Typography variant="overline">Junior Challenge</Typography>
	</Box>
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
	<Box  mt={5} ml={1}>
	  <Typography className={classes.hw} variant="h3">Descubre las ventajas de usar Treinta</Typography>
	</Box >
	<Box mt={5}>
	  <Typography className={classes.pr} variant="body1">
	    Treinta ofrece más que la comodidad de administrar y monitorear los estados financieros de tu empresa a través de un smartphone.
	  </Typography>
	</Box>
      </div>
    </Grid>
  </Grid>
  )
}
