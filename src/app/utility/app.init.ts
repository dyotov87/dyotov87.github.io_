import { KeycloakService } from "keycloak-angular";


export function initializeKeycloak(keycloak: KeycloakService) : () => Promise<boolean> {
    return () =>
      keycloak.init({
        config: {
          url: 'https://auth.eu.yuuvis.io/auth/realms/itelligence1/protocol/openid-connect/auth?client_id=yuuvis-authentication-service&redirect_uri=https://eu.yuuvis.io/oauth/itelligence1&response_type=code&state=lmphK3',
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