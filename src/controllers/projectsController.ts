import { Request, Response } from "express";
import * as projectService from '../services/projectsService';

export const createProject = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body;
        if (!name || !description) {
            return res.status(400).json({ error: 'Name and description are required' });
        }
        projectService.createProject(name, description);
        res.status(201).json({ name, description });
    } catch (error) {
        console.error('Create project error:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
};

export const getAllProjects = async (req: Request, res: Response) => {
    try {
        const projects = projectService.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        console.error('Get all projects error:', error);
        res.status(500).json({ error: 'Failed to get all projects' });
    }
};

export const getProjectById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const project = projectService.getProjectById(id);

        if (project.length === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json(project[0]);
    } catch (error) {
        console.error(`Failed to get project with ID ${req.params.id}:`, error);
        res.status(500).json({error: `Failed to get project with ID ${req.params.id}`});
    }
};

export const updateProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const result = projectService.updateProject(id, name, description);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(200).json({ id, name, description });
    } catch (error) {
        console.error(`Failed to update project with ID ${req.params.id}:`, error);
        res.status(500).json({
            error: `Failed to update project with ID ${req.params.id}`
        });
    }
};

export const deleteProject = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = projectService.deleteProject(id);

        if (result.changes === 0) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(`Failed to delete project with ID ${req.params.id}:`, error);
        res.status(500).json({
            error: `Failed to delete project with ID ${req.params.id}`
        });
    }
};