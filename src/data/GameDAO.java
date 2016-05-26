package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class GameDAO {

	@PersistenceContext
	EntityManager em;
	
	public List<GameEntities> getAll() {
//		CriteriaQuery<GameEntities> cq = em.getCriteriaBuilder().createQuery(GameEntities.class);
//		cq.select(cq.from(GameEntities.class));
//		List<GameEntities> allData = em.createQuery(cq).getResultList();
		List<GameEntities> allData = em.createNamedQuery("GameEntities.getAllScores").setMaxResults(10).getResultList();
		return allData;
	}
	
	public Boolean newScore(GameEntities gE){
		em.persist(gE);
		return true;
	}
	
}


