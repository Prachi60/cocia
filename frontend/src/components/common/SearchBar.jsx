import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Camera, ScanLine, X, MapPin, ChevronDown } from 'lucide-react';

/**
 * SearchBar — Address selector (left) + Search input (right)
 * Address is shown as a compact pill on the left of the search bar
 */
const SearchBar = ({ selectedAddress }) => {
  const navigate = useNavigate();
  const [query,   setQuery]   = useState('');
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (query.trim()) navigate(`/vendor/search?q=${encodeURIComponent(query.trim())}`);
  };

  const shortAddress = selectedAddress?.address
    ? selectedAddress.address.slice(0, 18) + '...'
    : 'Select location';

  return (
    <div className="px-3 pb-2.5 flex items-center gap-2">

      {/* ── Search bar ── */}
      <motion.form
        onSubmit={handleSubmit}
        animate={{ scale: focused ? 1.005 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="flex-1 flex items-center gap-2 bg-gray-100 rounded-full px-3.5 py-2.5 border"
        style={{
          borderColor: focused ? '#2874F0' : '#e5e7eb',
          boxShadow:   focused ? '0 0 0 2px rgba(40,116,240,0.15)' : 'none',
        }}
      >
        <Search size={15} strokeWidth={2} className="text-gray-400 flex-shrink-0" />

        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="Search Products, Brands..."
          className="flex-1 bg-transparent outline-none text-[12.5px] placeholder:text-gray-400 text-gray-800 font-medium min-w-0"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />

        <AnimatePresence>
          {query.length > 0 && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.15 }}
              onClick={() => setQuery('')}
              className="p-0.5 rounded-full bg-gray-300 flex-shrink-0"
              aria-label="Clear"
            >
              <X size={10} strokeWidth={2.5} className="text-gray-600" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Divider */}
        <div className="w-px h-3.5 bg-gray-300 flex-shrink-0" />

        {/* Camera */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.82 }}
          whileHover={{ scale: 1.15 }}
          className="flex-shrink-0"
          aria-label="Search by image"
        >
          <Camera size={16} strokeWidth={1.8} className="text-[#2874F0]" />
        </motion.button>

        {/* QR Scan */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.82 }}
          whileHover={{ scale: 1.15 }}
          className="flex-shrink-0"
          aria-label="Scan QR code"
        >
          <ScanLine size={16} strokeWidth={1.8} className="text-[#2874F0]" />
        </motion.button>
      </motion.form>

      {/* ── Address pill (right) ── */}
      <motion.div whileTap={{ scale: 0.95 }} className="flex-shrink-0">
        <Link
          to="/vendor/profile/addresses"
          aria-label="Change delivery address"
          className="flex flex-col items-start"
        >
          <div className="flex items-center gap-0.5">
            <MapPin size={12} strokeWidth={2.2} className="text-[#2874F0]" />
            <span className="text-[10px] font-bold text-gray-800 leading-tight">Deliver to</span>
            <ChevronDown size={10} strokeWidth={2.5} className="text-[#2874F0]" />
          </div>
          <span className="text-[9.5px] text-gray-500 leading-tight max-w-[80px] truncate">
            {shortAddress}
          </span>
        </Link>
      </motion.div>

    </div>
  );
};

export default SearchBar;
