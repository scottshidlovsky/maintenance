package com.maintenance.user;

import com.maintenance.AbstractEntity;
import com.maintenance.vehicle.Vehicle;

import javax.persistence.*;

/**
 * Connect User and Vehicles.
 */
@Entity
@AttributeOverride(name = "id", column=@Column(name = "user_vehicle_id"))
public class UserVehicle extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;

    public UserVehicle(Vehicle vehicle, User user) {
        this.user = user;
        this.vehicle = vehicle;
    }

    protected UserVehicle() {}

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

}
