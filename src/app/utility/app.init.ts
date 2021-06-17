import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://auth.eu.yuuvis.io_',
          realm: 'itelligence1_',
          clientId: 'test-app_',
        },
        initOptions: {
            checkLoginIframe: true,
            checkLoginIframeInterval: 25
        },
        loadUserProfileAtStartUp: true
        // initOptions: {
        //   onLoad: 'check-sso',
        //   silentCheckSsoRedirectUri:
        //     window.location.origin + '/assets/silent-check-sso.html',
        // },
      });
  }