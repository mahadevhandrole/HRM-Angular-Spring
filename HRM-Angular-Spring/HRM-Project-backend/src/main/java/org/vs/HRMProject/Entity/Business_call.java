package org.vs.HRMProject.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="business_call")
public class Business_call {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch=FetchType.LAZY,targetEntity = Business_info.class)
	//@JoinColumn(name="b_id",insertable = false,updatable = false)
	private Business_info b;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="duplicatedate")
	private Date duplicateDate;
	
	@Column(name="msg")
	private String message;
	
	@Column(name="nxt_date")
	private Date nextDate;
	
	@Column(name="status")
	private String status;
	
}
