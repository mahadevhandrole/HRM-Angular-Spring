package org.vs.HRMProject.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.vs.HRMProject.Entity.Business_contact;
//@CrossOrigin("http://localhost:4200")
public interface Business_contact_Repository extends JpaRepository<Business_contact, Integer> {

}
