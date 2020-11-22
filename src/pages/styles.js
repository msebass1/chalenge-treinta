import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>{
  return ({
  rootL: {
    background: theme.bg.yellow,

    height:'1000px'
  },
  rootR:{
    background: '#FFF',
 
    height:'1000px'
  },
  cont:{
    marginLeft:'10%',
    marginTop: '5%',
  },
  hw:{
  color: theme.palette.secondary.main,
  fontSize: '60px',
  lineHeight: '78px',
  width: '100%'
  },
  pr:{
  color: theme.palette.secondary.main,
  fontSize: '16px',
  lineHeight: '33px',
  width: '100%'
  }
})});

export default useStyles;
