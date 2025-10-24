const express = require('express');
const {
  listCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} = require('../controllers/company.controller');

const router = express.Router();

router.get('/', listCompanies);
router.post('/', createCompany);
router.get('/:id', getCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;
