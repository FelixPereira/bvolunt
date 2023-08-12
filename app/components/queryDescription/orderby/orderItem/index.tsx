import React from 'react';

interface OrderItemProps {
  label: string;
  isActive: boolean;
  order: string;
  handleClick: (order: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({
  handleClick,
  label,
  isActive,
  order,
}) => {
  return (
    <li
      className={`
      p-[10px]
      cursor-pointer
      ${isActive ? 'bg-neutralGray' : 'bg-transparent'}
      hover:bg-neutralGray
    `}
      onClick={() => handleClick(order)}
    >
      {label}
    </li>
  );
};

export default OrderItem;
