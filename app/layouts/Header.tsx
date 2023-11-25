/**
 * Title: Header
 * Description:
 * Filename: Header.tsx
 * Path: /app/layouts/Header.tsx
 * Author: Mrh Rifat (Programmer)
 * Created Date: Feb 21, 2023
 * Last Updated Date: Oct 26, 2023
 *
 */
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CountIcons from '../header/CountIcons'
import HeaderIcons from '../header/HeaderIcons'
import ToggleTheme from '../header/ToggleTheme'

const Header = () => {
  return (
    <div style={{ marginBottom: '10px', marginTop: '70px' }}>
      <Stack direction="row" gap={1} justifyContent="space-between">
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            letterSpacing: 1,
          }}
          data-testid="appName">
          <span className="specialCharacter">B</span>adge
          <span className="specialCharacter">G</span>enius
        </Typography>
        <Box alignSelf="center">
          <HeaderIcons />
        </Box>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={1}
        alignItems="center"
        justifyContent="space-between">
        <div>
          <CountIcons />
          <Typography variant="body1" data-testid="tagLine2">
            Badge,&nbsp;&nbsp;
            <abbr title="Scalable Vector Graphics">SVG,</abbr>
            &nbsp; or PNG Logo, Hex Code etc & use in
          </Typography>
          <Typography variant="body1">
            GitHub, Markdown or any Web Pages
          </Typography>
        </div>
        <Box alignSelf="center">
          <ToggleTheme />
        </Box>
      </Stack>
    </div>
  )
}

export default Header
