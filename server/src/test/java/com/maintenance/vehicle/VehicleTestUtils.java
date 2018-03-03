package com.maintenance.vehicle;

import java.lang.reflect.Field;

public class VehicleTestUtils {

    public static int VEHICLE_ID_IN_TEST_DATA = 1;

    /**
     * Utility for creating a mock vehicle. Since vehicle is immutable we don't put setters on it. Instead of adding
     * setters just for unit test we use hacky reflection
     */
    public static Vehicle getMockVehicle(int id, String make, String model, int year) throws Exception {
        Vehicle vehicleMock = new Vehicle();
        Field idField = Vehicle.class.getSuperclass().getDeclaredField("id");
        idField.setAccessible(true);
        idField.set(vehicleMock, id);

        Field modelField = Vehicle.class.getDeclaredField("model");
        modelField.setAccessible(true);
        modelField.set(vehicleMock, model);

        Field makeField = Vehicle.class.getDeclaredField("make");
        makeField.setAccessible(true);
        makeField.set(vehicleMock, make);

        Field yearField = Vehicle.class.getDeclaredField("year");
        yearField.setAccessible(true);
        yearField.set(vehicleMock, year);

        return vehicleMock;
    }
}
