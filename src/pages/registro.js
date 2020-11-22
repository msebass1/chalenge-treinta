import React from 'react';
import {Button,Box,Grid,Typography,Link,TextField,Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import theme from '../theme';
import logo from '../logo.png';
import useStyles from './styles';
import app from "../base";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Registro(){
  const classes = useStyles(theme);
  var history = useHistory();
  const [user,setUser] = React.useState({});
  const [er, setError] = React.useState('');
  
  const handleChange = (e)=> {
    setUser(prev => ({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }
  const handleSubmit = ()=> {
    app.auth().createUserWithEmailAndPassword(user.email,user.password)
      .then(()=>{
	history.push('/login')
      }).catch((err)=>setError(err.message))
  }
  return (
    <>
  <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="stretch">
    <Grid item md={6} sm={12} className={classes.rootR}>
      <div className={classes.cont}>
	<Box>
	  <img src={logo} alt='logo'/>
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
	<Box mt={4}>
	  <Link href="/info"  variant="body2">
	    Click aqui para saber más
	  </Link>
	</Box>
      </div>
    </Grid>
    <Grid item  md={6} sm={12} xs={12} className={classes.rootL}>
      <div className={classes.cont}>
	<Box mt={5}>
	  <Typography className={classes.hw} variant="h6">Registro</Typography>
	</Box >
	<Box mt={15}>
	  <form className={classes.root}  >
	    <Box>
	      <Typography   variant="h6">Email</Typography>
	      <TextField name='email' onChange={handleChange} label="Necesario@mail.com" variant="filled" />
	    </Box>
	    <Box mt={5}>
	      <Typography  variant="h6">password</Typography>
	      <TextField name='password' type='password' onChange={handleChange} label="Necesario" variant="filled" />
	    </Box>
	    <Box mt={10}>
	      <Button  variant='contained' disabled={user.email===undefined || user.password===undefined} onClick={()=>handleSubmit()} color='secondary'>
		Registrarse
	      </Button>
	    </Box>
	    <Box mt={10}>
	      <Link href="/login"  variant="body2" color='secondary'>
		¿ya tienes cuenta? ¡Login!
	      </Link>
	    </Box>
	  </form>
	</Box >
      </div>
    </Grid>
  </Grid>
  <Snackbar open={er!==''} autoHideDuration={6000}>
    <Alert  onClose={()=>setError('')} severity="warning">
      {er}
    </Alert>
  </Snackbar>
    </>
  )
}
