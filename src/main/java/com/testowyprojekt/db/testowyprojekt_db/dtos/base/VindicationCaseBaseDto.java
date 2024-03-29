/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dbafeb029bdd95510990bea
*
* You will get 10% discount for each one of your friends
* 
*/
package com.testowyprojekt.db.testowyprojekt_db.dtos.base;

/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
                                                                                   
 * DO NOT EDIT THIS FILE!! 
 *
 *  FOR CUSTOMIZE VindicationCaseBaseDto PLEASE EDIT ../VindicationCaseDto.java
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER CODE GENERATION --
 * 
 */
 

/**
 * This is the dto of VindicationCase object
 * 
 */

import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.math.BigDecimal;

import com.testowyprojekt.db.testowyprojekt_db.entity.VindicationCase;
// Import relations
import com.testowyprojekt.db.testowyprojekt_db.dtos.infos.DebtorInfo;



import com.testowyprojekt.db.testowyprojekt_db.dtos.infos.DocumentInfo;


public class VindicationCaseBaseDto {
	
	private Long _id;
	
	// Attributes
    private BigDecimal ActualDebt;
    private Date AddDate;
    private BigDecimal StartingDebt;
	
	// Relations Debtor
	private Long Debtor;
	
	
	// Relations m:m Document
	private List<String> Document = new ArrayList<>();
	
	
	public Long get_id() {
		return _id;
	}

	public void set_id(Long id) {
		this._id = id;
	}
	
	public BigDecimal getActualDebt() {
		return ActualDebt;
	}

	public void setActualDebt(BigDecimal ActualDebt) {
		this.ActualDebt = ActualDebt;
	}
	public Date getAddDate() {
		return AddDate;
	}

	public void setAddDate(Date AddDate) {
		this.AddDate = AddDate;
	}
	public BigDecimal getStartingDebt() {
		return StartingDebt;
	}

	public void setStartingDebt(BigDecimal StartingDebt) {
		this.StartingDebt = StartingDebt;
	}
    
	public void setDebtor(DebtorInfo Debtor) {
		this.Debtor = Debtor.get_id();
	}

	public Long getDebtor() {
		return Debtor;
	}
	

    
	
	public List<String> getDocument() {
		return this.Document;
	}

	public void setDocument(List<DocumentInfo> Document) {
		Document.forEach(actor -> {
			this.Document.add(String.valueOf(actor.get_id()));
		});
	}

	
}