package com.example.ProductManagement.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Buyer")
public class Buyer {
	@Id			
	@Column(name="id")
	private int id;
	
	@Column(name="imageurl")
	private String imageurl;
	
	@Column(name="name")
	private String name;
	
	@Column(name="unitprice")
	private float unitprice;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public float getUnitprice() {
		return unitprice;
	}

	public void setUnitprice(float unitprice) {
		this.unitprice = unitprice;
	}

	public Buyer() {
		
		// TODO Auto-generated constructor stub
	}

	public Buyer(int id, String imageurl, String name, float unitprice) {
		this.id = id;
		this.imageurl = imageurl;
		this.name = name;
		this.unitprice = unitprice;
	}

	@Override
	public String toString() {
		return "Buyer [id=" + id + ", imageurl=" + imageurl + ", name=" + name + ", unitprice=" + unitprice + "]";
	}
	
	

}
