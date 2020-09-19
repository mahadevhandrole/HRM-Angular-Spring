package org.vs.HRMProject.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.vs.HRMProject.Entity.Business_info;

@CrossOrigin("http://localhost:4200")
public interface Business_info_Repository extends JpaRepository<Business_info, Integer> {
	
	Page<Business_info> findByid(@RequestParam("id") int id,Pageable pageable);
	Page<Business_info> findByNameContaining(@RequestParam("name") String name, Pageable pageable);
	Page<Business_info> findByStatusContaining(@RequestParam("status") String status, Pageable pageable);
	

}
