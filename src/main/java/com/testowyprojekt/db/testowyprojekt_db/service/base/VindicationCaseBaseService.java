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
package com.testowyprojekt.db.testowyprojekt_db.service.base;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;


import com.testowyprojekt.db.testowyprojekt_db.entity.VindicationCase;

import com.testowyprojekt.db.testowyprojekt_db.entity.Debtor;

import com.testowyprojekt.db.testowyprojekt_db.entity.Document;

import com.testowyprojekt.db.testowyprojekt_db.repositories.VindicationCaseRepository;

@Service
@Transactional
public class VindicationCaseBaseService {

	
	@Autowired
	VindicationCaseRepository vindicationcaseRepository;


    // CRUD METHODS
    
    // CRUD - CREATE
    
	public VindicationCase insert(VindicationCase vindicationcase) {
		return vindicationcaseRepository.save(vindicationcase);
	}
	
	// CRUD - REMOVE
    
	public void delete(Long id) {
		vindicationcaseRepository.delete(id);
	}

    
    // CRUD - FIND BY Debtor

    public List<VindicationCase> findByDebtor(Debtor debtor) {
		return vindicationcaseRepository.findByDebtor(debtor);
	}
    
    
    
    
    public List<VindicationCase> findByDocument(Document document){
		return vindicationcaseRepository.findByDocument(document);
	}
    
	// CRUD - GET ONE
    	
	public VindicationCase getOne(Long id) {
		return vindicationcaseRepository.findOne(id);
	}

    	
    // CRUD - GET LIST
    	
	public List<VindicationCase> getAll() {
		List<VindicationCase> list = new ArrayList<>();
		vindicationcaseRepository.findAll().forEach(list::add);
		return list;
	}
	

}