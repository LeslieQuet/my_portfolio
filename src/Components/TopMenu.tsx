import { AppBar, Toolbar, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const Navbar = () => {
  const navItems = [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Skills', href: '#skills' },
    { text: 'Experience', href: '#experience' },
    { text: 'Projects', href: '#projects' },
    { text: 'Contact', href: '#contact' },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <List component="nav" sx={{ display: 'flex' }}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.text} sx={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItem button>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
