package gr.alx.grid;

import gr.alx.grid.model.GridRow;
import gr.alx.grid.model.GridRowCollection;

import org.slf4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * Handles requests for the application welcome page.
 */
@Controller

public class WelcomeController {

	private Logger logger = org.slf4j.LoggerFactory.getLogger(WelcomeController.class);

	/**
	 * Simply selects the welcome view to render by returning void and relying
	 * on the default request-to-view-translator.
	 */
	
	@RequestMapping(value="/welcome",method = RequestMethod.GET)
	public ModelAndView welcome() {
		
		ModelAndView mv = new ModelAndView();
		GridRowCollection gridRowList = new GridRowCollection();
		GridRow gridRow = new GridRow();
		for(int i=0;i<100;i++){
			gridRow = new GridRow(i,"alex"+i,"trif"+i);
			gridRowList.addRow(gridRow);
		}
		mv.addObject("gridRowList",gridRowList);
		logger.info("Welcome!");
		return mv;
	}
	
	@RequestMapping(value="/getGridPage",method = RequestMethod.GET)
	public @ResponseBody GridRowCollection getGridPage(@RequestParam String total,@RequestParam String page, @RequestParam String records){
		GridRowCollection gridRowList = new GridRowCollection();
		GridRow gridRow = new GridRow();
		int pageStep = Integer.parseInt(page)*100;
		for(int i=0+pageStep;i<100+pageStep;i++){
			gridRow = new GridRow(i,"alex"+i,"trif"+i);
			gridRowList.addRow(gridRow);
		}
		return gridRowList;
	}
}
