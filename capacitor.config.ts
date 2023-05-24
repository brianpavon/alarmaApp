import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'alarmaApp',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins:{    
    SplashScreen:{
      launchShowDuration: 1500
    }
  }
};

export default config;
