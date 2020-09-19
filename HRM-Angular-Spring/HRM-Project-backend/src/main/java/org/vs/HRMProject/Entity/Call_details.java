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

import org.hibernate.annotations.CreationTimestamp;

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
@Table(name="call_details")
public class Call_details {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne(fetch=FetchType.LAZY,targetEntity = Student_info.class)
	//@JoinColumn(name="s_id",insertable = false,updatable = false)
	//@JsonIgnore
	private Student_info s;
	
	@Column(name="date")
	@CreationTimestamp
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
