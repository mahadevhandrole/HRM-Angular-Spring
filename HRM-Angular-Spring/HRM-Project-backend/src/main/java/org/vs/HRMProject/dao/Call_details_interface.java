package org.vs.HRMProject.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.vs.HRMProject.Entity.Call_details;

@CrossOrigin("http://localhost:4200")
public interface Call_details_interface extends JpaRepository<Call_details, Integer> {

	Page<Call_details> findByid(@RequestParam("id") int id,Pageable pageable);
	
}
