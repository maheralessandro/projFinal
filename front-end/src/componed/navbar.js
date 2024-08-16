// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCart from './shoppingCard';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { getLocalStorage, removeLocalStorage } from '../helpers/localStorage';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


function NavbarScroll() {
    const {cart} = useSelector((state)=>state.shopCart) ;

    const navigate = useNavigate() ;

    const logged = getLocalStorage("token") ;
    const utilisateur = getLocalStorage("User");
    const logout = ()=>{
      removeLocalStorage('token')
      removeLocalStorage('User')
      navigate('/')
    }

   

    const navConnected =()=>{
      return(
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top' >
        <Container fluid> 
          <Navbar.Brand href="#">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link}  to='/'><HomeIcon sx={{ fontSize: 30 }}/></Nav.Link>
              </Nav>
              <div style={{
               display:"flex" , justifyContent:"space-between", alignItems:"center" , display: "flex"}}>
                <NavDropdown title= {` ${utilisateur?.firstName} ${utilisateur?.lastName}`}id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to ="/addProd"  >Add Product
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}  to='/myOrders' >
                My orders
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}  to='/updatePwd' >
                Update Password
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>logout()} >
              <List>
          
          <ListItem  >
            <ListItemButton style={{ 
            display:"flex" , justifyContent:"space-around"}}
             >
             <ListItemIcon >
              <ListItemText primary="Logout"  
              style={{textDecoration:"none",color:"black" , fontWeight:"bolder"}}/>
             
              </ListItemIcon>
              <LogoutIcon/>
            </ListItemButton>
          </ListItem>
     
      </List>
              </NavDropdown.Item>
            </NavDropdown>
            <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon/>
              </StyledBadge>
            </IconButton>
            </div>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  
      )
    } ;

    const navPublic=()=>{

      return(
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top' >
        <Container fluid> 
          <Navbar.Brand href="#">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link}  to='/'><HomeIcon sx={{ fontSize: 30 }}/></Nav.Link>
              </Nav>
              <div style={{
               display:"flex" , justifyContent:"space-between", alignItems:"center" , display: "flex"}}>
            <Nav.Link as={Link} to = '/login'>Login</Nav.Link>
            <IconButton aria-label="cart" onClick={()=>navigate('/cart')}>
              <StyledBadge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon/>
              </StyledBadge>
            </IconButton>
            </div>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  
      )
    } ;
    
    
    

  return (
   
    <>
    {logged ? navConnected() : navPublic()}
    </>
   
  );
}

export default NavbarScroll;