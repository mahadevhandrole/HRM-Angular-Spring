package org.vs.HRMProject.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Table(name="business_contact")
public class Business_contact {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int b_id;
	@Column(name="c_name")
	private String c_name;
	@Column(name="designation")
	private String designation;
	@Column(name="email")
	private String email;
	@Column(name="c_no1")
	private long contact_no1;
	@Column(name="c_no2")
	private long contact_no2;
	//@Column(name="c_id")
	
	@ManyToOne(fetch=FetchType.LAZY,targetEntity = Business_info.class)
	@JoinColumn(name="c_id",insertable = false,updatable = false)
	//@JsonIgnore
	private Business_info c;
	
	/*public Business_contact() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getC_name() {
		return c_name;
	}

	public void setC_name(String c_name) {
		this.c_name = c_name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getContact_no1() {
		return contact_no1;
	}

	public void setContact_no1(long contact_no1) {
		this.contact_no1 = contact_no1;
	}

	public long getContact_no2() {
		return contact_no2;
	}

	public void setContact_no2(long contact_no2) {
		this.contact_no2 = contact_no2;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public Business_contact(int id, String c_name, String designation, String email, long contact_no1, long contact_no2,
			int c_id) {
		super();
		this.id = id;
		this.c_name = c_name;
		this.designation = designation;
		this.email = email;
		this.contact_no1 = contact_no1;
		this.contact_no2 = contact_no2;
		this.c_id = c_id;
	}

	@Override
	public String toString() {
		return "Business_contact [id=" + id + ", c_name=" + c_name + ", designation=" + designation + ", email=" + email
				+ ", contact_no1=" + contact_no1 + ", contact_no2=" + contact_no2 + ", c_id=" + c_id + "]";
	}
	
	*/

}
