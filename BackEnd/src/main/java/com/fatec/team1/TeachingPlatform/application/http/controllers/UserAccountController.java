package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.dto.UserAccountDTO;
import com.fatec.team1.TeachingPlatform.application.services.UserAccountService;
import com.fatec.team1.TeachingPlatform.domain.AccountRole;
import com.fatec.team1.TeachingPlatform.domain.UserAccount;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Controller
public class UserAccountController implements WebMvcConfigurer {

    private final UserAccountService profileService;

    private final String viewFolder = "userAccount/";


    public UserAccountController(UserAccountService profileService) {
        this.profileService = profileService;
    }

    @GetMapping("/user-account/new")
    public String newProfile(Model model) {
        UserAccount userAccount = new UserAccount();
        model.addAttribute("user", userAccount);
        model.addAttribute("availableRoles", AccountRole.values());
        return viewFolder + "new";
    }

    @RequestMapping("/user-account/edit/{id}")
    public String editProfile(@PathVariable(name = "id") Long id, Model model) {
        UserAccount userAccount = profileService.findById(id);
        model.addAttribute("userAccount", userAccount);
        return viewFolder + "edit";
    }

    @RequestMapping(value = "/user-account/edit", method = RequestMethod.POST)
    public String editProfile(@ModelAttribute("userAccount") UserAccount userAccount) {
        UserAccount userAccount1 = profileService.findById(userAccount.getId());
        userAccount1.setEmail(userAccount.getEmail());
        userAccount1.setName(userAccount.getName());
        profileService.save(userAccount1);
        return "redirect:/user-account/list";
    }

    @RequestMapping("/user-account/list")
    public String listProfile(Model model) {
        List<UserAccountDTO> profileList = profileService.listAll();
        model.addAttribute("profileList", profileList);

        return viewFolder + "list";
    }

    @RequestMapping(value = "user-account/save", method = RequestMethod.POST)
    public String saveProfile(@ModelAttribute("user") UserAccount userAccount) {
        profileService.save(userAccount);

        return "redirect:/user-account/list";
    }

    @RequestMapping(value = "user-account/delete/{id}", method = RequestMethod.GET)
    public String deleteProfile(@PathVariable("id") Long id) {
        profileService.delete(id);
        return "redirect:/user-account/list";
    }
}
