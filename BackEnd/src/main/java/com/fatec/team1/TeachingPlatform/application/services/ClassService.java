//package com.fatec.team1.TeachingPlatform.application.services;
//
//import com.fatec.team1.TeachingPlatform.application.repositories.ClassRepository;
//import com.fatec.team1.TeachingPlatform.domain.Class;
//import com.fatec.team1.TeachingPlatform.domain.UserAccount;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Service;
//
//import java.util.Collection;
//import java.util.List;
//
//@Service
//public class ClassService {
//
//    private final ClassRepository classRepository;
//    private final UserAccountService userAccountService;
//
//    public ClassService(ClassRepository classRepository,
//                        UserAccountService userAccountService) {
//        this.classRepository = classRepository;
//        this.userAccountService = userAccountService;
//    }
//
//    public void save(Class newClass) {
//        validateClassProfessor(newClass);
//        classRepository.save(newClass);
//    }
//
//    public void enroll(Class currentClass, UserAccount newStudent) {
//        validateClassProfessor(currentClass);
//
//        if (!newStudent.isStudent()) {
//            throw new IllegalArgumentException("Trying to enroll a non-student user to a class.");
//        }
//
//        UserAccount newStudentDB = userAccountService.findById(newStudent.getId());
//        newStudentDB.getEnrolledClasses().add(currentClass);
//        userAccountService.save(newStudentDB);
//    }
//
//    public Collection<Class> listClass(UserAccount userAccount) {
//        return userAccount.getEnrolledClasses();
//    }
//
//    public Class findById(Long id) {
//        return classRepository.findById(id).get();
//    }
//
//    public List<Class> listAll() {
//        return classRepository.findAll();
//    }
//
//    public void enroll(Class currentClass, Collection<UserAccount> students) {
//        students.forEach(userAccount -> enroll(currentClass, userAccount));
//    }
//
//    private void validateClassProfessor(Class newClass) {
//        UserAccount professor = userAccountService.findById(newClass.getProfessor());
//
//        if (!professor.isProfessor()) {
//            throw new IllegalArgumentException("User specified as professor is not a registered professor");
//        }
//
//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//        if (principal instanceof UserDetails) {
//            String username = ((UserDetails) principal).getUsername();
//            UserAccount currentUser = userAccountService.findByEmail(username);
//
//            if (!currentUser.equals(professor)) {
//                throw new IllegalArgumentException(
//                    "Professor trying to manage a class that belongs to another professor"
//                );
//            }
//        }
//    }
//}
