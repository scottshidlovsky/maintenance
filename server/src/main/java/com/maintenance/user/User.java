package com.maintenance.user;

import com.maintenance.AbstractEntity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@AttributeOverride(name = "id", column=@Column(name = "user_id"))
public class User extends AbstractEntity {

    @Column(name = "email")
    String email;

    @Column(name = "provider")
    @Enumerated(EnumType.STRING)
    Provider provider;

    @OneToMany(mappedBy = "vehicle", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Set<UserVehicle> vehicles = new HashSet<>();

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

    public Set<UserVehicle> getVehicles() {
        return vehicles;
    }

    public void setVehicles(Set<UserVehicle> vehicles) {
        if (vehicles != null) {
            for (UserVehicle u : vehicles) {
                u.setUser(this);
            }
            this.vehicles.addAll(vehicles);
        } else {
            this.vehicles.clear();
        }

    }

    public void addVehicle(UserVehicle userVehicle) {
        this.vehicles.add(userVehicle);
        userVehicle.setUser(this);
    }
}
