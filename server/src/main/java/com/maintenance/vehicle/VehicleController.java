package com.maintenance.vehicle;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/vehicle")
public class VehicleController {

    private VehicleRepo vehicleRepo;

    VehicleController(VehicleRepo vehicleRepo) {
        this.vehicleRepo = vehicleRepo;
    }

    /**
     * @return all vehicle makes in database
     */
    @GetMapping(produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<String>> findAllVehicleMakes() {
        List<String> makes = this.vehicleRepo.findAllVehicleMakes();
        if (makes.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(makes);
        }
    }

    /**
     * @param make search based on the vehicle make
     * @return all models associated with the make
     */
    @GetMapping(path = "/{make}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<String>> findAllVehicleModelByMake(@PathVariable("make") String make) {
        List<String> models = this.vehicleRepo.findAllModelsByMake(make);
        if (models.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(models);
        }
    }

    /**
     * @param make vehicle make
     * @param model vehicle model
     * @return all years associated with the make and model
     * TODO(scottshidlovsky) might need to revamp this endpoint. Is this RESTFUL?
     */
    @GetMapping(path = "/{make}/{model}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<List<Integer>> findAllYearByModel(@PathVariable("make") String make, @PathVariable("model") String model) {
        List<Integer> years = this.vehicleRepo.findAllYearByMakeAndModel(make, model);
        if (years.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(years);
        }
    }

    /**
     * @param make vehicle make
     * @param model vehicle model
     * @param year vehicle year
     * @return vehicle entity if found
     */
    @GetMapping(path = "/{make}/{model}/{year}", produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<Vehicle> findVehicle(
            @PathVariable("make") String make,
            @PathVariable("model") String model,
            @PathVariable("year") int year
    ) {
        return this.vehicleRepo.findVehicle(make, model, year).map(
                v -> ResponseEntity.ok().body(v)
        ).orElseGet(
                () -> ResponseEntity.notFound().build()
        );
    }

}
