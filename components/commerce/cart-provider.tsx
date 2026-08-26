"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import type { Product } from "@/lib/dummyData";

export interface CartItem {
  id: string; // product.id + options fingerprint
  product: Product;
  quantity: number;
  selectedOptions?: Record<string, string>;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    selectedOptions?: Record<string, string>,
  ) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | null>(null);

// Stable, order-independent id for a product + option combo.
function lineItemId(
  productId: string,
  options?: Record<string, string>,
): string {
  const fingerprint = Object.keys(options ?? {})
    .sort()
    .map((k) => `${k}:${options![k]}`)
    .join("|");
  return `${productId}::${fingerprint}`;
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (
    product: Product,
    quantity: number = 1,
    selectedOptions?: Record<string, string>,
  ) => {
    const id = lineItemId(product.id, selectedOptions);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { id, product, quantity, selectedOptions }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
    });
  };

  const cartTotal = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  );

  const itemCount = useMemo(
    () => cartItems.reduce((count, item) => count + item.quantity, 0),
    [cartItems],
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
