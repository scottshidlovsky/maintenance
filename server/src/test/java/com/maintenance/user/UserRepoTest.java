package com.maintenance.user;

import com.maintenance.vehicle.Vehicle;
import com.maintenance.vehicle.VehicleRepo;
import com.maintenance.vehicle.VehicleTestUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

import static org.junit.Assert.*;

@DataJpaTest
@RunWith(SpringRunner.class)
public class UserRepoTest {
    @Autowired
    private UserRepo repository;

    // Since vehicles are immutable we can't save one for this test.
    // Look up one in the vehicle repo.
    // TODO(scottshidlovsky) - look for way to improve this so the user repo unit tests don't rely on another repo
    @Autowired
    private VehicleRepo vehicleRepo;

    /**
     * Verify we can find a user by email
     */
    @Test
    public void findByEmail() {
        final String email = "scott@scott.com";
        this.repository.save(new User(email, Provider.FACEBOOK));
        Optional<User> notFound = this.repository.findByEmail("scott1@scott.com");
        assertFalse(notFound.isPresent());

        Optional<User> found = this.repository.findByEmail(email);
        assertTrue(found.isPresent());
        User actual = found.get();
        assertEquals(actual.getEmail(), email);
        assertEquals(actual.getProvider(), Provider.FACEBOOK);
    }

    /**
     * Verify we can vehicles to a user
     */
    @Test
    public void addNewVehicleToUser() {
        final Vehicle vehicle = this.vehicleRepo.findOne(VehicleTestUtils.VEHICLE_ID_IN_TEST_DATA).get();
        final String email = "scott@scott.com";
        User user = new User(email, Provider.FACEBOOK);
        UserVehicle userVehicle = new UserVehicle(vehicle, user);
        user.setVehicles(Collections.singleton(userVehicle));
        final User actualUser = this.repository.save(user);

        User actual = this.repository.findOne(user.getId());
        assertNotNull(actual);
        assertEquals(actual.getEmail(), email);
        assertEquals(actual.getVehicles().size(), 1);
        UserVehicle actualUserVehicle = actual.getVehicles().stream().findFirst().get();
        assertEquals(actualUserVehicle.getVehicle(), vehicle);

        UserVehicle userVehicle1 = new UserVehicle(vehicle, user);
        actual.addVehicle(userVehicle1);
        actual = this.repository.save(actual);

        User actualAfterAddition = this.repository.findOne(user.getId());
        assertNotNull(actualAfterAddition);
        assertEquals(actualAfterAddition.getVehicles().size(), 2);
        actualAfterAddition.getVehicles().stream().forEach(uv -> {
            assertEquals(uv.getVehicle(), vehicle);
            assertEquals(uv.getUser(), actualUser);
        });
    }

}