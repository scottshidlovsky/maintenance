package com.maintenance.vehicle;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/vehicle")
public class VehicleController {

    private VehicleRepo vehicleRepo;
    private ModelYearRepo modelYearRepo;

    VehicleController(VehicleRepo vehicleRepo,
                      ModelYearRepo modelYearRepo) {
        this.vehicleRepo = vehicleRepo;
        this.modelYearRepo = modelYearRepo;
    }

    @GetMapping(path = "", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<String> findAllVehicleMakes() {
        return this.vehicleRepo.findAllVehicleMakes();
    }

    @GetMapping(path = "/make/{make}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<String> findAllVehicleModelByMake(@PathVariable("make") String make) {
        return this.modelYearRepo.findModelByMake(make);
    }

    //TODO(scottshidlovsky) need to revamp this endpoint 
    @GetMapping(path = "/model/{model}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<Integer> findAllYearByModel(@PathVariable("model") String model) {
        return this.modelYearRepo.findYearByModel(model);
    }

}
