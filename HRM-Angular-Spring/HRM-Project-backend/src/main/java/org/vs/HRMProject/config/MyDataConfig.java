package org.vs.HRMProject.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

@Configuration
public class MyDataConfig implements RepositoryRestConfigurer
{
	private EntityManager entityManager;
	
	public MyDataConfig(EntityManager theEntityManager)
	{
		entityManager=theEntityManager;
	}
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		
		exposeIds(config);
		//RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
	}
	private void exposeIds(RepositoryRestConfiguration config) {
		
		//get the list of all entity classes from the entity manager
		Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
		
		//create an array of the entity types
		List<Class> entityClasses = new ArrayList<Class>();
		
		// get the entity types for the entities
		for(EntityType tempEntityType:entities)
		{
			entityClasses.add(tempEntityType.getJavaType());
			
			
		}
		
		
		//expose the entity ids for the array of entity/domain types
		Class[] domainTypes=entityClasses.toArray(new Class[0]);
		
		config.exposeIdsFor(domainTypes);
		
	}
	

}
