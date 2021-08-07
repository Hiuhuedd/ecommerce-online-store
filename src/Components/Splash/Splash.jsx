import React from "react";
import useStyles from "./style";
import logo from "../../assets/logop.jpeg";


const Splash = () => {

  const classes = useStyles();
  return (

 <div className={classes.splash}>
      <img src={logo} alt="commerce.js" height="65px"className={classes.image}/>
      <h2 className={classes.logo}>Wind-style</h2>
 </div>

  );
};

export default Splash;
