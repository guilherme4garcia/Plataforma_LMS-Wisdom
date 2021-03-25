package com.fatec.team1.TeachingPlatform.application.http.controllers;

import com.fatec.team1.TeachingPlatform.application.dto.UserAccountDTO;
import com.fatec.team1.TeachingPlatform.application.services.ClassService;
import com.fatec.team1.TeachingPlatform.application.services.UserAccountService;
import com.fatec.team1.TeachingPlatform.domain.AccountRole;
import com.fatec.team1.TeachingPlatform.domain.Class;
import com.fatec.team1.TeachingPlatform.domain.UserAccount;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class ClassController {

    private final ClassService classService;
    private final UserAccountService userAccountService;
    private final String viewFolder = "class/";

    public ClassController(ClassService classService,
                           UserAccountService userAccountService) {
        this.classService = classService;
        this.userAccountService = userAccountService;
    }

    @GetMapping("/class/new")
    public String newClass(Model model) {
        Class newClass = new Class();
        model.addAttribute("class", newClass);
        return viewFolder + "new";
    }

    @GetMapping("/class/{id}")
    public String classPage(@PathVariable(name = "id") Long id, Model model) {
        model.addAttribute("class", classService.findById(id));
        return viewFolder + "class_page";
    }

    @GetMapping("/class/{id}/enroll")
    public String showEnrollForm(Model model, @PathVariable("id") Long id) {
        List<UserAccountDTO> availableStudents = userAccountService.listAll(AccountRole.STUDENT);
        Class currentClass = classService.findById(id);

        model.addAttribute("availableStudents", availableStudents);
        model.addAttribute("currentClass", currentClass);

        return viewFolder + "enroll_form";
    }

    @PostMapping("/class/{id}/enroll")
    public String enrollStudents(@ModelAttribute("students") List<UserAccount> students, @PathVariable("id") Long id) {
        Class currentClass = classService.findById(id);
        classService.enroll(currentClass, students);

        return "redirect:/class/" + currentClass.getId();
    }

}
