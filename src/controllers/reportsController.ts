import { Request, Response } from "express";
import * as reportService from '../services/reportsService';

// Create new Report after validating inputs

export const createReport = async (req: Request, res: Response) => {
    try {
        const { text, projectId } = req.body;
        if (!text || !projectId) {
            return res.status(400).json({ error: 'text and projectId are required' });
        }
        reportService.createReport(text, projectId);
        res.status(201).json({ text, projectId });
    } catch (error) {
        console.error('Create report error:', error);
        res.status(500).json({ error: 'Failed to create report' });
    }
};

// Get all Reports

export const getAllReports = async (req: Request, res: Response) => {
    try {
        const reports = reportService.getAllReports();
        res.status(200).json(reports);
    } catch (error) {
        console.error('Get all reports error:', error);
        res.status(500).json({ error: 'Failed to get all reports' });
    }
};

// Get Report by ID

export const getReportById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const report = reportService.getReportById(id);

        if (report.length === 0) {
            return res.status(404).json({ error: 'Report not found' });
        }

        res.status(200).json(report[0]);
    } catch (error) {
        console.error(`Failed to get report with ID ${req.params.id}:`, error);
        res.status(500).json({error: `Failed to get reoprt with ID ${req.params.id}`});
    }
};

// Get Report by project ID
export const getReportByProjectId = async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params;
        const report = reportService.getReportByProjectId(projectId);

        if (report.length === 0) {
            return res.status(404).json({ error: 'Reports not found' });
        }

        res.status(200).json(report);
    } catch (error) {
        console.error(`Failed to get report with ID ${req.params.id}:`, error);
        res.status(500).json({error: `Failed to get reoprt with ID ${req.params.id}`});
    }
};

// Get Reports with Repeated word. Special API endpoint

export const getReportsWithRepeatedWord  = async (req: Request, res: Response) => {
    try {
        const { word } = req.params;
        const report = reportService.getReportsWithRepeatedWord(word);

        if (report.length === 0) {
            return res.status(404).json({ message: `No report found with at least 3 occurances of ${req.params.word}` });
        }

        res.status(200).json(report);
    } catch (error) {
        console.error(`Failed to get report with word ${req.params.word}:`, error);
        res.status(500).json({
            error: `Failed to get reoprt with word ${req.params.word}`
        });
    }
};

// Update Report

export const updateReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { text, projectId } = req.body;
        const result = reportService.updateReport(id, text, projectId);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Report not found' });
        }

        res.status(200).json({ id, text, projectId });
    } catch (error) {
        console.error(`Failed to update report with ID ${req.params.id}:`, error);
        res.status(500).json({error: `Failed to update report with ID ${req.params.id}`});
    }
};

// Delete Report

export const deleteReport = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = reportService.deleteReport(id);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Report not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(`Failed to delete report with ID ${req.params.id}:`, error);
        res.status(500).json({error: `Failed to delete report with ID ${req.params.id}`});
    }
};