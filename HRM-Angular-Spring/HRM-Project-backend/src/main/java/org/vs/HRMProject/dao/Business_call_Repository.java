package org.vs.HRMProject.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.vs.HRMProject.Entity.Business_call;
@CrossOrigin("http://localhost:4200")
public interface Business_call_Repository extends JpaRepository<Business_call, Integer> {
	
	Page<Business_call> findByid(@RequestParam("id") int id, Pageable pageable);

}
