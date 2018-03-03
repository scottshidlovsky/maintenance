package com.maintenance.vehicle;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Vehicles will be feed in so just need custom accessor data functions
 */
public interface VehicleRepo extends Repository<Vehicle, Integer> {
    /**
     * Retrieve all distinct vehicle makes
     * @return String value of vehicle makes
     */
    @Query(value = "select distinct v.make from Vehicle v")
    List<String> findAllVehicleMakes();

    /**
     * Retrieve all models for a particular vehicle make
     * @param make String value of the vehicle make
     * @return String value of all models of a vehicle make
     */
    @Query(value = "select distinct v.model from Vehicle v where v.make = :make")
    List<String> findAllModelsByMake(@Param("make") String make);

    /**
     * Retrieve all years for a particular vehicle make and model
     * @param make String value of the vehicle make
     * @param model String value of the vehicle model
     * @return List of years the make and model vehicle has
     */
    @Query(value = "select distinct v.year from Vehicle v where v.make = :make and v.model = :model")
    List<Integer> findAllYearByMakeAndModel(@Param("make") String make, @Param("model") String model);

    /**
     * Retrieve full vehicle object based on its make, model, year
     * @return vehicle if found otherwise empty optional
     */
    @Query(value = "select v from Vehicle v where v.make = :make and v.model = :model and v.year = :year")
    Optional<Vehicle> findVehicle(@Param("make") String make, @Param("model") String model, @Param("year") int year);

    /**
     * Retrieve vehicle based on internal id
     * @param id internal DB id
     * @return vehicle if found otherwise empty optional
     */
    Optional<Vehicle> findOne(Integer id);
}
