import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://auth.eu.yuuvis.io/auth/',
          //url: 'http://localhost:8080/auth',
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
        // }
      });
}