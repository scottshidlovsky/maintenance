package com.maintenance.vehicle;

import org.junit.Test;
import org.junit.runner.RunWith;
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

import static org.mockito.Mockito.when;

@WebMvcTest(value = VehicleController.class)
@RunWith(SpringRunner.class)
public class VehicleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    VehicleRepo vehicleRepo;


    @Test
    @WithMockUser
    public void findAllVehicleMakes() throws Exception {

        when(this.vehicleRepo.findAllVehicleMakes())
                .thenReturn(Arrays.asList("Honda", "BMW"));

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("@").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("@[0]").value("Honda"))
                .andExpect(MockMvcResultMatchers.jsonPath("@[1]").value("BMW"));
    }

    @Test
    @WithMockUser
    public void findAllVehicleModelByMake() throws Exception {
//        when(this.modelYearRepo.findModelByMake("honda")).thenReturn(Arrays.asList("Civic", "Accord"));

        this.mockMvc.perform(MockMvcRequestBuilders.get("/vehicle/make/honda"))
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("@").isArray())
                .andExpect(MockMvcResultMatchers.jsonPath("@[0]").value("Civic"))
                .andExpect(MockMvcResultMatchers.jsonPath("@[1]").value("Accord"));
    }

}