package com.maintenance.vehicle;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/vehicle")
public class VehicleController {

    private VehicleRepo vehicleRepo;

    VehicleController(VehicleRepo vehicleRepo) {
        this.vehicleRepo = vehicleRepo;
    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<String> findAllVehicleMakes() {
        return this.vehicleRepo.findAllVehicleMakes();
    }

    @GetMapping(path = "/make/{make}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public List<String> findAllVehicleModelByMake(@PathVariable("make") String make) {
        return this.vehicleRepo.findAllModelsByMake(make);
    }

//    TODO(scottshidlovsky) might need to revamp this endpoint. Is this RESTFUL?
//    @GetMapping(path = "/make/{make}/model/{model}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
//    public List<Integer> findAllYearByModel(@PathVariable("make") String make, @PathVariable("model") String model) {
//        return this.modelYearRepo.findYearsByMakeAndModel(make, model);
//    }

}
