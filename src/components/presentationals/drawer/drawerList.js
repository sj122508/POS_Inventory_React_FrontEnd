import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import FolderIcon from '@mui/icons-material/Folder';
import SnippetFolderIcon from '@mui/icons-material/SnippetFolder';
import StorageIcon from '@mui/icons-material/Storage';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';

function DrawerList({items, isDrawerOpen}) {

  const itemIcon = (text) => {
    switch (text) {
        case 'Dashboard':
            return <DashboardIcon />
        case 'Manage Sales':
          return <ShoppingCartIcon />
        case 'Manage Product':
          return <InventoryIcon />
        case 'Manage Category':
          return <FolderIcon />
        case 'Manage Brand':
          return <SnippetFolderIcon />
        case 'Records':
          return <StorageIcon />
        case 'System Settings':
          return <SettingsIcon />
        case 'User Settings':
          return <SettingsAccessibilityIcon />
        default:
            return null
    }
  }

  return (
    <List>
      {items.map((text) => ( 
        <ListItem key={text} disablePadding sx={{ display: 'block', color: "#616161" }}>
            <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: isDrawerOpen ? 'initial' : 'center',
                      px: 2.5,
                    }}
                    aria-label={text}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: isDrawerOpen ? 3 : 'auto',
                            justifyContent: 'center',
                            color: '#616161',
                        }}>
                            {itemIcon(text)}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: isDrawerOpen ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
      ))}
    </List>
    
  )
}

export default DrawerList