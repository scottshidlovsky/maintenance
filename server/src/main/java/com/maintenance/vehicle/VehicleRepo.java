package com.maintenance.vehicle;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Vehicles will be feed in so just need custom accessor data functions
 */
public interface VehicleRepo extends Repository<Vehicle, Integer> {
    @Query(value = "select v.make from Vehicle v")
    List<String> findAllVehicleMakes();
}
