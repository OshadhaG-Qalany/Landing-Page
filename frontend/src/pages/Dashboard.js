import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  FolderKanban, 
  CheckCircle, 
  Plus,
  Calendar,
  Clock,
  Star
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useApp } from '../contexts/AppContext';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const { state, actions } = useApp();

  // Sample data for charts
  const analyticsData = [
    { name: 'Jan', projects: 12, tasks: 45, users: 23 },
    { name: 'Feb', projects: 19, tasks: 52, users: 31 },
    { name: 'Mar', projects: 25, tasks: 68, users: 42 },
    { name: 'Apr', projects: 32, tasks: 85, users: 56 },
    { name: 'May', projects: 28, tasks: 72, users: 48 },
    { name: 'Jun', projects: 35, tasks: 91, users: 65 },
  ];

  const projectStatusData = [
    { name: 'Active', value: 65, color: '#FCA311' },
    { name: 'Completed', value: 25, color: '#10B981' },
    { name: 'On Hold', value: 10, color: '#6B7280' },
  ];

  const recentActivities = [
    { id: 1, action: 'Created new project "Mobile App Redesign"', time: '2 hours ago', type: 'project' },
    { id: 2, action: 'Completed task "User Interface Design"', time: '4 hours ago', type: 'task' },
    { id: 3, action: 'Added team member Sarah Johnson', time: '1 day ago', type: 'team' },
    { id: 4, action: 'Updated project timeline', time: '2 days ago', type: 'update' },
    { id: 5, action: 'Launched "Digital Marketing Campaign"', time: '3 days ago', type: 'launch' },
  ];

  useEffect(() => {
    // Initialize dashboard data if empty
    if (state.dashboardData.analytics.totalProjects === 0) {
      actions.updateDashboard({
        analytics: {
          totalProjects: 24,
          activeProjects: 15,
          completedTasks: 156,
          teamMembers: 8
        },
        recentActivity: recentActivities
      });
    }
  }, []);

  const stats = [
    {
      title: 'Total Projects',
      value: state.dashboardData.analytics.totalProjects,
      change: '+12%',
      changeType: 'positive',
      icon: FolderKanban,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Active Projects',
      value: state.dashboardData.analytics.activeProjects,
      change: '+8%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'from-qalany-orange to-yellow-400'
    },
    {
      title: 'Completed Tasks',
      value: state.dashboardData.analytics.completedTasks,
      change: '+23%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Team Members',
      value: state.dashboardData.analytics.teamMembers,
      change: '+2',
      changeType: 'positive',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleCreateProject = () => {
    const newProject = {
      title: `Project ${Date.now()}`,
      description: 'New project created from dashboard',
      priority: 'medium',
      progress: 0
    };
    actions.addProject(newProject);
    toast.success('New project created!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-qalany-navy dark:text-white">
            Welcome back, {state.user.name || 'User'}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Here's what's happening with your projects today.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreateProject}
          className="mt-4 md:mt-0 bg-qalany-orange hover:bg-yellow-400 text-white px-6 py-3 rounded-xl font-medium flex items-center space-x-2 shadow-glow-orange transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </motion.button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-qalany-navy dark:text-white mt-1">
                    {stat.value}
                  </p>
                  <div className={`flex items-center mt-2 text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>{stat.change} from last month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Analytics Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-qalany-navy dark:text-white">
              Project Analytics
            </h3>
            <select className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-sm border-none focus:ring-2 focus:ring-qalany-orange">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E5E5" />
              <XAxis dataKey="name" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E5E5', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="projects" 
                stroke="#FCA311" 
                fill="#FCA311" 
                fillOpacity={0.3}
              />
              <Area 
                type="monotone" 
                dataKey="tasks" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Project Status Chart */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-qalany-navy dark:text-white mb-6">
            Project Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center space-x-6 mt-4">
            {projectStatusData.map((item) => (
              <div key={item.name} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-qalany-navy dark:text-white mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-2 h-2 bg-qalany-orange rounded-full mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-white font-medium">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-premium border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-qalany-navy dark:text-white mb-6">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button
              onClick={handleCreateProject}
              className="w-full bg-qalany-orange hover:bg-yellow-400 text-white p-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Project</span>
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule Meeting</span>
            </button>
            <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 p-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors">
              <Users className="w-4 h-4" />
              <span>Invite Team</span>
            </button>
          </div>

          {/* Achievement Badge */}
          <div className="mt-6 p-4 bg-gradient-to-r from-qalany-orange to-yellow-400 rounded-lg text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Star className="w-5 h-5" />
              <h4 className="font-semibold">Achievement Unlocked!</h4>
            </div>
            <p className="text-sm opacity-90">
              You've completed 100+ tasks this month. Great job! 🎉
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;