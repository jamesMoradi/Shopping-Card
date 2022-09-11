import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

//styles
import styles from './NavBar.module.css'

//context
import { ReducerBodyContext } from '../Contexts/ReducerContext'

//icon
import { ShoppingCartOutlined } from '@mui/icons-material'

const NavBar = () => {
    const {state} = useContext(ReducerBodyContext)

  return (
    <nav className={styles.nav}>
      <Link to='/'>products</Link>
      <Link className={styles.toOrderLink} to='/orders'>
      <span>{state.itemsCounter}</span>
      <ShoppingCartOutlined color='primary' fontSize='large'/>
      </Link>
    </nav>
  )
}

export default NavBar