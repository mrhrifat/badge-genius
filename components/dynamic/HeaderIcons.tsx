/**
 * Title: HeaderIcons
 * Description:
 * Filename: HeaderIcons.tsx
 * Path: /components/dynamic/HeaderIcons.tsx
 * Author: Mrh Rifat (Programmer)
 * Date: Feb 22, 2023
 *
 */

import { HeaderIconType } from '@/types/componentsTypes'
import { headerIcons } from '@/utils/data'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import SettingsIcon from '@mui/icons-material/Settings'
import Icon from '@mui/material/Icon'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import React, { FC } from 'react'

const HeaderIcons: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {headerIcons.map((headerIcon: HeaderIconType) => (
        <Tooltip title={headerIcon.title} key={headerIcon.title}>
          <a href={headerIcon.url} target="_blank" rel="noreferrer">
            <IconButton
              aria-label={headerIcon.title}
              color="primary"
              // onClick={headerIcon?.item ? handleClick : null}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}>
              <Icon>{headerIcon.icon}</Icon>
            </IconButton>
          </a>
        </Tooltip>
      ))}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem>
          <ListItemIcon>
            <PersonAddIcon fontSize="small" />
          </ListItemIcon>
          Simple Icons
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          Shild IO
        </MenuItem>
      </Menu>
    </>
  )
}

export default HeaderIcons
