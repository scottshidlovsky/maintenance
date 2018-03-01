package com.maintenance.vehicle;

import com.maintenance.AbstractEntity;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.List;

/**
 * Vehicle that contains make, model, year
 */
@Entity
@AttributeOverride(name = "id", column=@Column(name = "vehicle_id"))
@Immutable
public class Vehicle extends AbstractEntity {

    @Column(name = "make")
    String make;

    @Column(name = "model")
    String model;

    @Column(name = "year")
    int year;

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }
}
