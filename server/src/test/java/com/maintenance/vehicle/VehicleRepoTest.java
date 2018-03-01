package com.maintenance.vehicle;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Vehicles are read only so use hardcoded data from the data.sql file to verify repo works correctly
 */
@DataJpaTest
@RunWith(SpringRunner.class)
public class VehicleRepoTest {

    @Autowired
    private VehicleRepo repository;

    /**
     * Verify we get all vehicle makes in the DB
     */
    @Test
    public void testFindAllVehicleMakes() {
        List<String> makes = this.repository.findAllVehicleMakes();
        assertEquals(makes.size(), 2);
        assertTrue(makes.containsAll(Arrays.asList("Honda", "Ford")));
    }

    /**
     * Verify we get all vehicle models using it's make
     */
    @Test
    public void testFindAllModelsByMake() {
        List<String> models = this.repository.findAllModelsByMake("Honda");
        assertEquals(models.size(), 3);
        assertTrue(models.containsAll(Arrays.asList("Civic", "Accord", "CRV")));

        models = this.repository.findAllModelsByMake("Ford");
        assertEquals(models.size(), 3);
        assertTrue(models.containsAll(Arrays.asList("Focus", "Mustang", "Explorer")));
    }

    /**
     * Verify if we pass an invalid make we get no results
     */
    @Test
    public void testFindAllModelsByMakeEmpty() {
        List<String> models = this.repository.findAllModelsByMake("Invalid");
        assertEquals(models.size(), 0);
    }

    /**
     * Verify we get all vehicle years for the make and model
     */
    @Test
    public void testFindAllYearByMakeAndModel() {
        List<Integer> years = this.repository.findAllYearByMakeAndModel("Honda", "Civic");
        assertEquals(years.size(), 2);
        assertTrue(years.containsAll(Arrays.asList(2018, 2016)));
    }

    /**
     * Verify we get no results when the make or model is invalid
     */
    @Test
    public void testFindAllYearByMakeAndModelEmpty() {
        List<Integer> years = this.repository.findAllYearByMakeAndModel("Invalid", "Civic");
        assertEquals(years.size(), 0);

        years = this.repository.findAllYearByMakeAndModel("Honda", "Invalid");
        assertEquals(years.size(), 0);
    }

}
