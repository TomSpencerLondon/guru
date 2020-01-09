package com.codurance.guru.craftspeople;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CraftspeopleService {

    @Autowired
    private CraftspeopleRepository repository;

    public Craftsperson retrieveCraftsperson(Integer craftspersonId) {
        return repository.findById(craftspersonId).orElse(new Craftsperson());
    }

    public List<Craftsperson> retrieveAllCraftsperson() {
        return repository.findAll(Sort.by("firstName"));
    }

    public void setMentee(int mentorId, int menteeId) {
        Craftsperson mentor = repository.findById(mentorId).get();
        Craftsperson mentee = repository.findById(menteeId).get();

        List<Craftsperson> currentMentees = mentor.getMentees();

        if(!currentMentees.contains(mentee)){
            currentMentees.add(mentee);
        }

        mentor.setMentees(currentMentees);
        repository.save(mentor);
    }
}
