package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import data.GameDAO;
import data.GameEntities;

@Controller
public class GameController {
	@Autowired
	GameDAO gameDAO;
	
	@ResponseBody
	@RequestMapping(path ="score",method = RequestMethod.GET)
	public List <GameEntities> getTest(){
		return gameDAO.getAll();
	}
	
	@ResponseBody
	@RequestMapping(path = "score", method = RequestMethod.PUT)
	public Boolean newScore(@RequestBody GameEntities gE){
		return gameDAO.newScore(gE);
	}
}
