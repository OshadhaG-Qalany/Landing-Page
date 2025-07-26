import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Calendar, 
  Users, 
  Clock,
  Star,
  Archive,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import toast from 'react-hot-toast';

const Projects = () => {
  const { state, actions } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectMenu, setShowProjectMenu] = useState(null);

  // Sample projects if none exist
  const sampleProjects = [
    {
      id: 1,
      title: 'Mobile App Redesign',
      description: 'Complete redesign of the mobile application with modern UI/UX principles',
      status: 'active',
      priority: 'high',
      progress: 75,
      createdAt: '2024-01-15',
      dueDate: '2024-02-28',
      teamMembers: ['Alice', 'Bob', 'Charlie'],
      tags: ['Design', 'Mobile', 'UI/UX']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Build a scalable e-commerce platform with payment integration',
      status: 'active',
      priority: 'high',
      progress: 45,
      createdAt: '2024-01-10',
      dueDate: '2024-03-15',
      teamMembers: ['David', 'Emma'],
      tags: ['Development', 'E-commerce', 'Backend']
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      description: 'Digital marketing campaign for Q2 product launch',
      status: 'completed',
      priority: 'medium',
      progress: 100,
      createdAt: '2023-12-20',
      dueDate: '2024-01-31',
      teamMembers: ['Frank', 'Grace', 'Henry'],
      tags: ['Marketing', 'Campaign', 'Digital']
    }
  ];

  const projects = state.dashboardData.projects.length > 0 ? state.dashboardData.projects : sampleProjects;

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    tags: ''
  });

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterBy === 'all' || project.status === filterBy;
    
    return matchesSearch && matchesFilter;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'name':
        return a.title.localeCompare(b.title);
      case 'progress':
        return b.progress - a.progress;
      case 'dueDate':
        return new Date(a.dueDate) - new Date(b.dueDate);
      default:
        return 0;
    }
  });

  const handleCreateProject = () => {
    if (!newProject.title.trim()) {
      toast.error('Project title is required');
      return;
    }

    const project = {
      ...newProject,
      tags: newProject.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      teamMembers: [],
      progress: 0
    };

    actions.addProject(project);
    setNewProject({ title: '', description: '', priority: 'medium', dueDate: '', tags: '' });
    setShowCreateModal(false);
    toast.success('Project created successfully!');
  };

  const handleDeleteProject = (id) => {
    actions.deleteProject(id);
    setShowProjectMenu(null);
    toast.success('Project deleted successfully!');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'on-hold': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-qalany-navy dark:text-white">Projects</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and track all your projects in one place
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowCreateModal(true)}
          className="mt-4 lg:mt-0 bg-qalany-orange hover:bg-yellow-400 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 shadow-glow-orange transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </motion.button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700"
      >
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
            />
          </div>

          {/* Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white px-3 py-2 rounded-lg focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Name A-Z</option>
              <option value="progress">Progress</option>
              <option value="dueDate">Due Date</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            {/* Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-qalany-navy dark:text-white group-hover:text-qalany-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowProjectMenu(showProjectMenu === project.id ? null : project.id)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>

                  {/* Project Menu */}
                  <AnimatePresence>
                    {showProjectMenu === project.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 py-2 z-50"
                      >
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2">
                          <Edit className="w-4 h-4" />
                          <span>Edit Project</span>
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2">
                          <Archive className="w-4 h-4" />
                          <span>Archive</span>
                        </button>
                        <hr className="my-1 border-gray-200 dark:border-gray-600" />
                        <button 
                          onClick={() => handleDeleteProject(project.id)}
                          className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Status and Priority */}
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                  {project.priority} priority
                </span>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Progress</span>
                  <span className="text-sm font-medium text-qalany-orange">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-qalany-orange to-yellow-400 h-2 rounded-full"
                  />
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(project.dueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.teamMembers?.length || 0}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-qalany-light-gray dark:bg-gray-700 text-qalany-navy dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-qalany-light-gray dark:bg-gray-700 text-qalany-navy dark:text-gray-300 text-xs rounded-full">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {sortedProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-qalany-light-gray dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-qalany-navy dark:text-white mb-2">No projects found</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchTerm ? 'Try adjusting your search terms' : 'Get started by creating your first project'}
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-qalany-orange hover:bg-yellow-400 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Create Project
          </button>
        </motion.div>
      )}

      {/* Create Project Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowCreateModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-lg w-full p-6"
            >
              <h3 className="text-xl font-bold text-qalany-navy dark:text-white mb-6">Create New Project</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all resize-none"
                    placeholder="Enter project description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      value={newProject.priority}
                      onChange={(e) => setNewProject({...newProject, priority: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={newProject.dueDate}
                      onChange={(e) => setNewProject({...newProject, dueDate: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newProject.tags}
                    onChange={(e) => setNewProject({...newProject, tags: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-qalany-orange focus:border-transparent transition-all"
                    placeholder="e.g., Design, Mobile, UI/UX"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end space-x-4 mt-6">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  className="bg-qalany-orange hover:bg-yellow-400 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;