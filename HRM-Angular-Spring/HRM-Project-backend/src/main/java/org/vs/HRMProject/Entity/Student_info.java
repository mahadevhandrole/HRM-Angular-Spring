package org.vs.HRMProject.Entity;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name="student_info")
public class Student_info {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	@Column(name="name")
	private String name;
	@Column(name="contact")
	private long contact_no1;
	@Column(name="extra_contact")
	private long contact_no2;
	@Column(name="profile")
	private String profile;
	@Column(name="passoutyr")
	private int passoutyear;
	@Column(name="qualification")
	private String qualification;
	@Column(name="stream")
	private String stream;
	@Column(name="per")
	private double percentage;
	@Column(name="email")
	private String email;
	@Column(name="gender")
	private String gender;
	@Column(name="expr")
	private String experience;
	@Column(name="ref")
	private String reference;
	@Column(name="date")
	private Date date;
	
	@Column(name="status")
	private String status;
	
 /*
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

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public int getPassoutyear() {
		return passoutyear;
	}

	public void setPassoutyear(int passoutyear) {
		this.passoutyear = passoutyear;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getStream() {
		return stream;
	}

	public void setStream(String stream) {
		this.stream = stream;
	}

	public double getPercentage() {
		return percentage;
	}

	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Student_info(int id, String name, long contact_no1, long contact_no2, String profile, int passoutyear,
			String qualification, String stream, double percentage, String email, String gender, String experience,
			String reference, Date date) {
		super();
		this.id = id;
		this.name = name;
		this.contact_no1 = contact_no1;
		this.contact_no2 = contact_no2;
		this.profile = profile;
		this.passoutyear = passoutyear;
		this.qualification = qualification;
		this.stream = stream;
		this.percentage = percentage;
		this.email = email;
		this.gender = gender;
		this.experience = experience;
		this.reference = reference;
		this.date = date;
	}

	@Override
	public String toString() {
		return "Student_info [id=" + id + ", name=" + name + ", contact_no1=" + contact_no1 + ", contact_no2="
				+ contact_no2 + ", profile=" + profile + ", passoutyear=" + passoutyear + ", qualification="
				+ qualification + ", stream=" + stream + ", percentage=" + percentage + ", email=" + email + ", gender="
				+ gender + ", experience=" + experience + ", reference=" + reference + ", date=" + date + "]";
	}
	public Student_info()
	{
		
	}
	
	*/
	
}
