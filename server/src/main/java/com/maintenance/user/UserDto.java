package com.maintenance.user;

/**
 * Created by shidl on 9/17/2017.
 */
public class UserDto {

    public String email;

    public String profileUrl;

    static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.email = user.getEmail();
        return userDto;
    }

    UserDto setProfileUrl(String profileUrl) {
        this.profileUrl = profileUrl;
        return this;
    }
}
