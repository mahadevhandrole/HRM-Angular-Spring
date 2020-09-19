package org.vs.HRMProject.Entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="business_info")
public class Business_info 
{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
   // @OneToOne(cascade=CascadeType.ALL,mappedBy="c_id")
	//private Business_contact Business_contacts;
    //ArrayList<Business_contact> client=new ArrayList();
	
	@Column(name="b_name")
	private String name;
	
	@Column(name="address")
	private String address;
	
	@Column(name="date")
	private Date date;
	
	@Column(name="status")
	private String status;
	
	@Column(name="b_type")
	private String b_type;
	
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
	
	/*public Business_info() {
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getB_type() {
		return b_type;
	}

	public void setB_type(String b_type) {
		this.b_type = b_type;
	}

	public Business_info(int id, String name, String address, Date date, int status, String b_type) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.date = date;
		this.status = status;
		this.b_type = b_type;
	}

	@Override
	public String toString() {
		return "Business_info [id=" + id + ", name=" + name + ", address=" + address + ", date=" + date
				+ ", status=" + status + ", b_type=" + b_type + "]";
	}
	
	*/
	
}
