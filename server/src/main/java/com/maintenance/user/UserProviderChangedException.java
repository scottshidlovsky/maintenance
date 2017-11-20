package com.maintenance.user;

/**
 * Exception to throw if a user is trying to login with a different auth provider than they registered with
 */
public class UserProviderChangedException extends RuntimeException {
    UserProviderChangedException() {
        super("User is signing in with a different provider then account was created with.");
    }
}
