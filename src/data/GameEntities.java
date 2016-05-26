package data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name="scoreBoard")

@NamedQueries({
	@NamedQuery(name = "GameEntities.getAllScores", query = "select g from GameEntities g order by g.score desc")})



public class GameEntities {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String score;
//	private String place;
	
	public GameEntities(){}

	public GameEntities(String name, String score) {
		super();
		this.name = name;
		this.score = score;
		//this.place = place;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

//	public String getPlace() {
//		return place;
//	}
//
//	public void setPlace(String place) {
//		this.place = place;
//	}

	public int getId() {
		return id;
	}
}
