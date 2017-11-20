package com.maintenance.user;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

/**
 * Rest Operations on the User
 */
@RestController
@RequestMapping(path = "/api/user")
public class UserController {

    @Value("${facebook.client.clientId}")
    String facebookClientId;

    UserRepo userRepo;

    UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping
    public UserDto getUser(Principal principal) {
        if (principal instanceof OAuth2Authentication){
            OAuth2Authentication oauth2 = (OAuth2Authentication) principal;
            final Provider provider;
            if (this.facebookClientId.equals(oauth2.getOAuth2Request().getClientId())) {
                provider = Provider.FACEBOOK;
            }
            else {
                provider = Provider.NONE;
            }
            if (oauth2.getUserAuthentication() instanceof UsernamePasswordAuthenticationToken) {
                UsernamePasswordAuthenticationToken currentUser = (UsernamePasswordAuthenticationToken)oauth2.getUserAuthentication();
                Map details = (Map)currentUser.getDetails();
                String email = (String)details.get("email");
                Map<String, Map> pictureMap = (Map)details.get("picture");
                String profileUrl = (String)pictureMap.get("data").get("url");

                // Only allow user to have one authentication provider. If they try to log in with another using the
                // same email, throw exception.
                // TODO(scottshidlovsky) - is there security implication of allowing multiple auth providers for same email?
                return this.userRepo.findByEmail(email).map(p -> {
                    if (p.getProvider() != provider) {
                        throw new UserProviderChangedException();
                    }
                    return UserDto.fromUser(p)
                            .setProfileUrl(profileUrl);
                })
                .orElseGet(() -> {
                    User user = new User(email, provider);
                    return UserDto.fromUser(this.userRepo.save(user))
                            .setProfileUrl(profileUrl);
                });
            }
        }
        return null;
    }
}
