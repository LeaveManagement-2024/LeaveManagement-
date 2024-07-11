package com.LeaveManagement.Service.impl;

import com.LeaveManagement.Dto.LogInDTO;
import com.LeaveManagement.Dto.UserDTO;
import com.LeaveManagement.Entity.User;
import com.LeaveManagement.Repo.UserRepo;
import com.LeaveManagement.Service.UserService;
import com.LeaveManagement.response.LogInResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserImpl implements UserService {

    private static final String UPLOAD_DIR = "/chemin/vers/votre/projet/images/";
    @Autowired
    private UserRepo userRepo;


    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public LogInResponse loginUser(LogInDTO logInDTO) {
        String msg ="";
        User user1 = userRepo.findByEmail(logInDTO.getEmail());
        if (user1 != null) {
            String password = logInDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(logInDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LogInResponse("login Success",true,user1.getId());
                }else {
                    return new LogInResponse("login Failed",false,0);
                }
            }else {
                return new LogInResponse("Password not match",false,-1);
            }
        }else {
            return new LogInResponse("Email Not Exist",false,-1);
        }
    }









    @Override
    public String addUser(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setSkills(userDTO.getSkills());
        user.setEducation(userDTO.getEducation());
        user.setGithub(userDTO.getGithub());
        user.setLinkedin(userDTO.getLinkedin());
        user.setWebsite(userDTO.getWebsite());
        user.setTele(userDTO.getTele());
        user.setJob(userDTO.getJob());
        user.setFirstname(userDTO.getFirstname());
        user.setLastname(userDTO.getLastname());
        user.setDescription(userDTO.getDescription());

        userRepo.save(user);
        return user.getUsername();
    }

    @Override
    public void updateUser(int id, UserDTO userDTO) {
        User userToUpdate = userRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        userToUpdate.setUsername(userDTO.getUsername());
        userToUpdate.setEmail(userDTO.getEmail());

        userToUpdate.setSkills(userDTO.getSkills());
        userToUpdate.setEducation(userDTO.getEducation());
        userToUpdate.setGithub(userDTO.getGithub());
        userToUpdate.setLinkedin(userDTO.getLinkedin());
        userToUpdate.setWebsite(userDTO.getWebsite());
        userToUpdate.setTele(userDTO.getTele());
        userToUpdate.setJob(userDTO.getJob());
        userToUpdate.setFirstname(userDTO.getFirstname());
        userToUpdate.setLastname(userDTO.getLastname());
        userToUpdate.setDescription(userDTO.getDescription());
        userRepo.save(userToUpdate);
    }


    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User GetUserById(int id){
        return userRepo.findById(id).get();
    }

    @Override
    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }








}
