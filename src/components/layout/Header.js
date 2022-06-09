import React, {Fragment} from 'react'
import classes from './Header.module.css'
import image from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {

  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Hyperr Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} alt='Food'/>
        </div>
    </Fragment>
  )
}

export default Header