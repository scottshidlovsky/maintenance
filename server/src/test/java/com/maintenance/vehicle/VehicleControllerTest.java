package com.maintenance.vehicle;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;

import static org.mockito.Mockito.when;

/**
 * Verify vehicle controller
 */
@WebMvcTest(value = VehicleController.class)
@RunWith(SpringRunner.class)
public class VehicleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    VehicleRepo vehicleRepo;

    /**
     * Verify Endpoint returns correct content type, status and all models returned from DB
     */
    @Test
    @WithMockUser
    public void findAllVehicleMakes() throws Exception {

        when(this.vehicleRepo.findAllVehicleMakes())
                .thenReturn(Arrays.asList("Honda", "BMW"));

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("@").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("@[0]").value("Honda"))
                .andExpect(MockMvcResultMatchers.jsonPath("@[1]").value("BMW"));
    }

    /**
     * Verify Endpoint returns correct content type, status and all models returned from DB based on make
     */
    @Test
    @WithMockUser
    public void findAllVehicleModelByMake() throws Exception {
        when(this.vehicleRepo.findAllModelsByMake("honda")).thenReturn(Arrays.asList("Civic", "Accord"));

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("@").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("@[0]").value("Civic"))
                .andExpect(MockMvcResultMatchers.jsonPath("@[1]").value("Accord"));
    }

    /**
     * Verify Endpoint returns 404 when no results are found for make
     */
    @Test
    @WithMockUser
    public void findAllVehicleMakesEmpty() throws Exception {
        when(this.vehicleRepo.findAllModelsByMake("honda")).thenReturn(Arrays.asList());

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    /**
     * Verify Endpoint returns correct content type, status and all model years returned from DB
     */
    @Test
    @WithMockUser
    public void findAllVehicleYearsByMakeModel() throws Exception {
        when(this.vehicleRepo.findAllYearByMakeAndModel("honda", "civic")).thenReturn(Arrays.asList(2016, 2018));

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda/civic"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("@").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("@[0]").value(2016))
                .andExpect(MockMvcResultMatchers.jsonPath("@[1]").value(2018));
    }

    /**
     * Verify endpoint returns 404 when no results are found for specific make and model
     */
    @Test
    @WithMockUser
    public void findAllVehicleYearsByMakeModelEmpty() throws Exception {
        when(this.vehicleRepo.findAllYearByMakeAndModel("honda", "civic")).thenReturn(Collections.emptyList());

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda/civic"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    /**
     * Verify Endpoint returns correct content type, status and all model years returned from DB
     */
    @Test
    @WithMockUser
    public void findVehicleByMakeModelYear() throws Exception {

        Vehicle vehicleMock = VehicleTestUtils.getMockVehicle(1, "honda", "civic", 2018);
        Optional<Vehicle> vehicle = Optional.of(vehicleMock);
        when(this.vehicleRepo.findVehicle("honda", "civic", 2018)).thenReturn(vehicle);

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda/civic/2018"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.make").value("honda"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.model").value("civic"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.year").value(2018));
    }

    /**
     * Verify endpoint returns 404 when no results are found for specific make, model, year
     */
    @Test
    @WithMockUser
    public void findVehicleEmpty() throws Exception {
        when(this.vehicleRepo.findVehicle("honda", "civic", 2018)).thenReturn(Optional.empty());

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/honda/civic/2018"))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

}