package com.maintenance.vehicle;

import com.maintenance.AbstractEntity;
import org.hibernate.annotations.Immutable;

import javax.persistence.*;
import java.util.List;

/**
 * Vehicle that contains the top level make information
 *
 * Vehicle    ModelYear
 * Honda ->   2017 civic
 * Honda ->   2016 civic
 * Honda ->   2015 accord
 */
@Entity
@AttributeOverride(name = "id", column=@Column(name = "vehicle_id"))
@Immutable
public class Vehicle extends AbstractEntity {

    @Column(name = "make", unique = true)
    String make;

    @OneToMany(mappedBy = "vehicle")
    List<ModelYear> modelYear;

    public String getMake() {
        return make;
    }

    public List<ModelYear> getModelYear() {
        return modelYear;
    }
}
