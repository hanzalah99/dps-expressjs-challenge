import db from '../services/db.service';
import { Report } from '../models/reportsModel';
import { countWordOccurrences } from "../utils/textUtils";
import { v4 as uuidv4 } from 'uuid';

const MIN_OCCURRENCES = 3; // Changeable threshold

// Create new report in database

export const createReport = (text: string, projectId: string) => {
    const id = uuidv4();
    const result = db.run(
        'INSERT INTO reports (id, text, projectid) VALUES (@id, @text, @projectId)',
        { id, text, projectId }
    );
    return result;
};

// Get all reports from database

export const getAllReports = (): Report[] => {
    const result = db.query('SELECT * FROM reports') as Report[];
    return result;
};

// Get report by ID form database

export const getReportById = (id: string): Report[] => {
    const result = db.query('SELECT * FROM reports WHERE id = :id', { id }) as Report[];
    return result;
};

// Get report from project_id from database

export const getReportByProjectId = (projectId: string): Report[] => {
    const result = db.query('SELECT * FROM reports WHERE projectid = :projectId', { projectId }) as Report[];
    return result;
};

// Get reports with repeated words from database

export const getReportsWithRepeatedWord = (word: string) : Report[] => {
    const result = db.query('SELECT * FROM reports') as Report[];
    return result.filter((report: any) => countWordOccurrences(report.text, word) >= MIN_OCCURRENCES);
};

// Update report in database

export const updateReport = (id: string, text: string, projectid: string) => {
    const result = db.run(
        'UPDATE reports SET text = @text, projectid = @projectid WHERE id = @id',
        { id, text, projectid }
    );
    return result;
};

// Delete report in database

export const deleteReport = (id: string) => {
    const result = db.run('DELETE FROM reports WHERE id = :id', { id });
    return result;
};

