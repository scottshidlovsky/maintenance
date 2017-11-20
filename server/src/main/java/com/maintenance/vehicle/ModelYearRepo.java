package com.maintenance.vehicle;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ModelYearRepo extends Repository<ModelYear, Integer> {

    @Query(value = "select distinct m.model from ModelYear m where m.vehicle.make = :make")
    List<String> findModelByMake(@Param("make") String make);

    @Query(value = "select m.year from ModelYear m where m.model = :model")
    List<Integer> findYearByModel(@Param("model") String model);
}
