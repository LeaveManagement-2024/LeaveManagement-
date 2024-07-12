package com.LeaveManagement.controller;
import com.LeaveManagement.Entity.Profiles;
import com.LeaveManagement.Service.GradeService;
import com.LeaveManagement.Service.impl.ProfileImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("Profiles")
public class ProfileController {
    @Autowired
    private GradeService.ProfileService profileService;
    @Autowired
    private ProfileImpl profileImpl;

    @PostMapping(path = "/saveProfile")
    public  Long saveProfile(@RequestBody Profiles profilee){

        Long id =profileService.addProfile(profilee);
        return id;

    }
    @GetMapping(path="/getProfiles")
    public List<Profiles> getAllProfile(){
        return  profileService.getAllProfile();
    }

    @GetMapping(path="/getProfileById/{Id}")
    public Profiles getProfileById(@PathVariable Long Id){
        return profileService.GetProfileById(Id);
    }
    @PutMapping(path = "/updateProfile/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Profiles profile) {
       profileService.updateProfile(id,profile);
        return ResponseEntity.ok("Profile updated successfully");
    }

    @DeleteMapping(path = "/deleteProfile/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        profileService.deleteProfile(id);
        return ResponseEntity.ok("Profile deleted successfully");
    }


}


