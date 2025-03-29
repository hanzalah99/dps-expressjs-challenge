import db from '../services/db.service';
import { Project } from '../models/projectsModel';
import { v4 as uuidv4 } from 'uuid';

// Creating new project in database

export const createProject = (name: string, description: string) => {
  const id = uuidv4();
  const result = db.run(
    'INSERT INTO projects (id, name, description) VALUES (@id, @name, @description)',
    { id, name, description }
  );
  return result;
};

// Get all projects from database

export const getAllProjects = (): Project[] => {
  const result = db.query('SELECT * FROM projects') as Project[];
  return result;
};

// Get project by ID from database

export const getProjectById = (id: string): Project[] => {
  const result = db.query('SELECT * FROM projects WHERE id = :id', { id }) as Project[];
  return result;
};

// Update project in database

export const updateProject = (id: string, name: string, description: string) => {
  const result = db.run(
    'UPDATE projects SET name = @name, description = @description WHERE id = @id',
    { id, name, description }
  );
  return result;
};

// Delete project in database

export const deleteProject = (id: string) => {
  const result = db.run('DELETE FROM projects WHERE id = :id', { id });
  return result;
};