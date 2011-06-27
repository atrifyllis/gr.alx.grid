package gr.alx.grid.model;

import java.util.ArrayList;

public class GridRowCollection {

	public GridRowCollection() {
		gridRowList = new ArrayList<GridRow>();
	}
	private ArrayList<GridRow> gridRowList;

	public void setGridRowList(ArrayList<GridRow> gridRowList) {
		this.gridRowList = gridRowList;
	}

	public ArrayList<GridRow> getGridRowList() {
		return gridRowList;
	}
	public void addRow(GridRow row){
		gridRowList.add(row);
	}
}
