import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://eu.yuuvis.io',
          realm: 'itelligence1',
          clientId: 'test-app',
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