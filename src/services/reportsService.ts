import db from '../services/db.service';
import { Report } from '../models/reportsModel';
import { v4 as uuidv4 } from 'uuid';

export const createReport = (text: string, projectId: string) => {
    const id = uuidv4();
    const result = db.run(
        'INSERT INTO reports (id, text, projectid) VALUES (@id, @text, @projectId)',
        { id, text, projectId }
    );
    return result;
};

export const getAllReports = (): Report[] => {
    const result = db.query('SELECT * FROM reports') as Report[];
    return result;
};

export const getReportById = (id: string): Report[] => {
    const result = db.query('SELECT * FROM reports WHERE id = :id', { id }) as Report[];
    return result;
};

export const getReportByProjectId = (projectId: string): Report[] => {
    const result = db.query('SELECT * FROM reports WHERE projectid = :projectId', { projectId }) as Report[];
    return result;
};

export const updateReport = (id: string, text: string, projectid: string) => {
    const result = db.run(
        'UPDATE reports SET text = @text, projectid = @projectid WHERE id = @id',
        { id, text, projectid }
    );
    return result;
};

export const deleteReport = (id: string) => {
    const result = db.run('DELETE FROM reports WHERE id = :id', { id });
    return result;
};

