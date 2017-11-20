package com.maintenance.vehicle;

import com.maintenance.AbstractEntity;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;

/**
 * Model and year of a vehicle.
 */
@Entity
@AttributeOverride(name = "id", column=@Column(name = "model_year_id"))
@Immutable
public class ModelYear extends AbstractEntity {

    @Column(name = "year", nullable = false)
    int year;

    @Column(name = "model", nullable = false)
    String model;

    @ManyToOne
    @JoinColumn(name = "vehicle_id", nullable = false)
    private Vehicle vehicle;

    public int getYear() {
        return year;
    }

    public String getModel() {
        return model;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

}