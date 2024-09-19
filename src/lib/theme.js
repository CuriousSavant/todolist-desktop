import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // ใช้ธีมสีดำ
    primary: {
      light: '#6ec6ff', // ตัวอย่างสีที่เบา (Light)
      main: '#2196f3',  // สีหลัก (Main)
      dark: '#0069c0',  // ตัวอย่างสีเข้ม (Dark)
      500: '#2196f3',   // กำหนดสีเฉดตามระดับ
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
    secondary: {
      light: '#ff79b0',
      main: '#f50057',
      dark: '#ab003c',
      500: '#f50057',
      600: '#e91e63',
      700: '#d81b60',
      800: '#c2185b',
      900: '#880e4f',
    },
    background: {
      default: '#121212', // สีพื้นหลัง
      paper: '#1d1d1d', // สีพื้นหลังของกระดาษ
    },
    text: {
      primary: '#ffffff', // สีข้อความหลัก
      secondary: '#b0bec5', // สีข้อความรอง
    },
  },
});

export default theme;