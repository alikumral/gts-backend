const { StatusCodes } = require('http-status-codes');
const Company = require('../models/Company');

exports.listCompanies = async (_req, res) => {
  try {
    const companies = await Company.find()
      .populate('address craneAds members reviews');
    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to list companies' });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(StatusCodes.CREATED).json(company);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to create company', details: err.message });
  }
};

exports.getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id)
      .populate('address craneAds members reviews');
    if (!company) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to fetch company' });
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).populate('address craneAds members reviews');
    if (!company) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
    res.json(company);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).json({ error: 'Failed to update company', details: err.message });
  }
};

exports.deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(StatusCodes.NOT_FOUND).json({ error: 'Company not found' });
    res.status(StatusCodes.NO_CONTENT).end();
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Failed to delete company' });
  }
};
