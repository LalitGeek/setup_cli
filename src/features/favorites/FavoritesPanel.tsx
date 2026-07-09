import React, { useState } from 'react';
import { Star, Copy, Check, Trash2, Download, CloudLightning, Plus, Folder } from 'lucide-react';

export interface FavoriteItem {
  id: string;
  name: string;
  command: string;
  dateAdded: Date;
}

interface FavoritesPanelProps {
  favorites: FavoriteItem[];
  onRemoveFavorite: (id: string) => void;
  onAddFavorite: (name: string, command: string) => void;
  onAddHistory?: (action: string, detail: string) => void;
}

export const FavoritesPanel: React.FC<FavoritesPanelProps> = ({
  favorites,
  onRemoveFavorite,
  onAddFavorite,
  onAddHistory
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [customName, setCustomName] = useState<string>('');
  const [customCommand, setCustomCommand] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const handleCopy = (command: string, id: string) => {
    navigator.clipboard.writeText(command);
    setCopiedId(id);
    if (onAddHistory) {
      onAddHistory('Copied from Favorites', command.slice(0, 30));
    }
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim() || !customCommand.trim()) return;
    onAddFavorite(customName.trim(), customCommand.trim());
    setCustomName('');
    setCustomCommand('');
    setShowAddForm(false);
    if (onAddHistory) {
      onAddHistory('Added Custom Command', customName);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(favorites, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "setup_cli_favorites_export.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    if (onAddHistory) {
      onAddHistory('Exported Favorites', `${favorites.length} items`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-950/20 rounded-xl border border-white/5 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-950/10 to-transparent">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span>Pinned Commands & Collections</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Manage and export your favorite snippets</p>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 text-white text-xs px-3.5 py-2 rounded-lg font-semibold flex items-center space-x-1.5 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Snippet</span>
          </button>
          <button
            onClick={handleExport}
            disabled={favorites.length === 0}
            className="bg-gray-800/80 hover:bg-gray-800 border border-white/10 disabled:opacity-40 text-gray-300 text-xs px-3.5 py-2 rounded-lg font-semibold flex items-center space-x-1.5 transition"
          >
            <Download className="w-4 h-4" />
            <span>Export Collections</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {/* Add custom form */}
        {showAddForm && (
          <form onSubmit={handleAddCustom} className="bg-gray-900/40 border border-white/10 p-4 rounded-xl space-y-4 animate-fade-in">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Add Custom Command</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Snippet Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Docker Clean Containers"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-gray-950 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Action Category / Tag</label>
                <div className="flex items-center space-x-2 text-xs text-purple-400 font-semibold bg-gray-950 border border-white/5 rounded-lg px-3 py-2">
                  <Folder className="w-4 h-4" />
                  <span>Custom Collection</span>
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Command String</label>
              <textarea
                required
                rows={2}
                placeholder="docker rm -f $(docker ps -a -q)"
                value={customCommand}
                onChange={(e) => setCustomCommand(e.target.value)}
                className="w-full bg-gray-950 border border-white/10 rounded-lg p-3 font-mono text-xs text-green-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs text-gray-400 hover:text-gray-200 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3.5 py-1.5 rounded-lg font-semibold transition"
              >
                Save Snippet
              </button>
            </div>
          </form>
        )}

        {/* Favorites list */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Star className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-sm font-bold text-gray-400">No favorite commands saved yet</h3>
            <p className="text-xs text-gray-500 mt-1 max-w-sm">
              Click "Pin to Favs" or "Pin Fav" while browsing guides or talking to the AI assistant to save snippets here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900/30 border border-white/5 rounded-xl overflow-hidden hover:border-purple-500/25 transition duration-200"
              >
                <div className="flex justify-between items-center bg-gray-900/60 px-4.5 py-2.5 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    <span className="text-xs font-bold text-gray-300">{item.name}</span>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <span className="text-[10px] text-gray-500">
                      {new Date(item.dateAdded).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                    </span>
                    <button
                      onClick={() => handleCopy(item.command, item.id)}
                      className="text-gray-400 hover:text-purple-400 transition"
                      title="Copy Command"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => onRemoveFavorite(item.id)}
                      className="text-gray-400 hover:text-red-400 transition"
                      title="Remove Favorite"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-black/20 font-mono text-xs text-green-400 overflow-x-auto whitespace-pre">
                  <code>{item.command}</code>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sync panel */}
        <div className="bg-gradient-to-r from-purple-950/20 to-transparent border border-purple-900/30 rounded-xl p-4.5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <CloudLightning className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-xs font-bold text-white block">Sync Collections with GitHub</span>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                Connect your account to save snippets directly to a private GitHub Gist and sync settings across devices.
              </p>
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3.5 py-2 rounded-lg font-semibold transition flex-shrink-0 cursor-pointer">
            Authorize Account
          </button>
        </div>
      </div>
    </div>
  );
};
