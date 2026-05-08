import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Camera, ScanLine, X, MapPin, ChevronDown } from 'lucide-react';

/**
 * SearchBar — Address selector (top) + Search input (bottom)
 * Both fields have the same rounded design
 */
const SearchBar = ({ selectedAddress }) => {
  const navigate = useNavigate();
  const [query,   setQuery]   = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (query.trim()) navigate(`/vendor/search?q=${encodeURIComponent(query.trim())}`);
  };

  const shortAddress = selectedAddress?.address
    ? selectedAddress.address.slice(0, 40) + '...'
    : '83 kishan pura mataji mandir, sector no...';

  return (
    <div className="px-3 pb-2.5 flex flex-col gap-2">

      {/* ── Delivery Address Field ── */}
      <motion.div whileTap={{ scale: 0.98 }} className="w-full">
        <Link
          to="/vendor/profile/addresses"
          aria-label="Change delivery address"
          className="flex items-center gap-2.5 bg-[#2874F0] rounded-2xl px-4 py-3 w-full"
        >
          <div className="p-1.5 bg-white rounded-full flex-shrink-0">
            <MapPin size={16} strokeWidth={2} className="text-[#2874F0]" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-bold text-white uppercase tracking-wide block">HOME</span>
            <span className="text-[13px] text-white leading-tight block truncate">
              {shortAddress}
            </span>
          </div>
          <ChevronDown size={18} strokeWidth={2.5} className="text-white flex-shrink-0" />
        </Link>
      </motion.div>

      {/* ── Search Field ── */}
      <div className="flex items-center gap-2">
        <motion.form
          onSubmit={handleSubmit}
          animate={{ scale: searchFocused ? 1.005 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="flex-1 flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 border"
          style={{
            borderColor: searchFocused ? '#2874F0' : '#e5e7eb',
            boxShadow:   searchFocused ? '0 0 0 2px rgba(40,116,240,0.15)' : 'none',
          }}
        >
          <Search size={18} strokeWidth={2} className="text-gray-500 flex-shrink-0" />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="shoes"
            className="flex-1 bg-transparent outline-none text-[14px] placeholder:text-gray-400 text-gray-800 font-normal min-w-0"
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
                <X size={12} strokeWidth={2.5} className="text-gray-600" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Camera */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.82 }}
            whileHover={{ scale: 1.15 }}
            className="flex-shrink-0"
            aria-label="Search by image"
          >
            <Camera size={20} strokeWidth={1.8} className="text-gray-500" />
          </motion.button>
        </motion.form>

        {/* QR Scan Button (separate) */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="p-3 bg-white rounded-xl border border-gray-200 flex-shrink-0"
          aria-label="Scan QR code"
        >
          <ScanLine size={22} strokeWidth={1.8} className="text-[#2874F0]" />
        </motion.button>
      </div>

    </div>
  );
};

export default SearchBar;
