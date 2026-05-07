import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bell, Heart, ShoppingCart } from 'lucide-react';

const HeaderTop = ({ cartCount = 0 }) => {
  return (
    <div className="px-3 pt-2 pb-1.5 flex items-center justify-between">

      {/* ── Logo ── */}
      <Link to="/vendor/home" className="flex items-center flex-shrink-0">
        <motion.img
          src="/Logo (4).png"
          alt="Cocia"
          className="h-14 w-36 object-contain object-left"
          whileTap={{ scale: 0.95 }}
        />
      </Link>

      {/* ── Action Icons ── */}
      <div className="flex items-center gap-0.5 flex-shrink-0">

        <motion.div whileTap={{ scale: 0.82 }} whileHover={{ scale: 1.1 }}>
          <Link to="/vendor/notifications" aria-label="Notifications" className="p-1.5 block">
            <Bell size={21} strokeWidth={1.6} className="text-gray-600" />
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.82 }} whileHover={{ scale: 1.1 }}>
          <Link to="/vendor/wishlist" aria-label="Wishlist" className="p-1.5 block">
            <Heart size={21} strokeWidth={1.6} className="text-gray-600" />
          </Link>
        </motion.div>

        <motion.div whileTap={{ scale: 0.82 }} whileHover={{ scale: 1.1 }}>
          <Link to="/vendor/cart" aria-label="Cart" className="relative p-1.5 block">
            <ShoppingCart size={21} strokeWidth={1.6} className="text-gray-600" />
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute -top-0.5 -right-0.5 text-[8px] font-black min-w-[16px] h-4 px-1 rounded-full bg-[#2874F0] text-white leading-none flex items-center justify-center shadow"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default HeaderTop;
