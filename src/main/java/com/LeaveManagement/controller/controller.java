package com.LeaveManagement.controller;


import com.LeaveManagement.Dto.LogInDTO;
import com.LeaveManagement.Dto.UserDTO;
import com.LeaveManagement.Entity.User;
import com.LeaveManagement.Service.UserService;
import com.LeaveManagement.Service.impl.UserImpl;
import com.LeaveManagement.response.LogInResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/user")
public class controller {


    @Autowired
    private UserService userService;


    @Autowired
    private UserImpl userImpl;



    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO userDTO) {
        userDTO.setGithub("");
        userDTO.setSkills("");
        userDTO.setWebsite("");
        userDTO.setLinkedin("");
        userDTO.setEducation("");
        userDTO.setTele("");
        userDTO.setDescription("");
        userDTO.setJob("");
        userDTO.setLastname("");
        userDTO.setFirstname("");





        String Id = userService.addUser(userDTO);
        return Id;

    }


    @PostMapping(path="/login")
    public ResponseEntity<?> loginUser(@RequestBody LogInDTO logInDTO) {
        LogInResponse  logInResponse = userService.loginUser(logInDTO);
        return ResponseEntity.ok(logInResponse);
    }
    @GetMapping(path="/get")
    public List<User> getAllUser(){
        return  userImpl.getAllUsers();
    }


    @GetMapping(path="/userid/{Id}")
    public User getUserById(@PathVariable int Id){
        return userImpl.GetUserById(Id);
    }


    @PutMapping(path = "/update/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody UserDTO userDTO) {
        userService.updateUser(id,userDTO);
        return ResponseEntity.ok("User updated successfully");
    }

    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }




}
