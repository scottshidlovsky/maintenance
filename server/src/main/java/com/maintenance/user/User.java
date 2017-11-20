package com.maintenance.user;

import com.maintenance.AbstractEntity;

import javax.persistence.*;

@Entity
@AttributeOverride(name = "id", column=@Column(name = "user_id"))
public class User extends AbstractEntity {

    @Column(name = "email")
    String email;

    @Column(name = "provider")
    @Enumerated(EnumType.STRING)
    Provider provider;

    public User() {
    }

    public User(String email, Provider provider) {
        this.email = email;
        this.provider = provider;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
}
