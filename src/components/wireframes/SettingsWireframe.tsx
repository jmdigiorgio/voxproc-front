import React, { useState } from 'react';
import HeaderWireframe from './HeaderWireframe';
import FooterWireframe from './FooterWireframe';

type SettingsTab = 'account' | 'notification' | 'stream' | 'community';

const SettingsWireframe = ({ children }: { children?: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [username, setUsername] = useState('@currentuser');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState('user@example.com');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState(
    'Hi there! I love creating and sharing streams.'
  );
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [phone, setPhone] = useState('+1 (555) 123-4567');
  const [isEditingBirthdate, setIsEditingBirthdate] = useState(false);
  const [birthdate, setBirthdate] = useState('1990-01-01');
  const [isEditingLocation, setIsEditingLocation] = useState(false);
  const [location, setLocation] = useState('San Francisco, CA');

  const tabs: { id: SettingsTab; label: string }[] = [
    { id: 'account', label: 'Account' },
    { id: 'notification', label: 'Notification' },
    { id: 'stream', label: 'Stream' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-mono">
      <HeaderWireframe />

      {/* Main content area */}
      <main className="flex-1 container mx-auto px-5 py-8">
        {/* Settings Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 bg-zinc-900 p-1 rounded-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-400/10 text-emerald-400'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Settings Content */}
        <div className="max-w-3xl mx-auto">
          {/* Account Settings */}
          {activeTab === 'account' && (
            <div className="space-y-6">
              {/* Profile Settings */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Profile Settings</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">Username</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        readOnly={!isEditingUsername}
                        className={`flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                          isEditingUsername ? 'focus:border-emerald-400/50' : ''
                        }`}
                      />
                      <button
                        onClick={() => setIsEditingUsername(!isEditingUsername)}
                        className={`p-2 rounded-lg transition-colors ${
                          isEditingUsername
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingUsername ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">Email</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        readOnly={!isEditingEmail}
                        className={`flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                          isEditingEmail ? 'focus:border-emerald-400/50' : ''
                        }`}
                      />
                      <button
                        onClick={() => setIsEditingEmail(!isEditingEmail)}
                        className={`p-2 rounded-lg transition-colors ${
                          isEditingEmail
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingEmail ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">Bio</label>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <textarea
                          value={bio}
                          onChange={e => setBio(e.target.value)}
                          readOnly={!isEditingBio}
                          className={`w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                            isEditingBio ? 'focus:border-emerald-400/50' : ''
                          }`}
                          rows={3}
                        />
                      </div>
                      <button
                        onClick={() => setIsEditingBio(!isEditingBio)}
                        className={`p-2 h-fit rounded-lg transition-colors ${
                          isEditingBio
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingBio ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Phone Number
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        readOnly={!isEditingPhone}
                        className={`flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                          isEditingPhone ? 'focus:border-emerald-400/50' : ''
                        }`}
                      />
                      <button
                        onClick={() => setIsEditingPhone(!isEditingPhone)}
                        className={`p-2 rounded-lg transition-colors ${
                          isEditingPhone
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingPhone ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Birthdate
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="date"
                        value={birthdate}
                        onChange={e => setBirthdate(e.target.value)}
                        readOnly={!isEditingBirthdate}
                        className={`flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                          isEditingBirthdate
                            ? 'focus:border-emerald-400/50'
                            : ''
                        }`}
                      />
                      <button
                        onClick={() =>
                          setIsEditingBirthdate(!isEditingBirthdate)
                        }
                        className={`p-2 rounded-lg transition-colors ${
                          isEditingBirthdate
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingBirthdate ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">Location</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        readOnly={!isEditingLocation}
                        className={`flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none ${
                          isEditingLocation ? 'focus:border-emerald-400/50' : ''
                        }`}
                      />
                      <button
                        onClick={() => setIsEditingLocation(!isEditingLocation)}
                        className={`p-2 rounded-lg transition-colors ${
                          isEditingLocation
                            ? 'bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20'
                            : 'text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        {isEditingLocation ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5"
                            strokeWidth={2}
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy Settings */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Privacy Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Profile Visibility</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Activity Visibility</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                </div>
              </section>

              {/* Account Management */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">
                  Account Management
                </h3>
                <div className="space-y-4">
                  <button className="px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20">
                    Delete Account
                  </button>
                </div>
              </section>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notification' && (
            <div className="space-y-6">
              {/* Notification Settings */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">
                  Notification Settings
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Desktop Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Sound Notifications</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Stream Settings */}
          {activeTab === 'stream' && (
            <div className="space-y-6">
              {/* Stream Identity */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Stream Identity</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Stream name"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Description
                    </label>
                    <textarea
                      placeholder="Stream description"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                      rows={3}
                    />
                  </div>
                </div>
              </section>

              {/* Stream Sources */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Stream Sources</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Source URL or @handle"
                      className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                    />
                    <select className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50">
                      <option>Twitter</option>
                      <option>Bluesky</option>
                      <option>Threads</option>
                      <option>RSS Feed</option>
                    </select>
                    <button className="px-4 py-2 bg-emerald-400/10 text-emerald-400 rounded-lg hover:bg-emerald-400/20">
                      Add
                    </button>
                  </div>
                  <div className="text-zinc-400 text-sm">
                    Added sources will appear here
                  </div>
                </div>
              </section>

              {/* Stream Rules */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Stream Rules</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Filter Rules
                    </label>
                    <textarea
                      placeholder="Enter filter rules"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                      rows={3}
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Trigger Rules
                    </label>
                    <textarea
                      placeholder="Enter trigger rules"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                      rows={3}
                    />
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Community Settings */}
          {activeTab === 'community' && (
            <div className="space-y-6">
              {/* Community Participation */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">
                  Community Participation
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Share New Streams</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Share Stream Updates</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-300">Share Activity</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-400"></div>
                    </label>
                  </div>
                </div>
              </section>

              {/* Community Rules */}
              <section className="bg-zinc-900 rounded-lg p-6">
                <h3 className="text-zinc-200 text-lg mb-4">Community Rules</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Content Guidelines
                    </label>
                    <textarea
                      placeholder="Community content guidelines"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                      rows={3}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-300 mb-2">
                      Code of Conduct
                    </label>
                    <textarea
                      placeholder="Community code of conduct"
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-zinc-300 focus:outline-none focus:border-emerald-400/50"
                      rows={3}
                      readOnly
                    />
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <FooterWireframe />
    </div>
  );
};

export default SettingsWireframe;
