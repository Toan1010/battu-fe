import { useState, useEffect } from 'react'
import { User } from '../../interfaces/user'
import { Trash2, Edit3, Plus, UserPlus, Save, XCircle } from 'lucide-react'
import FormField from '../molecules/FormField'

const DEFAULT_USERS: User[] = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Frontend Engineer' },
  { id: '2', name: 'Bob Johnson', email: 'bob@example.com', role: 'DevOps Architect' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Backend Engineer' }
]

export default function UserCrud() {
  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('crud_users')
      return saved ? JSON.parse(saved) : DEFAULT_USERS
    }
    return DEFAULT_USERS
  })

  const [formData, setFormData] = useState({ name: '', email: '', role: '' })
  const [editingId, setEditingId] = useState<string | null>(null)

  useEffect(() => {
    localStorage.setItem('crud_users', JSON.stringify(users))
  }, [users])

  const handleInputChange = (field: 'name' | 'email' | 'role', val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }))
  }

  const handleAddOrUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.role) return

    if (editingId) {
      // Update
      setUsers((prev) =>
        prev.map((u) => (u.id === editingId ? { ...u, ...formData } : u))
      )
      setEditingId(null)
    } else {
      // Create
      const newUser: User = {
        id: Date.now().toString(),
        ...formData
      }
      setUsers((prev) => [...prev, newUser])
    }

    setFormData({ name: '', email: '', role: '' })
  }

  const handleEdit = (user: User) => {
    setEditingId(user.id)
    setFormData({ name: user.name, email: user.email, role: user.role })
  }

  const handleDelete = (id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setFormData({ name: '', email: '', role: '' })
    }
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setFormData({ name: '', email: '', role: '' })
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          User Management CRUD
        </h1>
        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
        <p className="text-slate-655 dark:text-slate-400">
          A fully functional localized CRUD component to test routing capabilities.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Form panel */}
        <div className="lg:col-span-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            {editingId ? <Edit3 className="w-5 h-5 text-indigo-500" /> : <UserPlus className="w-5 h-5 text-indigo-500" />}
            {editingId ? 'Edit User Details' : 'Register New User'}
          </h2>

          <form onSubmit={handleAddOrUpdate} className="space-y-4">
            <FormField
              id="userName"
              label="Full Name"
              required
              value={formData.name}
              onChange={(val) => handleInputChange('name', val)}
              placeholder="e.g. Jean Dupont"
            />
            <FormField
              id="userEmail"
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={(val) => handleInputChange('email', val)}
              placeholder="e.g. jean@company.com"
            />
            <FormField
              id="userRole"
              label="Job Role"
              required
              value={formData.role}
              onChange={(val) => handleInputChange('role', val)}
              placeholder="e.g. Technical Lead"
            />

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {editingId ? (
                  <>
                    <Save className="w-4 h-4" /> Save changes
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4" /> Add User
                  </>
                )}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-850 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center cursor-pointer"
                  title="Cancel Edit"
                >
                  <XCircle className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
        </div>

        {/* List Table panel */}
        <div className="lg:col-span-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-md overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#0c101b]/50">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Active Users ({users.length})</h3>
          </div>

          {users.length === 0 ? (
            <div className="p-12 text-center text-slate-400">
              No registered users. Use the form to register new active members.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800/80 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50/20 dark:bg-transparent">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
                  {users.map((user) => (
                    <tr 
                      key={user.id} 
                      className={`hover:bg-slate-50/30 dark:hover:bg-white/3 transition-colors ${
                        editingId === user.id ? 'bg-indigo-50/10 dark:bg-indigo-500/5' : ''
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-250">
                        {user.name}
                      </td>
                      <td className="px-6 py-4 text-slate-550 dark:text-slate-400">
                        {user.email}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-650 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-550/10">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-3">
                          <button
                            onClick={() => handleEdit(user)}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-650 dark:hover:text-indigo-400 transition-all cursor-pointer"
                            title="Edit User"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all cursor-pointer"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
